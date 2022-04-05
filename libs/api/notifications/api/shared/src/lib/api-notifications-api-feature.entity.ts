import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class NotificationData {
    @Field()
    notificationType!: string;
}

@ObjectType()
export class Notification {
    @Field(type => ID)
    ID!: string;

    @Field(type => ID)
    userIDFrom?: string;

    @Field(type => ID)
    userIDTo!: string;

    @Field()
    data: NotificationData;

    @Field() 
    date: Date;
    
    @Field()
    seen: boolean;
}