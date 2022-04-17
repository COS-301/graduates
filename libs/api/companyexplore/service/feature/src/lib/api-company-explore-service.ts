import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
// import { ApiCompanyExploreEntity } from '@graduates/api/companyexplore/api/shared/interfaces/data-access';

import { GetCompByIdQuery } from './queries/impl/get-company-by-id.query';
import { GetDefaultCompQuery } from './queries/impl/get-companies-default.query';
import { GetSearchQuery } from './queries/impl/get-companies-search.query';
import { GetTaggedCompQuery } from './queries/impl/get-companies-by-tag.query';

@Injectable()
export class CompanyExploreService {
  constructor(private readonly queryBus: QueryBus) {}

  // getDefaultCompany(), getSearchResults(nameOfCompany: string), getTaggedCompany(inputTag : string)
  async getCompanyById(id: string) {
    return this.queryBus.execute(new GetCompByIdQuery(id));
  }

  async getDefaultCompany() {
    return this.queryBus.execute(new GetDefaultCompQuery());
  }

  async getSearchResults(company_name: string) {
    return this.queryBus.execute(new GetSearchQuery(company_name));
  }

  async getTaggedCompany(tag: string) {
    return this.queryBus.execute(new GetTaggedCompQuery(tag));
  }
}
