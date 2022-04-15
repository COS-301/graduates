import {Company} from './company-model';

export class GetCompanyList {
    static readonly type = '[Company] Get';
}

export class SetSelectedCompany {
    static readonly type = '[Company] Set';

    constructor(public payload: Company) {
    }
}