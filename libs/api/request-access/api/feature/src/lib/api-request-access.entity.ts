import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiRequestAccessEntity {
    @Field(type => ID)
    userID!: string;

    @Field(type => ID)
    companyID!: string;

    @Field()
    item!: string;
}