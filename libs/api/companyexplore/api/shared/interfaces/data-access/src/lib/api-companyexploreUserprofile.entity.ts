import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiCompanyExploreUserprofileEntity{
  //userId, profilePicture, bio
  @Field()
  userId: string;
  
  @Field()
  profilePicture: string;
  
  @Field()
  bio: string;
}