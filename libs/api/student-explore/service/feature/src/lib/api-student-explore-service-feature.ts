import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { InitStudentsQuery } from './queries/impl/init-students.query';
import { SearchStudentsByTagQuery } from './queries/impl/search-students-by-tag.query';
import { SearchStudentsQuery } from './queries/impl/search-students.query';
import { FilterStudentsQuery } from './queries/impl/filter-students.query';

@Injectable()
export class StudentExploreService {
  constructor(
     private readonly commandBus: CommandBus,
     private readonly queryBus: QueryBus
   ) {}

  async InitStudents(email: string) {
    return this.queryBus.execute(
      new InitStudentsQuery(email)
    );
  }

  async SearchStudentsByTag(email: string) {
    return this.queryBus.execute(
      new SearchStudentsByTagQuery(email)
    );
  }

  async SearchStudents(email: string) {
    return this.queryBus.execute(
      new SearchStudentsQuery(email)
    );
  }

  async FilterStudents(email: string) {
    return this.queryBus.execute(
      new FilterStudentsQuery(email)
    );
  }

}