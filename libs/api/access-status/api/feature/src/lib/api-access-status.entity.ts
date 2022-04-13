import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiAccessStatusEntity {
    @Field()
    item!: string;

    @Field()
    accessStatus: string;
}