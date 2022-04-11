//TODO: create Student model on service layer
import { Injectable } from '@nestjs/common';
import { ApiStudentProfilesInputEntity as StudentInput } from '@graduates/api/student-profiles/api/shared/data-access';

@Injectable()
export class ApiStudentProfileService {
  public async findOneById(studentNum: string): Promise<any[]> {
    const student = [];
    if (studentNum == 'u19001836') student.push('Cena');
    else student.push('Wick');
    student.push('u19001836');
    student.push('John');
    student.push('John' + student[0] + '@gmail.com');
    student.push('+27791506145');
    student.push('1 January 2000');

    return student;
  }

  public async editStudentProfiles(studentData: StudentInput): Promise<any[]> {
    //edit data here
    return this.findOneById(studentData.studentNum);
  }

  public async deleteStudentProfiles(studentNum: string): Promise<string> {
    //delete student data here
    return 'Delete not implemented yet';
  }
}
