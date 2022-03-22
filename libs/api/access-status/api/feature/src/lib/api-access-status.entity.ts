import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiAccessStatusEntity {
    @Field()
    userID!: string;

    @Field()
    item!: string;

    @Field()
    accessStatus: string;
}