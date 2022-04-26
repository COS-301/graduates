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
    let dbId;
    // let dbId = this.studentService.GetUserIDFromStudentNumber(id);
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
    const cell = { cellNumber: ['0824466845'] }; //await this.studentService.get(dbId);
    studentObj.phoneNum = cell != null ? cell.cellNumber : ['not provided'];
    // Get email
    const e = await this.studentService.getEmails(dbId);
    studentObj.email = [];
    console.log(e);
    for (let i=0; i<e.length; i++)
      studentObj.email.push(e[i].email);
    //Get title and degree
    const t = { title: 'PhD', nameOfDegree: 'Computer Science' }; //await this.studentService.get(dbId);
    studentObj.title = t != null ? t.title : 'not provided';
    studentObj.nameOfDegree = t != null ? t.nameOfDegree : 'not provided';
    // studentObj.nameOfDegree = await this.studentService.get(dbId);
    //Get bio
    const b = await this.studentService.getBio(dbId);
    studentObj.bio = b != null ? b.bio : 'not provided';
    //Get tags: nullable
    const allTags = (await this.studentService.getTags(dbId));
    studentObj.tags = []
    for (let i=0; i<allTags.length; i++)
      studentObj.tags.push((await allTags[i]).tag);
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
    studentObj.preferredLocation = location.location != null ? location.location : 'Any';
    //Get notable achievements
    const notableAch = {
      notableAchievements: ['Golden Key Honours Society', 'Did internship at google'],
    }; //await this.studentService.get(dbId)
    studentObj.notableAchievements =
      notableAch.notableAchievements != null
        ? notableAch.notableAchievements
        : ['None'];
    //Get links: nullable
    const social = await this.studentService.getSocialMedia(dbId);
    studentObj.links = [];
    for (let i=0; i< social.length; i++)
     studentObj.links.push([social[i].type,social[i].link]);
    //Get profile photo
    const pp = await this.studentService.getPfp(dbId);
    studentObj.profilePhoto =
      pp.profilePicture != null
        ? pp.profilePicture
        : 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';
    //Check records --> Check for specefic files not implemented
    const files = await this.studentService.getFiles(dbId);
    studentObj.academicRecord = files != null ? true : false;
    studentObj.cv = files != null ? true : false;
    studentObj.capstoneProject = true;

    return studentObj;
  }

  @Query(() => String)
  pingStudentProfiles() {
    return 'on';
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async editStudent(@Args('editStudentData') editStudentData: StudentInput) {
    const studentObj = await this.getStudent(editStudentData.studentNum);

    if (editStudentData.firstName != null) {
      const name = editStudentData.firstName + ' ' + studentObj.lastName;
      studentObj.firstName = editStudentData.firstName;
      this.studentService.setName(studentObj.dbId, name);
    }

    if (editStudentData.lastName != null) {
      const name = studentObj.firstName + ' ' + editStudentData.lastName;
      studentObj.lastName = editStudentData.lastName;
      this.studentService.setName(studentObj.dbId, name);
    }

    if (editStudentData.email != null && editStudentData.email[0] != '') {
      for (let i = 0; i < editStudentData.email.length - 1; i++) {
        if (studentObj.email == null) studentObj.email = [];
        studentObj.email.push(
          await this.addEmail(studentObj.dbId, editStudentData.email[i])
        );
      }
    }

    if (editStudentData.phoneNum != null && editStudentData.phoneNum[0] != '') {
      for (let i = 0; i < editStudentData.phoneNum.length - 1; i++) {
        if (studentObj.phoneNum == null) studentObj.phoneNum = [];
        studentObj.phoneNum.push(
          await this.addPhoneNum(studentObj.dbId, editStudentData.phoneNum[i])
        );
      }
    }

    if (editStudentData.tags != null && editStudentData.tags[0] != '') {
      for (let i = 0; i < editStudentData.tags.length; i++) {
        if (studentObj.tags == null) studentObj.tags = [];
        if (studentObj.tags.indexOf(editStudentData.tags[i]) == -1)
          studentObj.tags.push(
            await this.addTag(studentObj.dbId, editStudentData.tags[i])
          );
      }
    }

    if (editStudentData.bio != null) {
      studentObj.bio = (
        await this.studentService.setBio(studentObj.dbId, editStudentData.bio)
      ).bio;
    }

    if (editStudentData.profilePhoto != null) {
      studentObj.profilePhoto = (
        await this.studentService.setPfp(
          studentObj.dbId,
          editStudentData.profilePhoto
        )
      ).pfp;
    }

    if (editStudentData.preferredLocation != null) {
      studentObj.preferredLocation = (
        await this.studentService.setLocation(
          studentObj.dbId,
          editStudentData.preferredLocation
        )
      ).location;
    }

    // @Field({ nullable: true })
    // title?: string;
    // if (editStudentData.title != null)
    // {
    //   studentObj.firstName = (
    //     await this.studentService.setName(studentObj.dbId, editStudentData.firstName)
    //   ).name;
    // }

    // @Field({ nullable: true })
    // nameOfDegree?: string;
    // if (editStudentData.firstName != null)
    // {
    //   studentObj.firstName = (
    //     await this.studentService.setName(studentObj.dbId, editStudentData.firstName)
    //   ).name;
    // }

    // @Field({ nullable: true })
    // employmentStatus?: string;
    // if (editStudentData.employmentStatus != null)
    // {
    //   studentObj.employmentStatus = (
    //     await this.studentService.(studentObj.dbId, editStudentData.employmentStatus)
    //   ).employmentStatus;
    // }

    // @Field(type => [String],{ nullable: 'itemsAndList' })
    // notableAchievements?: string[];
    // if (editStudentData.firstName != null)
    // {
    //   studentObj.firstName = (
    //     await this.studentService.(studentObj.dbId, editStudentData.firstName)
    //   ).name;
    // }

    // if (editStudentData.links[0] != null && editStudentData.links[0][0] != '') {
    //   for (let i = 0; i < editStudentData.links.length - 1; i++) {
    //     if (studentObj.links == null)
    //       studentObj.links = [];
    //     studentObj.links.push(
    //       await this.addLink(
    //         studentObj.dbId,
    //         editStudentData.links[i][0],
    //         editStudentData.links[i][1]
    //       )
    //     );
    //   }
    // }

    return studentObj;
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async deleteStudent(@Args('studentNum', { type: () => String }) id: string) {
    return new UserInputError('Not implemented');
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async removeTags(
    @Args('tag', { type: () => [String] }) tags: string[],
    @Args('studentNum', { type: () => String }) id: string
  ) {
    let i = 0;
    while (i < tags.length - 1) {
      this.studentService.removeTag(id, tags[i]);
      i++;
    }
    return this.getStudent(id);
  }

  @Mutation((returns) => String)
  async addTag(@Args('dbId') dbId: string, @Args('tag') tag: string) {
    this.studentService.addTag(dbId, tag);
    return tag;
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async removeTag(@Args('dbId') dbId: string, @Args('tag') tag: string) {
    this.studentService.removeTag(dbId, tag);
    return this.getStudent(dbId);
  }

  @Mutation((returns) => String)
  async addEmail(@Args('dbId') dbId: string, @Args('email') email: string) {
    this.studentService.setEmails(dbId, email);
    return email;
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async removeEmail(@Args('dbId') dbId: string, @Args('email') email: string) {
    // this.studentService.(dbId, email);
    return this.getStudent(dbId);
  }

  @Mutation((returns) => String)
  async addPhoneNum(
    @Args('dbId') dbId: string,
    @Args('phoneNum') phoneNum: string
  ) {
    // this.studentService.(dbId, phoneNum);
    return phoneNum;
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async removePhoneNum(
    @Args('dbId') dbId: string,
    @Args('phoneNum') phoneNum: string
  ) {
    // this.studentService.(dbId, phoneNum);
    return this.getStudent(dbId);
  }

  @Mutation((returns) => [String])
  async addLink(
    @Args('dbId') dbId: string,
    @Args('linkType') linkType: string,
    @Args('link') link: string
  ) {
    this.studentService.addSocialMedia(dbId, linkType, link);
    return [linkType, link];
  }

  @Mutation((returns) => ApiStudentProfilesEntity)
  async removeLink(
    @Args('dbId') dbId: string,
    @Args('linkType') linkType: string
  ) {
    this.studentService.removeSocialMedia(dbId, linkType);
    return this.getStudent(dbId);
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
  }
}
