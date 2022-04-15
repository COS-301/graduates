import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

//import { GetDefaultCompany } from './queries/impl/get-default-companies.query';

@Injectable()
export class CompanyExploreService {
  constructor(
    private readonly queryBus: QueryBus
  ) {}

  // getDefaultCompany(), getSearchResults(nameOfCompany: string), getTaggedCompany(inputTag : string)

  async getDefaultData() {
    // return this.queryBus.execute(new GetDefaultCompany(nameOfCompany));
    
  }
}