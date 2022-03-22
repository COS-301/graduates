import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Short {
  @Field()
  id!: string;

  @Field()
  user_id!: string;

  @Field()
  media!: string;

  @Field()
  data!: string;

  @Field((type) => Date)
  date_posted!: Date;

  @Field((type) => Boolean)
  archived!: boolean;
}
