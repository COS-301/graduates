import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';
import { AvailableQuery } from '../impl/available.query';

@QueryHandler(AvailableQuery)
export class AvailableHandler implements IQueryHandler<AvailableQuery> {
  constructor(private readonly repository: StudentExploreRepository) {}

  async execute(query: AvailableQuery) {

    if(query.availableQuery === "Location"){
        return this.repository.FindAllLocation();
    }

    if(query.availableQuery === "Degree Type"){
        return this.repository.FindAllDegreeType();
    }

    if(query.availableQuery === "Degree Name"){
        return this.repository.FindAllDegreeName();
    }

    if(query.availableQuery === "Emp Status"){
        return this.repository.FindAllEmpStatus();
    }


  }

}