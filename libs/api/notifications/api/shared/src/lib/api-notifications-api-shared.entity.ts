import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class NotificationData {
    @Field()
    notificationType!: string;
}

@ObjectType()
export class Notification {
    @Field(() => ID)
    id!: string;

    @Field(() => ID)
    userIdFrom?: string;

    @Field(() => ID)
    userIdTo!: string;

    @Field()
    data: NotificationData;

    @Field() 
    date: Date;
    
    @Field()
    seen: boolean;
}