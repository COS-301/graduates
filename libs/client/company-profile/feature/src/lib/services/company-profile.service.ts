import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CompanyProfileService {
  constructor(private httpClient: HttpClient) {}

  runQuery(query:string, companyID:string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.httpClient.post<any>(
      "http://localhost:3333/graphql",
      JSON.stringify({
        query: query,
        variables: { compID: companyID},
      }),
      options
    );
  }

  getCompany(companyID: string): Observable<any> {
    return this.runQuery('query{getCompanyByID(company_id: "'+companyID+'"){id,name}}',companyID);
  }

  getNumbers(companyID: string): Observable<any> {
    return this.runQuery('query{getCompanyNumber(company_id: "'+companyID+'"){userId,number}}',companyID);
  }

  getLocation(companyID: string): Observable<any> {
    return this.runQuery('query{getCompanyLocation(company_id: "'+companyID+'"){userId, location}}',companyID);
  }

  getEmail(companyID: string): Observable<any> {
    return this.runQuery('query{getCompanyEmail(company_id: "'+companyID+'"){userId,email}}',companyID);
  }

  getSocials(companyID: string): Observable<any> {
    return this.runQuery('query{getCompanySocialMedia(company_id: "'+companyID+'"){userId, type, link}}',companyID);
  }

  getBio(companyID: string): Observable<any> {
    return this.runQuery('query{getCompanyBio(company_id: "'+companyID+'"){userId,bio}}',companyID);
  }

  getRepresentatives(companyID: string): Observable<any> {
    return this.runQuery('query{getCompanyReps(company_id: "'+companyID+'"){id, name, companyId}}',companyID);
  }
}