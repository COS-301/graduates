import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
import { ApiStudentProfilesEntity } from '@graduates/api/student-profiles/api/shared/data-access';
import { ApiStudentProfileService } from '@graduates/api/student-profiles/service/feature';
import { ApiStudentProfilesInputEntity as StudentInput } from '@graduates/api/student-profiles/api/shared/data-access';

@Resolver((of) => ApiStudentProfilesEntity)
export class ApiStudentProfileResolver {
  constructor(private studentService: ApiStudentProfileService) {}

  @Query((returns) => ApiStudentProfilesEntity, { name: 'student' })
  async getStudent(@Args('studentNum', { type: () => String }) id: string) {
    // const studentArr = this.studentService.findById(id);
    const studentObj = new ApiStudentProfilesEntity();
    studentObj.dateOfBirth = '19/09/1999';
    studentObj.phoneNum = '0834521355';
    studentObj.email = 'John.Wick@gmail.com';
    studentObj.firstName = 'John';
    studentObj.studentNum = id;
    studentObj.lastName = 'Wick';
    studentObj.title = 'MSc';
    studentObj.nameOfDegree = 'Computer Science';
    studentObj.bio =
      'From a young age John has showed promise, but it was not until age 20 that he got his second MSc...';
    studentObj.tags = ['Security','Hacking','Error elimination'];
    studentObj.employmentStatus = 'Unemployed, open to offers';
    studentObj.preferredLocation = 'Pretoria';
    studentObj.notableAchievements = ['Part of Facebook','Part of Goldenkey'];
    studentObj.links = [
      ['discord', 'http'],
      ['twitch', 'https'],
    ];
    studentObj.academicRecord = false;
    studentObj.cv = true;
    studentObj.capstoneProject = true;

    return studentObj;
  }

  async editStudent(
    @Args('editStudentData') editStudentData: StudentInput
  ) {
    //const studentArr = this.studentService.update(editStudentData);
    const studentObj = new ApiStudentProfilesEntity();
   // studentObj.dateOfBirth = (await studentArr).pop();
    //studentObj.phoneNum = (await studentArr).pop();
    //studentObj.email = (await studentArr).pop();
    //studentObj.firstName = (await studentArr).pop();
    //studentObj.studentNum = (await studentArr).pop();
    //studentObj.lastName = (await studentArr).pop();

    return studentObj;
  }

  @Mutation((returns) => String)
  async deleteStudent(@Args('studentNum', {type: () => String})id: string ) {
    //const res = this.studentService.delete(id);
    //return res;
    return "test";
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async removeTags(@Args('tag', { type: () => [String] }) tags: string[]) {
    const studentObj = new ApiStudentProfilesEntity();
    return studentObj;
  }
}
