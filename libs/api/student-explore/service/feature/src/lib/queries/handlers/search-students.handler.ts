import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';
import { SearchStudentsQuery } from '../impl/search-students.query';
import { OrphanedTypesFactory } from '@nestjs/graphql/dist/schema-builder/factories/orphaned-types.factory';

@QueryHandler(SearchStudentsQuery)
export class SearchStudentsHandler implements IQueryHandler<SearchStudentsQuery> {
  constructor(private readonly repository: StudentExploreRepository) {}

  async execute(query : SearchStudentsQuery){

    const students = await this.repository.SearchStudent();

    const relStudents = []

    let count = 0;

    //The more letters in a name that matches the query the higher the count

    for (let i = 0; i < students.length; i++) {

      count = 0;

      for(let j = 0; j < query.searchQuery.length; j++){

        if(query.searchQuery[j] == students[i].StudentName[j]){
          count++;
        }

      }

      if(count > 0){
        students[i].StudentRel = count;

        relStudents.push(students[i]);
      }

    }

    //Sort the students by StudentRel using bubble sort

    const n = relStudents.length;
    let tempSwap;

    for (let i = 0; i < n-1; i++){

      for (let j = 0; j < n-i-1; j++){

        if (relStudents[j].StudentRel < relStudents[j+1].StudentRel){
          
          tempSwap = relStudents[j];
          relStudents[j] = relStudents[j+1];
          relStudents[j+1] = tempSwap;

        }

      }

    }

    return relStudents
    
  }
  
}