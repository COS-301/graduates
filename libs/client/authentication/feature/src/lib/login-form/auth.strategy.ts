export interface AuthStrategy<T> {

    doLoginUser(data: T): void;
  
    doLogoutUser(): void;
  
    getCurrentUser(): Observable<User>;
  
  }
  
  export const AUTH_STRATEGY = new InjectionToken<AuthStrategy<any>>('AuthStrategy');
  
  export const authStrategyProvider = {
    provide: AUTH_STRATEGY,
    deps: [HttpClient],
    useFactory: (http: HttpClient) => {
      switch (config.auth) {
          case 'session':
            return new SessionAuthStrategy(http);
          case 'token':
            return new JwtAuthStrategy();
        }
    }
  };