import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserNotification {
    @Field(() => Int)
    id: number

    @Field()
    username: string;

    @Field()
    email: string;
}