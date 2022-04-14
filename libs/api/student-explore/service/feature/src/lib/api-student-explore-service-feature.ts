import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { StudentExploreServiceModule } from './api-student-explore-service.module'

import { InitStudentsQuery } from './queries/impl/init-students.query';
import { SearchStudentsByTagQuery } from './queries/impl/search-students-by-tag.query';
import { SearchStudentsQuery } from './queries/impl/search-students.query';
import { FilterStudentsQuery } from './queries/impl/filter-students.query';
import { AvailableQuery } from './queries/impl/available.query';

@Injectable()
export class StudentExploreService {
  constructor(
     private readonly commandBus: CommandBus,
     private readonly queryBus: QueryBus
   ) {}

  async InitStudents() {
    return this.queryBus.execute(
      new InitStudentsQuery("input")
    );
  }

  async SearchStudentsByTag(searchTag) {
    return this.queryBus.execute(
      new SearchStudentsByTagQuery(searchTag)
    );
  }

  async SearchStudents(searchQuery) {
    return this.queryBus.execute(
      new SearchStudentsQuery(searchQuery)
    );
  }

  async FilterStudents(filterQuery, filterType) {
    return this.queryBus.execute(
      new FilterStudentsQuery(filterQuery, filterType)
    );
  }

  async AllAvailable(availableQuery){
    return this.queryBus.execute(
      new AvailableQuery(availableQuery)
    );
  }

}