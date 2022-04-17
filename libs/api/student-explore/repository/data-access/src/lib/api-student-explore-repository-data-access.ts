import { Injectable } from '@nestjs/common';
import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class StudentExploreRepository {
  constructor(private prisma: PrismaService) {}

  async initStudents() {

    const students = await this.prisma.user.findMany();

    const studentArr = [];

    let tempStudentObj;

    let studentObjTags;
    let studentObjProfile;

    let studentTags = [];


    for (let i = 0; i < students.length; i++) {

      //Student Name
      tempStudentObj = new ApiStudentExplore();
      tempStudentObj.StudentName = students[i].name;

      //Student ID
      tempStudentObj.StudentID = students[i].id;


      //Student Tag
      studentObjTags = await this.prisma.userTag.findMany({
        where: { userId : students[i].id, },
      });

      for(let j = 0; j < studentObjTags.length; j++){

        studentTags.push(studentObjTags[j].tag)

      }

      tempStudentObj.StudentTags = studentTags;

      studentTags = [];

      //Student Bio
      studentObjProfile = await this.prisma.userProfile.findUnique({
        where: { userId : students[i].id, },
      });

      tempStudentObj.StudentBio = studentObjProfile.bio;

      //Student Email
      studentObjProfile = await this.prisma.userEmail.findUnique({
        where: { userId : students[i].id, },
      });

      tempStudentObj.StudentEmail = studentObjProfile.email;

      //Student Number
      studentObjProfile = await this.prisma.userContactNumber.findUnique({
        where: { userId : students[i].id, },
      });

      tempStudentObj.StudentNumber = studentObjProfile.number;

      //Student Degree Type and Name
      studentObjProfile = await this.prisma.userDegree.findUnique({
        where: { userID : students[i].id, },
      });

      tempStudentObj.StudentDegreeType = studentObjProfile.degreeType;
      tempStudentObj.StudentDegreeName = studentObjProfile.degreeName;

      //Student Location
      studentObjProfile = await this.prisma.userLocation.findUnique({
        where: { userId : students[i].id, },
      });

      tempStudentObj.StudentLocation = studentObjProfile.location;

      //StudentProfilePicture

      studentArr.push(tempStudentObj);
    }

    return studentArr;

  }

  async FindSpecificStudent(StudentID) {

    const students = await this.prisma.user.findMany();

    const studentArr = [];

    let tempStudentObj;

    let studentObjTags;
    let studentObjProfile;

    let studentTags = [];


    for (let i = 0; i < students.length; i++) {

      if(students[i].id == StudentID){

        //Student Name
        tempStudentObj = new ApiStudentExplore();
        tempStudentObj.StudentName = students[i].name;

        //Student ID
        tempStudentObj.StudentID = students[i].id;


        //Student Tag
        studentObjTags = await this.prisma.userTag.findMany({
          where: { userId : students[i].id, },
        });

        for(let j = 0; j < studentObjTags.length; j++){

          studentTags.push(studentObjTags[j].tag)

        }

        tempStudentObj.StudentTags = studentTags;

        studentTags = [];

        //Student Bio
        studentObjProfile = await this.prisma.userProfile.findUnique({
          where: { userId : students[i].id, },
        });

        tempStudentObj.StudentBio = studentObjProfile.bio;

        //Student Email
        studentObjProfile = await this.prisma.userEmail.findUnique({
          where: { userId : students[i].id, },
        });

        tempStudentObj.StudentEmail = studentObjProfile.email;

        //Student Number
        studentObjProfile = await this.prisma.userContactNumber.findUnique({
          where: { userId : students[i].id, },
        });

        tempStudentObj.StudentNumber = studentObjProfile.number;

        //Student Degree Type and Name
        studentObjProfile = await this.prisma.userDegree.findUnique({
         where: { userID : students[i].id, },
        });

        tempStudentObj.StudentDegreeType = studentObjProfile.degreeType;
        tempStudentObj.StudentDegreeName = studentObjProfile.degreeName;

        //Student Location
        studentObjProfile = await this.prisma.userLocation.findUnique({
          where: { userId : students[i].id, },
        });

        tempStudentObj.StudentLocation = studentObjProfile.location;

        //StudentProfilePicture

        tempStudentObj;

        return tempStudentObj;

      }

    }

  }

  async SearchStudent(){

    const students = await this.prisma.user.findMany();

    const studentArr = [];

    let tempStudentObj;

    for (let i = 0; i < students.length; i++) {

      tempStudentObj = new ApiStudentExplore();

      tempStudentObj = await this.FindSpecificStudent(students[i].id);

      studentArr.push(tempStudentObj);

    }

    return studentArr;

  }

  async SearchStudentTag(searchTag){

    const studentArr = [];

    let tempStudentObj;

    const students = await this.prisma.userTag.findMany({
      where: { tag : searchTag, },
    });

    for (let i = 0; i < students.length; i++) {

      tempStudentObj = await this.FindSpecificStudent(students[i].userId);

      studentArr.push(tempStudentObj);

    }

    return studentArr;

  }

  //Filters = Degree Type, Degree Name, Location, Employment Status
  
  async FilterStudentLocation(Filter){

    const students = await this.prisma.userLocation.findMany();

    const studentArr = [];

    let tempStudentObj;

    let studentsUser;

    for (let i = 0; i < students.length; i++) {

      if(students[i].location === Filter){

        tempStudentObj = new ApiStudentExplore();

        studentsUser = await this.prisma.user.findUnique({
          where: { id : students[i].userId, },
        });

        tempStudentObj = await this.FindSpecificStudent(students[i].userId);

        studentArr.push(tempStudentObj);

      }

    }

    return studentArr;

  }

  async FilterStudentDegreeType(Filter){

    const students = await this.prisma.userDegree.findMany();

    const studentArr = [];

    let tempStudentObj;

    let studentsUser;

    for (let i = 0; i < students.length; i++) {

      if(students[i].degreeType === Filter){

        tempStudentObj = new ApiStudentExplore();

        studentsUser = await this.prisma.user.findUnique({
          where: { id : students[i].userID, },
        });

        tempStudentObj = await this.FindSpecificStudent(students[i].userID);

        studentArr.push(tempStudentObj);

      }

    }

    return studentArr;

  }

  async FilterStudentDegreeName(Filter){

    const students = await this.prisma.userDegree.findMany();

    const studentArr = [];

    let tempStudentObj;

    let studentsUser;

    for (let i = 0; i < students.length; i++) {

      if(students[i].degreeName === Filter){

        tempStudentObj = new ApiStudentExplore();

        studentsUser = await this.prisma.user.findUnique({
          where: { id : students[i].userID, },
        });

        tempStudentObj = await this.FindSpecificStudent(students[i].userID);

        studentArr.push(tempStudentObj);

      }

    }

    return studentArr;

  }

  async FilterStudentEmploymentStatus(Filter){

    let empStatus = false;
    let openToOffer = false;

    if(Filter === "True True"){

      empStatus = true;
      openToOffer = true;

    }
    else if(Filter === "True False"){

      empStatus = true;
      openToOffer = false;

    }
    else if(Filter === "False True"){

      empStatus = false;
      openToOffer = true;
      
    }
    else if(Filter === "False False"){

      empStatus = false;
      openToOffer = false;
      
    }

    const students = await this.prisma.userProfile.findMany();

    const studentArr = [];

    let tempStudentObj;

    let studentsUser;

    for (let i = 0; i < students.length; i++) {

      if(students[i].employmentStatus === empStatus && students[i].openToOffers === openToOffer){

        tempStudentObj = new ApiStudentExplore();

        studentsUser = await this.prisma.user.findUnique({
          where: { id : students[i].userId, },
        });

        tempStudentObj = await this.FindSpecificStudent(students[i].userId);

        studentArr.push(tempStudentObj);

      }

    }

    return studentArr;

  }

  async FindAllLocation(){

    const locations = await this.prisma.userLocation.findMany();

    const foundLocations = []

    let found = false;

    for (let i = 0; i < locations.length; i++) {

      found = false;

      for(let j=0; j< foundLocations.length; j++){

        if(foundLocations[j] === locations[i].location){
          found = true;
        }

      }

      if( found == false){
        foundLocations.push(locations[i].location);
      }

    }

    const tempStudentObj = new ApiStudentExplore();

    tempStudentObj.Available = foundLocations;

    const returnArr = []

    returnArr.push(tempStudentObj)

    return returnArr;

  }

  async FindAllDegreeType(){

    const degreeType = await this.prisma.userDegree.findMany();

    const foundDegreeType = []

    let found = false;

    for (let i = 0; i < degreeType.length; i++) {

      found = false;

      for(let j=0; j< foundDegreeType.length; j++){

        if(foundDegreeType[j] === degreeType[i].degreeType){
          found = true;
        }

      }

      if( found == false){
        foundDegreeType.push(degreeType[i].degreeType);
      }

    }

    const tempStudentObj = new ApiStudentExplore();

    tempStudentObj.Available = foundDegreeType;

    const returnArr = []

    returnArr.push(tempStudentObj)

    return returnArr;

  }

  async FindAllDegreeName(){

    const degreeName = await this.prisma.userDegree.findMany();

    const foundDegreeName = []

    let found = false;

    for (let i = 0; i < degreeName.length; i++) {

      found = false;

      for(let j=0; j< foundDegreeName.length; j++){

        if(foundDegreeName[j] === degreeName[i].degreeName){
          found = true;
        }

      }

      if( found == false){
        foundDegreeName.push(degreeName[i].degreeName);
      }

    }

    const tempStudentObj = new ApiStudentExplore();

    tempStudentObj.Available = foundDegreeName;

    const returnArr = []

    returnArr.push(tempStudentObj)

    return returnArr;

  }

  async FindAllEmpStatus(){

    const foundEmpStatus = []

    foundEmpStatus.push("Employed, Open to Offers")
    foundEmpStatus.push("Employed, Not open to Offers")
    foundEmpStatus.push("Unemployed, Open to Offers")
    foundEmpStatus.push("Unemployed, Not open to Offers")

    const tempStudentObj = new ApiStudentExplore();

    tempStudentObj.Available = foundEmpStatus;

    const returnArr = []

    returnArr.push(tempStudentObj)

    return returnArr;

  }



}
