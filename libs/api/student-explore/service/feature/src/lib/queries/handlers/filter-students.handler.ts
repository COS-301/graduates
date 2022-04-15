import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';
import { FilterStudentsQuery } from '../impl/filter-students.query';

@QueryHandler(FilterStudentsQuery)
export class FilterStudentsHandler implements IQueryHandler<FilterStudentsQuery> {
  constructor(private readonly repository: StudentExploreRepository) {}

  async execute(query: FilterStudentsQuery) {

    if(query.Type === "Location"){
      return this.repository.FilterStudentLocation(query.Filter);
    }
    else if(query.Type === "Degree Type"){
      return this.repository.FilterStudentDegreeType(query.Filter);
    }
    else if(query.Type === "Degree Name"){
      return this.repository.FilterStudentDegreeName(query.Filter);
    }
    else if(query.Type === "Employment/Offers"){
      return this.repository.FilterStudentEmploymentStatus(query.Filter);
    }

  }
  
}