import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Short } from './ApiShortsEntity.entity';

@ObjectType()
export class ShortReport {
  @Field()
  shortId!: string;

  @Field()
  userID!: string;

  @Field()
  reason!: string;

  @Field(() => User)
  user!: User;

  @Field(() => Short)
  short!: Short;
}

@InputType()
export class ShortReportInput {
  @Field()
  shortId!: string;

  @Field()
  userID!: string;

  @Field()
  reason!: string;

  @Field(() => User)
  user!: User;

  @Field(() => Short)
  short!: Short;
}
