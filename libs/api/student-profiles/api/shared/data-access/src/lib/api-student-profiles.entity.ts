import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiStudentProfilesEntity {
  @Field()
  studentNum: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  title: string;

  @Field()
  email: string;

  @Field()
  phoneNum: string;

  @Field()
  dateOfBirth: string;

  @Field()
  nameOfDegree: string;

  @Field()
  bio: string;

  @Field()
  tags: string[];

  @Field()
  preferredLocation: string;

  @Field()
  employmentStatus: string;

  @Field()
  notableAchievements: string[];

  @Field()
  links: string[];

  //uploaded documents return if they are uploaded or not
  @Field()
  academicRecord: boolean;

  @Field()
  cv: boolean;

  @Field()
  capstoneProject;
}
