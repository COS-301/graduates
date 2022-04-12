import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "@graduates/api/authentication/api/shared/interfaces/data-access";

@ObjectType()
export class LoginResponese {
    @Field()
    access_token: string;

    @Field(() => User)
    user: User;
}