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

  @Field(type => [String],{ nullable: true })
  email?: string[];

  @Field(type => [String],{ nullable: true })
  phoneNum?: string[];

  @Field({ nullable: true })
  nameOfDegree?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field(type => [String],{ nullable: 'itemsAndList' })
  tags?: string[];

  @Field({ nullable: true })
  preferredLocation?: string;

  @Field({ nullable: true })
  employmentStatus?: string;

  @Field(type => [String],{ nullable: 'itemsAndList' })
  notableAchievements?: string[];

  @Field(type => [[String]],{ nullable: 'itemsAndList' })
  links?: string[][];

  @Field({nullable: true})
  profilePhoto?: string;
}
