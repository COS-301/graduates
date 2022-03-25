import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiStudentProfilesEntity{
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
  dateOfBirth: string;

  @Field(type => [Int])
  marks: number[];
}
