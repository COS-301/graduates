import { Injectable } from "@angular/core";
import { Observable,BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CompanyProfileService {
  ID:any = "";
  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  constructor(private httpClient: HttpClient) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.ID = urlParams.get('ID')
  }

  changeMessage(message:string){
    this.messageSource.next(message);
  }

  runQuery(query:string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.httpClient.post<any>(
      "http://localhost:3333/graphql",
      JSON.stringify({
        query: query,
        variables: { compID: this.ID},
      }),
      options
    );
  }

  getCompany(): Observable<any> {
    return this.runQuery('query{getCompanyByID(company_id: "'+this.ID+'"){id,name}}');
  }

  getNumbers(): Observable<any> {
    return this.runQuery('query{getCompanyNumber(company_id: "'+this.ID+'"){userId,number}}');
  }

  getLocation(): Observable<any> {
    return this.runQuery('query{getCompanyLocation(company_id: "'+this.ID+'"){userId, location}}');
  }

  getEmail(): Observable<any> {
    return this.runQuery('query{getCompanyEmail(company_id: "'+this.ID+'"){userId,email}}');
  }

  getSocials(): Observable<any> {
    return this.runQuery('query{getCompanySocialMedia(company_id: "'+this.ID+'"){userId, type, link}}');
  }

  getBio(): Observable<any> {
    return this.runQuery('query{getCompanyBio(company_id: "'+this.ID+'"){userId,bio}}');
  }

  getRepresentatives(): Observable<any> {
    return this.runQuery('query{getCompanyReps(company_id: "'+this.ID+'"){id, name, companyId}}');
  }

  setBio(param: string | undefined): Observable<any> {
    console.log(param);
    return this.runQuery('mutation{updateCompanyBio(bio:{id:"'+this.ID+'",bio:"'+param+'"}){userId,bio}}');
  }
}