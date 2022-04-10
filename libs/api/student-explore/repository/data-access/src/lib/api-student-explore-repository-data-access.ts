import { Injectable } from '@nestjs/common';
import { timeout } from 'rxjs';
import { Student } from './student.model';

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

      let temp = new Student();
      temp.StudentName = tempName;
      temp.StudentNumber = tempNumber;

      studentArr.push(temp);
    }

    return studentArr;

  }


}
