import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Company} from './company-model';
import {GetCompanyList,SetSelectedCompany} from './company-explore.actions';
import {CompanyExploreService} from './company-explore.service';
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class CompanyExploreStateModel {
    companies!: Company[];
    selectedCompany!: Company;
}

@State<CompanyExploreStateModel>({
    name: 'companies',
    defaults: {
        companies: [],
        selectedCompany:{name:"",img:""},         
    }
})
@Injectable()
export class CompanyExploreState {

   constructor(private companyExploreService: CompanyExploreService) {
    }
    @Selector()
    static getCompanyList(state: CompanyExploreStateModel) {
        return state.companies;
    }
    
    @Selector()
    static getSelectedCompany(state: CompanyExploreStateModel) {
        return state.selectedCompany;
    }

    @Action(GetCompanyList)
    getCompanyList({getState, setState}: StateContext<CompanyExploreStateModel>) {
        return this.companyExploreService.fetchCompanies().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                companies: result,
            });
        }));
    }

    @Action(SetSelectedCompany)
    setSelectedCompanyId({getState, setState}: StateContext<CompanyExploreStateModel>, {payload}: SetSelectedCompany) {
        const state = getState();
        setState({
            ...state,
            selectedCompany: payload
        });
    }
}