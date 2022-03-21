import { NumberSymbol } from '@angular/common';
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Student } from 'libs/api/student-profiles/api/shared/data-access/src/lib/student-api.entity';

@Injectable()
export class StudentService {
  public async findAll(): Promise<number[]> {
    const nums = [66, 75, 86, 58, 77];
    return nums;
  }

  public async findOneById(studentNum: string): Promise<Student> {
    const student = new Student();
    if (studentNum == 'u19001836') student.lastName = 'Cena';
    else student.lastName = 'Wick';
    student.studentNum = 'u19001836';
    student.firstName = 'John';
    student.email = 'John'+student.lastName+'@gmail.com';
    student.phoneNum = '+27791506145';
    student.date_of_birth = '1 January 2000';

    return student;
  }
}
