import { Field, ObjectType } from '@nestjs/graphql';

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

  @Field((type) => [String])
  tags: string[];

  @Field()
  preferredLocation: string;

  @Field()
  employmentStatus: string;

  @Field((type) => [String])
  notableAchievements: string[];

  @Field((type) => [String])
  links: string[];

  //uploaded documents return if they are uploaded or not
<<<<<<< HEAD
  @Field((type) => Boolean)
  academicRecord: boolean;

  @Field((type) => Boolean)
  cv: boolean;

  @Field((type) => Boolean)
=======
  @Field()
  academicRecord: boolean;

  @Field()
  cv: boolean;

  @Field()
>>>>>>> 4194381c9aa7b2f11f0db76e16ce481a59517096
  capstoneProject: boolean;
}
