import { ObjectType, Field, ID} from '@nestjs/graphql';

@ObjectType({ description: 'company representative profile' })
export class CompanyRepresentative {
  @Field(type => ID)
  id!: string;

  @Field()
  repName!: string;

  @Field()
  jobTitle!: string;

  @Field()
  aboutMe!: string;

  @Field()
  repExperience!: string;

  @Field()
  location!: string;

  @Field()
  email!: string

  @Field()
  linkedIn?: string

  @Field()
  twitter?: string

  @Field()
  instagram?: string;

  @Field()
  snapChat?: string;

  @Field()
  gitHub?: string

  @Field()
  phoneNumber!: string;

  @Field()
  website?: string;
}