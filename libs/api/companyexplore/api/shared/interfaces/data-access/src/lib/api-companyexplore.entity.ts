import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiCompanyExploreEntity{
  @Field()
  companyID: string

  @Field()
  name: string;

  @Field(type => [String])
  tags: string[];
}