import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiCompanyExploreEntity } from '@graduates/api/companyexplore/api/shared/interfaces/data-access';

//import { GetDefaultCompany } from './queries/impl/get-default-companies.query';

@Injectable()
export class CompanyExploreService {
  constructor(
    private readonly queryBus: QueryBus
  ) {}

  // getDefaultCompany(), getSearchResults(nameOfCompany: string), getTaggedCompany(inputTag : string)
  async getCompanyById(id: string) {
    //TEMP ---
    const companyObj = new ApiCompanyExploreEntity();
    companyObj.companyID = '145000';
    companyObj.name = 'Software Development co.';
    return companyObj;
    // --- TEMP
  }

  async getDefaultData() {
    // return this.queryBus.execute(new GetDefaultCompany(nameOfCompany));
    
  }
}