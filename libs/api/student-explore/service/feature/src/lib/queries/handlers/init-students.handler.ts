import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ApiStudentExploreRepositoryDataAccessModule } from '@graduates/api/student-explore/repository/data-access';
import { InitStudentsQuery } from '../impl/init-students.query';

@QueryHandler(InitStudentsQuery)
export class InitStudentsHandler implements IQueryHandler<InitStudentsQuery> {
  constructor(private readonly repository: ApiStudentExploreRepositoryDataAccessModule) {}

  async execute(query: InitStudentsQuery) {
	const {email} = query;
    return this.repository.findOne(email);
  }
  
}