import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyRepresentativeService {
  constructor(private httpClient: HttpClient) { }

  getCompanyRepresentative(repID: string): Observable<any> {
    const query = 'query{getCompanyRepresentative(id:"' + repID + '"){repName,jobTitle,repExperience,aboutMe,phoneNumber,location,email,website,linkedIn,twitter,instagram,facebook,snapChat,gitHub}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }

  login(email: string, password: string): Observable<any> {
    const query = 'query{login(email: "' + email + '", password: "' + password + '"){id}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }

  deleteRepresentative(repID: string): Observable<any> {
    const query = 'mutation{deleteCompanyRepresentative(id:"c1234"){repName}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }
}
