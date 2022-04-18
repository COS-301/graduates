import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Company } from './company-model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class CompanyExploreService 
{

    constructor(private http: HttpClient) { }

    fetchCompanies(){
      const query =
      "query{GetListOfCompanies{companyID,name,Userprofile{profilePicture}}}";
  
      const options = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    
      return this.http.post<any>(
        "http://localhost:3333/graphql",
        JSON.stringify({
          query: query,
        }),
        options
      );
    }
    searchCompanies(search:string){
      const query =
      'query{GetCompanySearchResult(company_name:"' + search + '"){companyID,name,Userprofile{profilePicture}}}';
      const options = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    
      return this.http.post<any>(
        "http://localhost:3333/graphql",
        JSON.stringify({
          query: query
        }),
        options
      );
    }
    filterCompanies(filter:string){
      const query =
      'query{GetCompanyTagged(inputTag:"'+filter+'"){companyID,name,Userprofile{profilePicture}}}';
      const options = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    
      return this.http.post<any>(
        "http://localhost:3333/graphql",
        JSON.stringify({
          query: query
        }),
        options
      );
    }
}    