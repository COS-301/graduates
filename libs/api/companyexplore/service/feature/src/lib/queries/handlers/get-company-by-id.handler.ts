import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { GetCompByIdQuery } from '../impl/get-company-by-id.query';

@QueryHandler(GetCompByIdQuery)
export class GetCompByIdHandler implements IQueryHandler<GetCompByIdQuery> {
  constructor(private readonly repository: CompanyExploreRepository) {}

  async execute(query: GetCompByIdQuery) {
    const { id } = query;
    return this.repository.getCompanyById(id);
  }
}
