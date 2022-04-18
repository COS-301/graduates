import { Field, ObjectType } from "@nestjs/graphql";
import { ApiCompanyExploreUserprofileEntity } from "../";

@ObjectType()
export class ApiCompanyExploreEntity{
  //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated, Userprofile ()
  @Field()
  id: string

  @Field()
  email: string

  @Field() //null
  password: string

  @Field() //null
  passwordSalt: string

  @Field()
  name: string;

  @Field()
  dateOfBirth: Date;

  @Field() //null
  companyID: string;

  @Field()
  created: Date;

  @Field() //false
  suspended: boolean;

  @Field() //false
  validated: boolean;

  @Field(type=>ApiCompanyExploreUserprofileEntity) //add entity
  Userprofile: ApiCompanyExploreUserprofileEntity;
}