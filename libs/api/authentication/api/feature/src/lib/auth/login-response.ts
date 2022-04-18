import { Field, ObjectType } from "@nestjs/graphql";
import { AuthenticationUser } from "@graduates/api/authentication/api/shared/interfaces/data-access";

@ObjectType()
export class LoginResponese {
    @Field()
    access_token: string;

    @Field(() => AuthenticationUser)
    user: AuthenticationUser;
}