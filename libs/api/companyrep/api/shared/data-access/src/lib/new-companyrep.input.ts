import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class NewCompanyrepInput {
    @Field(type => String)
    id!: string;

    @Field()
    name!: string;

    @Field()
    Occupation!: string;

    @Field()
    experience!: string;

    @Field()
    about_me!: string;

    @Field()
    email!: string;

    @Field()
    phone_no!: string;

    @Field()
    website!: string;

    @Field(type => [String])
    connection!: string[];
}