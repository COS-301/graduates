import { Field, ObjectType } from "@nestjs/graphql";
import { ApiCompanyExploreUserEntity } from "../";

@ObjectType()
export class ApiCompanyExploreTaggedEntity{
  //UserId, tag, user
  @Field()
  userId: string

  @Field()
  tag: string

  @Field() //add entity
  user: ApiCompanyExploreUserEntity;
}