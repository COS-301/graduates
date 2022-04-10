import { Resolver, Args, Query } from '@nestjs/graphql';
import { Student } from '@graduates/api/student-explore/repository/data-access';
import { StudentExploreService } from '@graduates/api/student-explore/service/feature';

@Resolver()
export class ApiStudentExploreResolver {
  constructor(private readonly StudentExploreService: StudentExploreService) {}

  @Query(() => [Student])
  //Test(@Args('email') email: string) {
  InitStudent(){
    return this.StudentExploreService.InitStudents();
  }

}