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
    const dbId = '1';
    if (dbId == null) return new UserInputError('User does not exist');
    const studentObj = new ApiStudentProfilesEntity();
    studentObj.studentNum = id;
    // Get date of birth
    const DoB = new Date((await this.studentService.getDoB(dbId)).dateOfBirth);
    studentObj.dateOfBirth =
      DoB.getDay() + '/' + DoB.getMonth() + '/' + DoB.getFullYear();
    // Get phone number
    // studentObj.phoneNum = await this.studentService.get(dbId);
    // Get email
    studentObj.email = (await this.studentService.getEmails(dbId)).emails;
    //Get firstname and lastname:
    const fullName = (await this.studentService.getName(dbId)).name;
    const pos = fullName.indexOf(' ');
    studentObj.firstName = fullName.substring(0, pos);
    studentObj.lastName = fullName.substring(pos + 1, fullName.length);
    //Get title and degree
    // studentObj.title = await this.studentService.get(dbId);
    // studentObj.nameOfDegree = await this.studentService.get(dbId);
    //Get bio
    studentObj.bio = (await this.studentService.getBio(dbId)).bio;
    //Get tags
    studentObj.tags = (await this.studentService.getTags(dbId)).tags;
    //Get employmentStatus
    studentObj.employmentStatus = (
      await this.studentService.getEmploymentStatus(dbId)
    ).employmentStatus;
    //Get Prefered location
    const location = await this.studentService.getLocation(dbId);
    studentObj.preferredLocation =
      location != null ? location.preferredLocation : 'Not specified';
    //Get notable achievements
    // studentObj.notableAchievements = await this.studentService.get(dbId);
    //Get links
    studentObj.links = (await this.studentService.getSocialMedia(dbId)).links;
    //Get profile photo
    studentObj.profilePhoto = (await this.studentService.getPfp(dbId)).pfp;
    //Check records
    studentObj.academicRecord =
      (await this.studentService.getFiles(dbId)) != null ? true : false;
    studentObj.cv =
      (await this.studentService.getFiles(dbId)) != null ? true : false;
    studentObj.capstoneProject = true;

    return studentObj;
  }

  @Query(() => String)
  pingStudentProfiles() {
    return 'on';
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async editStudent(@Args('editStudentData') editStudentData: StudentInput) {
    //const studentArr = this.studentService.update(editStudentData);
    const studentObj = new ApiStudentProfilesEntity();
    // studentObj.dateOfBirth = (await studentArr).pop();
    //studentObj.phoneNum = (await studentArr).pop();
    studentObj.firstName = (
      await this.studentService.setName('1', editStudentData.firstName)
    ).name;
    //studentObj.firstName = (await studentArr).pop();
    studentObj.studentNum = editStudentData.studentNum;
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

  //Mock Object:
  async getMock(){
    const mockStudent = new ApiStudentProfilesEntity();
    


    return mockStudent;
  }
}
