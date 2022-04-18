import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
// import { UserInputError } from 'apollo-server-express';
import { ApiStudentProfilesEntity } from '@graduates/api/student-profiles/api/shared/data-access';
import { ApiStudentProfileService } from '@graduates/api/student-profiles/service/feature';
import { ApiStudentProfilesInputEntity as StudentInput } from '@graduates/api/student-profiles/api/shared/data-access';

@Resolver((of) => ApiStudentProfilesEntity)
export class ApiStudentProfileResolver {
  constructor(private studentService: ApiStudentProfileService) {}

  @Query((returns) => ApiStudentProfilesEntity, { name: 'student' })
  async getStudent(@Args('studentNum', { type: () => String }) id: string) {
<<<<<<< HEAD
    const studentArr = this.studentService.findById(id);
    const studentObj = new ApiStudentProfilesEntity();
    studentObj.dateOfBirth = (await studentArr).pop();
    studentObj.phoneNum = (await studentArr).pop();
    studentObj.email = (await studentArr).pop();
    studentObj.firstName = (await studentArr).pop();
    studentObj.studentNum = (await studentArr).pop();
    studentObj.lastName = (await studentArr).pop();
=======
    let dbId;
    if (id == 'u12345678') dbId = '1';
    else dbId = null;

    if (dbId == null) return this.getMock();
    const studentObj = new ApiStudentProfilesEntity();
    studentObj.dbId = dbId;
    studentObj.studentNum = id;
    //Get firstname and lastname: has to be provided
    const fullName = (await this.studentService.getName(dbId)).name;
    const pos = fullName.indexOf(' ');
    studentObj.firstName = fullName.substring(0, pos);
    studentObj.lastName = fullName.substring(pos + 1, fullName.length);
    // Get date of birth
    const DoB = new Date((await this.studentService.getDoB(dbId)).dateOfBirth);
    studentObj.dateOfBirth =
      DoB.getDay() + '/' + DoB.getMonth() + '/' + DoB.getFullYear();
    // Get phone number
    const cell = { cellNumber: ['implement me!'] }; //await this.studentService.get(dbId);
    studentObj.phoneNum = cell != null ? cell.cellNumber : ['not provided'];
    // Get email
    const e = await this.studentService.getEmails(dbId);
    studentObj.email = e != null && e != '' ? e : ['not provided'];
    //Get title and degree
    const t = { title: 'well..this', nameOfDegree: 'should not display' }; //await this.studentService.get(dbId);
    studentObj.title = t != null ? t.title : 'not provided';
    studentObj.nameOfDegree = t != null ? t.nameOfDegree : 'not provided';
    // studentObj.nameOfDegree = await this.studentService.get(dbId);
    //Get bio
    const b = await this.studentService.getBio(dbId);
    studentObj.bio = b != null ? b.bio : 'not provided';
    //Get tags: nullable
    studentObj.tags = (await this.studentService.getTags(dbId)).tags;
    //Get employmentStatus
    const emplStatus = await this.studentService.getEmploymentStatus(dbId);
    let res = '';
    if (emplStatus == null) res = 'Private';
    else if (emplStatus.employmentStatus && emplStatus.openToOffers)
      res = 'Employed, Open to Offers';
    else if (!emplStatus.employmentStatus && emplStatus.openToOffers)
      res = 'Not Employed, Open to Offers';
    else if (!emplStatus.employmentStatus && !emplStatus.openToOffers)
      res = 'Not Employed, Not Open to Offers';
    else if (emplStatus.employmentStatus && !emplStatus.openToOffers)
      res = 'Employed, Not Open to Offers';
    studentObj.employmentStatus = res;
    //Get Prefered location
    const location = await this.studentService.getLocation(dbId);
    studentObj.preferredLocation =
      location != null ? location.preferredLocation : 'Any';
    //Get notable achievements
    const notableAch = {
      notableAchievements: ['None', 'Tell Xander to link function'],
    }; //await this.studentService.get(dbId)
    studentObj.notableAchievements =
      notableAch != null ? notableAch.notableAchievements : ['None'];
    //Get links: nullable
    studentObj.links = (await this.studentService.getSocialMedia(dbId)).links;
    //Get profile photo
    const pp = await this.studentService.getPfp(dbId);
    studentObj.profilePhoto =
      pp.profilePhoto != null
        ? pp.profilePicture
        : 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';
    //Check records --> Check for specefic files not implemented
    const files = await this.studentService.getFiles(dbId);
    studentObj.academicRecord = files != null ? true : false;
    studentObj.cv = files != null ? true : false;
    studentObj.capstoneProject = true;
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef

    return studentObj;
  }

<<<<<<< HEAD
  @Mutation((returns) => ApiStudentProfilesEntity)
  async editStudent(
    @Args('editStudentData') editStudentData: StudentInput
  ) {
    const studentArr = this.studentService.update(editStudentData);
    const studentObj = new ApiStudentProfilesEntity();
    studentObj.dateOfBirth = (await studentArr).pop();
    studentObj.phoneNum = (await studentArr).pop();
    studentObj.email = (await studentArr).pop();
    studentObj.firstName = (await studentArr).pop();
    studentObj.studentNum = (await studentArr).pop();
    studentObj.lastName = (await studentArr).pop();
=======
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
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef

    return studentObj;
  }

  @Mutation((returns) => String)
<<<<<<< HEAD
  async deleteStudent(@Args('studentNum', {type: () => String})id: string ) {
    const res = this.studentService.delete(id);
    return res;
=======
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
  async getMock() {
    const mockStudent = new ApiStudentProfilesEntity();
    mockStudent.dbId = '-1';
    mockStudent.firstName = 'John';
    mockStudent.studentNum = 'u12345678';
    mockStudent.lastName = 'Wick';
    mockStudent.dateOfBirth = '19/09/1999';
    mockStudent.phoneNum = ['0834521355'];
    mockStudent.email = ['John.Wick@gmail.com'];
    mockStudent.title = 'MSc';
    mockStudent.profilePhoto =
      'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';
    mockStudent.nameOfDegree = 'Computer Science';
    mockStudent.bio =
      'From a young age John has showed promise, but it was not until age 20 that he got his second MSc...';
    mockStudent.tags = ['Security', 'Hacking', 'Error elimination'];
    mockStudent.employmentStatus = 'Unemployed, open to offers';
    mockStudent.preferredLocation = 'Pretoria';
    mockStudent.notableAchievements = ['Part of Facebook', 'Part of Goldenkey'];
    mockStudent.links = [
      ['discord', 'http'],
      ['twitch', 'https'],
    ];
    mockStudent.academicRecord = false;
    mockStudent.cv = true;
    mockStudent.capstoneProject = true;
    return mockStudent;
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
  }
}
