import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { GetDefaultCompQuery } from '../impl/get-companies-default.query';

@QueryHandler(GetDefaultCompQuery)
export class GetDefaultCompHandler implements IQueryHandler<GetDefaultCompQuery> {
  constructor(private readonly repository: CompanyExploreRepository) {}

  async execute() {
    return this.repository.getDefaultCompany();
  }
}
