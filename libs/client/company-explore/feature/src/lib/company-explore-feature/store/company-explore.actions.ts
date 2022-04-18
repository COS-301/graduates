import {Company} from './company-model';

export class GetCompanyList {
    static readonly type = '[Company] Get';
}
export class SearchCompanyList {
    static readonly type = '[Search] Get';
    constructor(public payload:string){}
}

export class FilterCompanyList {
    static readonly type = '[Filter] Get';
    constructor(public payload: string) {}
}