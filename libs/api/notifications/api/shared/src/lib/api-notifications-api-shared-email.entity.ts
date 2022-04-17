import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class EmailNotification {
    @Field()
    response!: string;

    @Field()
    emailTo: string;

    @Field()
    emailFrom: string;

    @Field()
    emailSubject: string;

    @Field()
    emailText: string;
}
