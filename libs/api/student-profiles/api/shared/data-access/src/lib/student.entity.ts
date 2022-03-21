import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Student{
  @Field()
  studentNum: string

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  phoneNum: string;

  @Field()
  date_of_birth: string;

  @Field(type => [Int])
  marks: number[];
}
