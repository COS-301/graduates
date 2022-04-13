import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class NotificationData {
    @Field()
    notificationType!: string;
}

@ObjectType()
export class Notification {
    @Field(() => ID)
    ID!: string;

    @Field(() => ID)
    userIDFrom?: string;

    @Field(() => ID)
    userIDTo!: string;

    @Field()
    data: NotificationData;

    @Field() 
    date: Date;
    
    @Field()
    seen: boolean;
}