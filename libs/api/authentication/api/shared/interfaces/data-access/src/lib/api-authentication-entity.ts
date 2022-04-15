import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthenticationUser{

    // @Field(type => ID)
    // id!: string

    @Field(() => Int)
    id: number
    
    @Field()
    username: string;

    @Field()
    password: string;

    @Field()
    dummy: string;

}