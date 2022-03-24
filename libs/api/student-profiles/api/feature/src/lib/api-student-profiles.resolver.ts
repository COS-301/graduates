import { Query, Args, Resolver } from '@nestjs/graphql';
import { ApiStudentProfilesEntity } from '@graduates/api/student-profiles/api/shared/data-access';
import { ApiStudentProfileService } from '@graduates/api/student-profiles/service/feature';


@Resolver((of) => ApiStudentProfilesEntity)
export class ApiStudentProfileResolver {
   constructor(private studentService: ApiStudentProfileService) {}

  @Query((returns) => ApiStudentProfilesEntity,{ name: 'student' })
  async getStudent(@Args('studentNum', { type: () => String }) id: string) {
    const studentArr = this.studentService.findOneById(id);
    const studentObj = new ApiStudentProfilesEntity();
    studentObj.dateOfBirth = (await studentArr).pop();
    studentObj.phoneNum = (await studentArr).pop();
    studentObj.email = (await studentArr).pop();
    studentObj.firstName = (await studentArr).pop();
    studentObj.studentNum = (await studentArr).pop();
    studentObj.lastName = (await studentArr).pop();

    return studentObj;
  }
}
