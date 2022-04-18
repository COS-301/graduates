import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Company} from './company-model';
import {GetCompanyList,SearchCompanyList,FilterCompanyList} from './company-explore.actions';
import {CompanyExploreService} from './company-explore.service';
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Item } from '@prisma/client';

export class CompanyExploreStateModel {
    companies!: Company[];
    search!:string;
    filter!:string;
}

@State<CompanyExploreStateModel>({
    name: 'companies',
    defaults: {
        companies: [],
        search:"",
        filter:""
    }
})
@Injectable()
export class CompanyExploreState {

   constructor(private companyExploreService: CompanyExploreService) {
    }
    @Selector()
    static getCompanyList(state: CompanyExploreStateModel) {
        return state.companies
    }

    @Action(GetCompanyList)
    getListOfCompany({getState, setState}: StateContext<CompanyExploreStateModel>,state:CompanyExploreStateModel) {
        return this.companyExploreService.fetchCompanies().pipe(tap((result) => {
            console.log()
            const state = getState();
            setState({
                ...state,
            companies:result.data.GetListOfCompanies
            });
        }));   
    }
    @Action(SearchCompanyList)
    searchCompanyList({getState, setState}: StateContext<CompanyExploreStateModel>, {payload}: SearchCompanyList) {
        return this.companyExploreService.searchCompanies(payload).pipe(tap((result) => {
            console.log()
            const state = getState();
            setState({
                ...state,
            companies:result.data.GetCompanySearchResult
            });
        }));   
    }
    @Action(FilterCompanyList)
    filterCompanyList({getState, setState}: StateContext<CompanyExploreStateModel>, {payload}: SearchCompanyList) {
        return this.companyExploreService.filterCompanies(payload).pipe(tap((result) => {
            console.log()
            const state = getState();
            setState({
                ...state,
            companies:result.data.GetCompanyTagged
            });
        }));   
    }
     
}