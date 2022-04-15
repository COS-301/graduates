import {Company} from './company-model';

export class GetCompanyList {
    static readonly type = '[Company] Get';
}
export class SearchCompanyList {
    static readonly type = '[Company] Get';
}
export class SetSearch{
    static readonly type = '[Search] Set';
    constructor(public payload: string) {
    }
}
export class SetSelectedCompany {
    static readonly type = '[Company] Set';

    constructor(public payload: Company) {
    }
}