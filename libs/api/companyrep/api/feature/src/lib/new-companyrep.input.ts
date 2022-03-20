import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

//   id: String!
//   name: String!
//   Occupation: String!
//   experience: String!
//   about_me: String!
//   email: String!
//   phone_no: String!
//   website: String!
//   conactions: [String!]!

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