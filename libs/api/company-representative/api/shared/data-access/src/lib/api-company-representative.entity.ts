import { ObjectType, Field, ID, Directive, Int } from '@nestjs/graphql';

@ObjectType({ description: 'companey represantative profile profile' })
export class CompanyRepresentative {
  @Field((type) => ID)
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

  @Field((type) => [String])
  connection!: string[];
}