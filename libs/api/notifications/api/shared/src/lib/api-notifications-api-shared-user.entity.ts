import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserNotification {
    @Field(() => ID)
    id!: string;

    @Field()
    name: string;

    @Field()
    email: string;
}