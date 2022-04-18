import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RequestForAccessService {
  constructor(private httpClient: HttpClient) {}

  getResourceStatuses(companyID: string, graduateID: string): Observable<any> {
    const query =
      "query ($compID: ID!, $gradID: ID!) {status(compId: $compID, gradId: $gradID) { accessStatus, item }}";

    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.httpClient.post<any>(
      "http://localhost:3333/graphql",
      JSON.stringify({
        query: query,
        variables: { compID: companyID, gradID: graduateID },
      }),
      options
    );
  }

  requestAccess(companyID: string, graduateID: string, item: string): Observable<any> {
    const query = `mutation ($compId: ID!, $gradId: ID!, $item: String!){requestAccess(compId: $compId, gradId: $gradId, item: $item){ userID }}`;

    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.httpClient.post<any>(
      "http://localhost:3333/graphql",
      JSON.stringify({
        query: query,
        variables: { compId: companyID, gradId: graduateID, item: item },
      }),
      options
    );
  }
}
