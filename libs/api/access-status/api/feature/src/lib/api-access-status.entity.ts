import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiAccessStatusEntity {
    @Field(type => ID)
    userID!: string;

    @Field()
    item!: string;

    @Field()
    accessStatus: string;
}