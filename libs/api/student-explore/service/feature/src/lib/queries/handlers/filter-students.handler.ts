import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ApiStudentExploreRepositoryDataAccessModule } from '@graduates/api/student-explore/repository/data-access';
import { FilterStudentsQuery } from '../impl/filter-students.query';

@QueryHandler(FilterStudentsQuery)
export class FilterStudentsHandler implements IQueryHandler<FilterStudentsQuery> {
  constructor(private readonly repository: ApiStudentExploreRepositoryDataAccessModule) {}

  async execute(query: FilterStudentsQuery) {
	const {email} = query;
    return this.repository.findOne(email);
  }
  
}