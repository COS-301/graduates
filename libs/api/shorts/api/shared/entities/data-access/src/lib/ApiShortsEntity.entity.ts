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

  @Field(() => Date)
  date_posted!: Date;

  @Field(() => Boolean)
  archived!: boolean;
}
