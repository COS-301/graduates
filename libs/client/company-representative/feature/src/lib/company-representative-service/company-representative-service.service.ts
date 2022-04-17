import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyRepresentativeServiceService {
  constructor(private httpClient: HttpClient) { }

  getDefaultRepresentative(companyID: string): Observable<any> {
    const query = 'mutation{getDefaultRepresentative(id:"'+companyID+'"){repName,jobTitle,repExperience,aboutMe,phoneNumber,location,email,website,linkedIn,twitter,instagram,facebook,snapChat,gitHub}}';
    console.log(companyID);
    console.log(query);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }
}
