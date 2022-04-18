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

    fetchCompanies():Observable<any> {
        const query =
          "query {getListOfComapnies{id,name,UserProfile{profilePicture}}}";
    
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
}    