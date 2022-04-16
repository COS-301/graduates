import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CompanyRepresentativeCreate {
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
