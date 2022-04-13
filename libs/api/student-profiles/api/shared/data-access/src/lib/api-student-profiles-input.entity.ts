import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ApiStudentProfilesInputEntity {
  @Field()
  studentNum!: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phoneNum?: string;

  @Field({ nullable: true })
  dateOfBirth?: string;

  @Field({ nullable: true })
  nameOfDegree?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field(type => [String],{ nullable: true })
  tags?: string[];

  @Field({ nullable: true })
  preferredLocation?: string;

  @Field({ nullable: true })
  employmentStatus?: string;

  @Field(type => [String],{ nullable: true })
  notableAchievements?: string[];

  @Field(type => [String],{ nullable: true })
  links?: string[];

  //uploaded documents return if they are uploaded or not
  @Field({ nullable: true })
  academicRecord?: boolean;

  @Field({ nullable: true })
  cv?: boolean;
}
