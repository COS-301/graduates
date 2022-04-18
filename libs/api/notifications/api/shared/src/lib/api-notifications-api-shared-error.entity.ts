import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ErrorNotification {
    @Field()
    response!: string;
}