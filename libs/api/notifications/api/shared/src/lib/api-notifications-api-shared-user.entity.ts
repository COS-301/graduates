import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserNotification {
    @Field(type => ID)
    id!: string

    @Field()
    name: string;

    @Field()
    email: string;
}