import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Company } from './company-model';

@Injectable({
    providedIn: 'root',
})
export class CompanyExploreService {

    constructor(private http: HttpClient) {
       
    }

    fetchCompanies() {
        return this.http.get<Company[]>('http://localhost:3000/companies');
    }
}