import { Query, Args, Resolver } from '@nestjs/graphql';
import { Student } from '../../../shared/data-access/src/lib/student-api.entity';
import { StudentService } from '@graduates/api/student-profiles/service/feature';

@Resolver((of) => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => Student,{ name: 'student' })
  async student(@Args('studentNum', { type: () => String }) id: string) {
    return this.studentService.findOneById(id);
  }

  @Query((returns) => [Number])
  async getMarks() {
    // const { id } = student;
    return this.studentService.findAll();
  }
}
