import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Short {
  @Field()
  id!: string;

  @Field()
  user_id!: string;

<<<<<<< HEAD
  @Field()
  media!: string;

  @Field()
  data!: string;
=======
  @Field({ nullable: true })
  media?: string;

  @Field({ nullable: true })
  data?: string;
>>>>>>> e1e6e938374a1c07b6591fd84ab678bb1da472d2

  @Field(() => Date)
  date_posted!: Date;

  @Field(() => Boolean)
  archived!: boolean;
}
