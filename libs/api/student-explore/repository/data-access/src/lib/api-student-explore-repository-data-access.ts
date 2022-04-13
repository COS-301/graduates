import { Injectable } from '@nestjs/common';
//import { Student } from './student.model';

import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';

import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class StudentExploreRepository {
  constructor(private prisma: PrismaService) {}

  async initStudents() {

    const students = await this.prisma.user.findMany();

    let studentArr = [];

    let tempStudentObj;

    let studentObjTags;
    let studentObjProfile;

    let studentTags = [];


    for (let i = 0; i < students.length; i++) {

      //Student Name
      tempStudentObj = new ApiStudentExplore();
      tempStudentObj.StudentName = students[i].name;

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

      //StudentProfilePicture

      studentArr.push(tempStudentObj);
    }



    return studentArr;

  }

  async SearchStudent(){

    const students = await this.prisma.user.findMany();

    let studentArr = [];

    let tempStudentObj;

    for (let i = 0; i < students.length; i++) {

      tempStudentObj = new ApiStudentExplore();

      tempStudentObj.StudentID = students[i].id;
      tempStudentObj.StudentName = students[i].name;
      tempStudentObj.StudentRel = 0;

      studentArr.push(tempStudentObj);

    }

    return studentArr;

  }

  //Filters = Degree Type, Location, Employment Status
  async FilterStudentLocation(Filter){

    let students = await this.prisma.userLocation.findMany();

    let studentArr = [];

    let tempStudentObj;

    let studentsUser;

    for (let i = 0; i < students.length; i++) {

      if(students[i].location === Filter){

        tempStudentObj = new ApiStudentExplore();

        studentsUser = await this.prisma.user.findUnique({
          where: { id : students[i].userId, },
        });

        tempStudentObj.StudentName = studentsUser.name;
        tempStudentObj.StudentLocation = students[i].location;

        studentArr.push(tempStudentObj);

      }

    }

    return studentArr;

  }

  async FilterStudentDegreeType(Filter){

    let students = await this.prisma.userDegree.findMany();

    let studentArr = [];

    let tempStudentObj;

    let studentsUser;

    for (let i = 0; i < students.length; i++) {

      if(students[i].degreeType === Filter){

        tempStudentObj = new ApiStudentExplore();

        studentsUser = await this.prisma.user.findUnique({
          where: { id : students[i].userID, },
        });

        tempStudentObj.StudentName = studentsUser.name;
        tempStudentObj.StudentDegreeType = students[i].degreeType;

        studentArr.push(tempStudentObj);

      }

    }

    return studentArr;

  }

  async FilterStudentDegreeName(Filter){

    let students = await this.prisma.userDegree.findMany();

    let studentArr = [];

    let tempStudentObj;

    let studentsUser;

    for (let i = 0; i < students.length; i++) {

      if(students[i].degreeName === Filter){

        tempStudentObj = new ApiStudentExplore();

        studentsUser = await this.prisma.user.findUnique({
          where: { id : students[i].userID, },
        });

        tempStudentObj.StudentName = studentsUser.name;
        tempStudentObj.StudentDegreeName = students[i].degreeName;

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

    let students = await this.prisma.userProfile.findMany();

    let studentArr = [];

    let tempStudentObj;

    let studentsUser;

    for (let i = 0; i < students.length; i++) {

      if(students[i].employmentStatus === empStatus && students[i].openToOffers === openToOffer){

        tempStudentObj = new ApiStudentExplore();

        studentsUser = await this.prisma.user.findUnique({
          where: { id : students[i].userId, },
        });

        tempStudentObj.StudentName = studentsUser.name;
        tempStudentObj.StudentEmpStatus = students[i].employmentStatus;
        tempStudentObj.StudentEmpOffer = students[i].openToOffers;

        studentArr.push(tempStudentObj);

      }

    }

    return studentArr;

  }


}
