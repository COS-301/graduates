import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student{
  @Field(() => ID)
  StudentNumber: string;
}