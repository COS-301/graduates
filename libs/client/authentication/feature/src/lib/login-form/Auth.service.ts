@Injectable({
    providedIn: 'graduates-login-form'
  })
  export class AuthService {
    
    public readonly LOGIN_PATH = './login-form.component';
   
  
    constructor(
      private router: Router,
      private http: HttpClient,
      @Inject(AUTH_STRATEGY) private auth: AuthStrategy<any>
    ) { }
  
    signup(user: User): Observable<void> {
      return this.http.post<any>(`${config.authUrl}/signup`, user);
    }
  
    confirm(email: string, code: string): Observable<void> {
      return this.http.post<any>(`${config.authUrl}/confirm?`, {email, code});
    }
  
    login(loginRequest: LoginRequest): Observable<User> {
      return this.http.post<any>(`${config.authUrl}/login`, loginRequest)
        .pipe(tap(data => this.auth.doLoginUser(data)));
    }
  
    logout() {
      return this.http.get<any>(`${config.authUrl}/logout`)
        .pipe(tap(() => this.doLogoutUser()));
    }
  
    isLoggedIn$(): Observable<boolean> {
      return this.auth.getCurrentUser().pipe(
        map(user => !!user),
        catchError(() => of(false))
      );
    }
  
    getCurrentUser$(): Observable<User> {
      return this.auth.getCurrentUser();
    }
  
    private doLogoutUser() {
      this.auth.doLogoutUser();
    }
  
  }