import { Injectable } from '@nestjs/common';
import { Student } from './student.model';

import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class StudentExploreRepository {
  constructor(private prisma: PrismaService) {}

  async initStudents() {

    const test = await this.prisma.user.findMany();

    console.log(test);

    let studentArr = [];
    let tempName;
    let tempNumber;

    for (let i = 0; i < 10; i++) {
      tempName = "Name "+ i;
      tempNumber = "Student Number: " + i;

      let temp = new Student();
      temp.StudentName = tempName;
      temp.StudentNumber = tempNumber;

      studentArr.push(temp);
    }

    return studentArr;

  }


}
