import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Short {
  @Field()
  id!: string;

  @Field()
  user_id!: string;

  @Field({ nullable: true })
  media?: string;

  @Field({ nullable: true })
  data?: string;

  @Field((type) => Date)
  date_posted!: Date;

  @Field((type) => Boolean)
  archived!: boolean;
}
