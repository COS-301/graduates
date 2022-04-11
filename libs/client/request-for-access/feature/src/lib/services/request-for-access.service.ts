import { Injectable } from '@angular/core';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestForAccessService {
    getResourceStatuses(companyID: string): Observable<AjaxResponse<JSON>> {
      return ajax({
        url: 'http://localhost:3333/graphql',
        method: 'POST',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          'query': 'query ($id: ID!){status(compID: $id){ accessStatus, item, userID }}',
          'variables': { 'id': companyID }
        }
      });
    }

    requestAccess(companyID: string, studentID: string, item: string): void {
      ajax({
        url: 'http://localhost:3333/graphql',
        method: 'POST',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          'query': 'mutation ($compID: ID!, $studentID: ID!, $item: String!){requestAccess(compID: $compID, userID: $studentID, item: $item){ userID }}',
          'variables': { 'compID': companyID, 'studentID': studentID, 'item': item }
        }
      });
    }
}
