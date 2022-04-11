import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Short } from './ApiShortsEntity.entity';

@ObjectType()
export class ShortTag {
  @Field()
  shortId!: string;

  @Field()
  tag!: string;

  @Field(() => Short)
  short!: Short;
}

@InputType()
export class ShortTagInput {
  @Field()
  shortId!: string;

  @Field()
  tag!: string;

  @Field(() => Short)
  short!: Short;
}
