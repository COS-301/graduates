import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Company } from './company-model';

@Injectable({
    providedIn: 'root',
})
export class CompanyExploreService {

<<<<<<< Updated upstream
    constructor(private http: HttpClient) {
       
    }

    fetchCompanies() {
        return this.http.get<Company[]>('http://localhost:3000/companies');
=======
    fetchCompanies(){
      const query =
      "query{GetListOfCompanies{companyID,name,Userprofile{profilePicture}}}";
  
      const options = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    
      return this.http.post<any>(
        "https://301graduates.live:3333/graphql",
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
        "https://301graduates.live:3333/graphql",
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
        "https://301graduates.live:3333/graphql",
        JSON.stringify({
          query: query
        }),
        options
      );
>>>>>>> Stashed changes
    }
}