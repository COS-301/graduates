import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id!: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;

    @Field(() => String)
    passwordSalt: string;

    @Field(() => String)
    name: string;

    @Field(() => Date)
    dateOfBirth: Date;

    @Field(() => String)
    companyId: string;

    @Field(() => Date)
    created: Date;

    @Field(() => Boolean)
    suspended: boolean;

    @Field(() => Boolean)
    validated: boolean;
}