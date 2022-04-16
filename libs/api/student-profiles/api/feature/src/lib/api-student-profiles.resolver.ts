import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
import { ApiStudentProfilesEntity } from '@graduates/api/student-profiles/api/shared/data-access';
import { ApiStudentProfileService } from '@graduates/api/student-profiles/service/feature';
import { ApiStudentProfilesInputEntity as StudentInput } from '@graduates/api/student-profiles/api/shared/data-access';

@Resolver((of) => ApiStudentProfilesEntity)
export class ApiStudentProfileResolver {
  constructor(private studentService: ApiStudentProfileService) {}

  @Query((returns) => ApiStudentProfilesEntity, { name: 'student' })
  async getStudent(@Args('studentNum', { type: () => String }) id: string) {
  
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async editStudent(
    @Args('editStudentData') editStudentData: StudentInput
  ) {
  
  }

  @Mutation((returns) => String)
  async deleteStudent(@Args('studentNum', {type: () => String})id: string ) {
    
  }
}
