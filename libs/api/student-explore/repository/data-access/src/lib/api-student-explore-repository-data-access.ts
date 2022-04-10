import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentExploreRepository {
  constructor() {}

  initStudents() {

    let studentArr = [];
    let tempName;
    let tempNumber;

    for (let i = 0; i < 10; i++) {
      tempName = "Name "+ i;
      tempNumber = "Student Number: " + i;

      //studentArr.push(new Student(tempName, tempNumber));
    }

    return studentArr;

  }


}
