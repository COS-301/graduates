import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiStudentExplore {
  @Field(() => ID)
  StudentNumber!: string;
}
