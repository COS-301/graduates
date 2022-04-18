
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id!: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    passwordSalt: string;

    @Field()
    name: string;

    @Field(() => Date)
    dateOfBirth!: Date;

    @Field()
    companyId: string;

    @Field(() => Date)
    created!: Date;

    @Field()
    suspended: boolean;

    @Field(() => Boolean)
    validated!: boolean;
}