import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestForAccessService {
    constructor(private httpClient: HttpClient) {}

    getResourceStatuses(companyID: string, graduateID: string): Observable<any> {
      const body = {
        'query': 'query ($compID: ID!, $gradID: ID!){status(compID: $id, gradID: $gradID){ accessStatus, item, userID }}',
        'variables': { 'compID': companyID, 'gradID': graduateID }
      }

      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

      return this.httpClient.post<any>('http://localhost:3333/graphql', body, options);
    }

    requestAccess(companyID: string, studentID: string, item: string): void {
      const body = {
        'query': 'mutation ($compID: ID!, $studentID: ID!, $item: String!){requestAccess(compID: $compID, userID: $studentID, item: $item){ userID }}',
        'variables': { 'compID': companyID, 'studentID': studentID, 'item': item }
      }

      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

      this.httpClient.post('http://localhost:3333/graphql', body, options);
    }
}
