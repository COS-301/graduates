import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { GetSearchQuery } from '../impl/get-companies-search.query';

@QueryHandler(GetSearchQuery)
export class GetSearchHandler implements IQueryHandler<GetSearchQuery> {
  constructor(private readonly repository: CompanyExploreRepository) {}

  async execute(query: GetSearchQuery) {
    const { company_name } = query;
    return this.repository.getSearchResults(company_name);
  }
}
