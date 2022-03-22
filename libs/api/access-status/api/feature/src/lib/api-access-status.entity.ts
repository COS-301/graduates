import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiAccessStatusEntity {
    @Field()
    UserID!: string;

    @Field()
    item!: string;

    @Field()
    accessStatus: string;
}