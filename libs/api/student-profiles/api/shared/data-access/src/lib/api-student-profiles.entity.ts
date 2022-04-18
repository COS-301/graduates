import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiStudentProfilesEntity {
  @Field()
  dbId: string;

  @Field()
  studentNum: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  title: string;

  @Field((type) => [String])
  email: string[];

  @Field((type) => [String])
  phoneNum: string[];

  @Field()
  dateOfBirth: string;

  @Field()
  nameOfDegree: string;

  @Field()
  bio: string;

  @Field((type) => [String], { nullable: 'itemsAndList' })
  tags?: string[];

  @Field()
  preferredLocation: string;

  @Field()
  employmentStatus: string;

  @Field((type) => [String])
  notableAchievements: string[];

  @Field((type) => [[String]], { nullable: 'itemsAndList' })
  links?: string[][];

  @Field()
  profilePhoto: string;

  //uploaded documents return if they are uploaded or not
  @Field()
  academicRecord: boolean;

  @Field()
  cv: boolean;

  @Field()
  capstoneProject: boolean;
}
