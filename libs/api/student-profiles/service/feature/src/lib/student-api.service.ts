import { Student } from '@graduates/api/student-profiles/api/shared/data-access';

export class StudentService {
  public async findAll(): Promise<Student[]> {
    const students = [];
    students.push(new Student());
    students.push(new Student());
    students[0].studentNum = "u20450000";
    students[1].studentNum = "u19001836";
    return students;
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
