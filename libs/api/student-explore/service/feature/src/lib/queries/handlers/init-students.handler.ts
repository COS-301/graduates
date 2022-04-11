import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';
import { InitStudentsQuery } from '../impl/init-students.query';


@QueryHandler(InitStudentsQuery)
export class InitStudentsHandler implements IQueryHandler<InitStudentsQuery> {
  constructor(private readonly repository: StudentExploreRepository) {}

  async execute(query: InitStudentsQuery) {

    return this.repository.initStudents();
    
  }
  
}