import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiStorage {
  @Field(() => ID)
  id!: string;

  @Field(() => Boolean)
  cv!: boolean;

  @Field(() => Boolean)
  transcript!: boolean;

  @Field(() => Boolean)
  academicRecord!: boolean;

  @Field(() => Boolean)
  certificate!: boolean;

  @Field(() => Boolean)
  letterOfRecommendation!: boolean;
}
