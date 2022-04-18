import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthenticationUser{

    @Field(type => ID)
    id!: string

    // @Field(() => Int)
    // id!: number
    
    @Field()
    name!: string;

    @Field()
    email!: string;

    @Field()
    password!: string;


}