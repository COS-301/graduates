import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ApiStudentExploreRepositoryDataAccessModule } from '@graduates/api/student-explore/repository/data-access';
import { SearchStudentsByTagQuery } from '../impl/search-students-by-tag.query';

@QueryHandler(SearchStudentsByTagQuery)
export class SearchStudentsByTagHandler implements IQueryHandler<SearchStudentsByTagQuery> {
  constructor(private readonly repository: ApiStudentExploreRepositoryDataAccessModule) {}

  async execute(query: SearchStudentsByTagQuery) {
	const {email} = query;
    return this.repository.findOne(email);
  }
  
}