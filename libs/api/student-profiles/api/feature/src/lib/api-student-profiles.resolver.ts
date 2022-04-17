import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-express';
import { ApiStudentProfilesEntity } from '@graduates/api/student-profiles/api/shared/data-access';
import { ApiStudentProfileService } from '@graduates/api/student-profiles/service/feature';
import { ApiStudentProfilesInputEntity as StudentInput } from '@graduates/api/student-profiles/api/shared/data-access';

@Resolver((of) => ApiStudentProfilesEntity)
export class ApiStudentProfileResolver {
  constructor(private studentService: ApiStudentProfileService) {}

  @Query((returns) => ApiStudentProfilesEntity, { name: 'student' })
  async getStudent(@Args('studentNum', { type: () => String }) id: string) {
    // return new UserInputError('User does not exist');
    const studentObj = new ApiStudentProfilesEntity();
    studentObj.dateOfBirth = await this.studentService.getDoB(id);
    // studentObj.phoneNum = await this.studentService.get(id);
    // studentObj.email = await this.studentService.getEmails(id);
    studentObj.firstName = await this.studentService.getName(id);
    studentObj.studentNum = id;
    // studentObj.lastName = await this.studentService.getName(id);
    // studentObj.title = await this.studentService.get(id);
    // studentObj.nameOfDegree = await this.studentService.get(id);
    // studentObj.bio = await this.studentService.getBio(id);
    // studentObj.tags = await this.studentService.getTags(id);
    // studentObj.employmentStatus = await this.studentService.getEmploymentStatus(id);
    // studentObj.preferredLocation = await this.studentService.getLocation(id);
    // studentObj.notableAchievements = await this.studentService.get(id);
    // studentObj.links = await this.studentService.getSocialMedia(id);
    // studentObj.profilePhoto = await this.studentService.getPfp(id);
    // studentObj.academicRecord = false;
    // studentObj.cv = true;
    // studentObj.capstoneProject = true;

    return studentObj;
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async editStudent(@Args('editStudentData') editStudentData: StudentInput) {
    //const studentArr = this.studentService.update(editStudentData);
    const studentObj = new ApiStudentProfilesEntity();
    // studentObj.dateOfBirth = (await studentArr).pop();
    //studentObj.phoneNum = (await studentArr).pop();
    studentObj.firstName = await this.studentService.setName(
      editStudentData.studentNum,
      editStudentData.firstName
    );
    //studentObj.firstName = (await studentArr).pop();
    //studentObj.studentNum = (await studentArr).pop();
    //studentObj.lastName = (await studentArr).pop();

    return studentObj;
  }

  @Mutation((returns) => String)
  async deleteStudent(@Args('studentNum', { type: () => String }) id: string) {
    return 'Not Implemented';
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async removeTags(
    @Args('tag', { type: () => [String] }) tags: string[],
    @Args('studentNum', { type: () => String }) id: string
  ) {
    const studentObj = new ApiStudentProfilesEntity();
    let i = 0;
    while (i < tags.length - 1) {
      this.studentService.removeTag(id, tags[i]);
      i++;
    }
    return this.getStudent(id);
  }
}
