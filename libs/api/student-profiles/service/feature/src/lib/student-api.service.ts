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

  public async findOneById(id: string): Promise<Student> {
    const student = new Student();
    if (id == 'u19001836') student.lastName = 'Wick';
    student.id = 'u19001836';
    student.firstName = 'John';

    return student;
  }
}
