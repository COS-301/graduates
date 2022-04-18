import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { GetTaggedCompQuery } from '../impl/get-companies-by-tag.query';

@QueryHandler(GetTaggedCompQuery)
export class GetTaggedCompHandler implements IQueryHandler<GetTaggedCompQuery> {
  constructor(private readonly repository: CompanyExploreRepository) {}

  async execute(query: GetTaggedCompQuery) {
    const { tag } = query;
    return this.repository.getTaggedCompany(tag);
  }
}
