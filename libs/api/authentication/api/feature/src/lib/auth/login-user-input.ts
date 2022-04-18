import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class LoginUserInput{
    @Field()
    name: string;

    @Field()
    password: string;
}