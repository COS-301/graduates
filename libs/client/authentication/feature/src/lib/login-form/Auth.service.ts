/*@Injectable({
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
  
  }*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }



  login(email: string, password: string): Observable<any> {
    const query = 'query{login(email: "' + email + '", password: "' + password + '"){id}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('https://301graduates.live:3333/graphql',JSON.stringify({ query: query }), options);
  }

}
