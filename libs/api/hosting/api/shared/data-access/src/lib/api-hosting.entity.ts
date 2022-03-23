import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class Apihosting{
    @Field()
    name!: string;
    @Field()
    status!: string;
}
