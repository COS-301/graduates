import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestForAccessService {
  constructor(private httpClient: HttpClient) { }

  getResourceStatuses(companyID: string, graduateID: string): Observable<any> {
    const query = 'query ($compID: ID!, $gradID: ID!) {status(compId: $compID, gradId: $gradID) { accessStatus, item }}';

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query, variables: { compID: companyID, gradID: graduateID } }), options);
  }

  requestAccess(companyID: string, graduateID: string, item: string): void {
    const query = `mutation ($compID: ID!, $userID: ID!, $item: String!){requestAccess(compID: $compID, userID: $userID, item: $item){ userID }}`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.httpClient.post('http://localhost:3333/graphql', JSON.stringify({ query: query, variables: { compID: companyID, userID: graduateID, item: item } }), options);
  }
}
