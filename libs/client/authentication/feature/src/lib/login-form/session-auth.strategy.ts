export class SessionAuthStrategy implements AuthStrategy<User> {

    private loggedUser: User;
  
    constructor(private http: HttpClient) {}
  
    doLoginUser(user: User): void {
      this.loggedUser = user;
    }
  
    doLogoutUser(): void {
      this.loggedUser = undefined;
    }
  
    getCurrentUser(): Observable<User> {
      if (this.loggedUser) {
        return of(this.loggedUser);
      } else {
        return this.http.get<User>(`${config.authUrl}/user`)
          .pipe(tap(user => this.loggedUser = user));
      }
    }
  }