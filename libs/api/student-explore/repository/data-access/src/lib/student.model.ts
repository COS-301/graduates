import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student{

  @Field(type => String, {nullable: true})
  StudentNumber?: string;

  @Field(type => String, {nullable: true})
  StudentName?: string;
}