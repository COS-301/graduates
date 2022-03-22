import { Query, Args, Resolver } from '@nestjs/graphql';
import { Student } from '@graduates/api/student-profiles/api/shared/data-access';
import { StudentProfileService } from '@graduates/api/student-profiles/service/feature';


@Resolver((of) => Student)
export class StudentResolver {
  constructor(private studentService: StudentProfileService) {}

  @Query((returns) => Student,{ name: 'student' })
  async getStudent(@Args('studentNum', { type: () => String }) id: string) {
    return this.studentService.findOneById(id);
  }
}
