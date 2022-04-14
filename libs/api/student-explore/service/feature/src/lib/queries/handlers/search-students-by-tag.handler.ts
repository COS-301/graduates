import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';
import { SearchStudentsByTagQuery } from '../impl/search-students-by-tag.query';

@QueryHandler(SearchStudentsByTagQuery)
export class SearchStudentsByTagHandler implements IQueryHandler<SearchStudentsByTagQuery> {
  constructor(private readonly repository: StudentExploreRepository) {}

  async execute(query: SearchStudentsByTagQuery) {
	
    return this.repository.SearchStudentTag(query.searchTag);
    
  }
  
}