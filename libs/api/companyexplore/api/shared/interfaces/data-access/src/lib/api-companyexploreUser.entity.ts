import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiCompanyExploreUserEntity{
  //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated
  @Field()
  id: string

  @Field()
  email: string

  @Field()
  password: string

  @Field() 
  passwordSalt: string

  @Field()
  name: string;

  @Field()
  dateOfBirth: Date;

  @Field()
  companyID: string;

  @Field()
  created: Date;

  @Field()
  suspended: boolean;

  @Field()
  validated: boolean;
}