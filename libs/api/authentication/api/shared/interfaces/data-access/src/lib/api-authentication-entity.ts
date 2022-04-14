import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthenticationUser{

    @Field(type => ID)
    id!: string
    
    @Field()
    username: string;

    @Field()
    dummy: string;

}