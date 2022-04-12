import { Field, ObjectType } from '@nestjs/graphql';
import { Short } from './api-shorts-entity.entity';

@ObjectType()
export class ShortTag {
  /**
   * The id of the short the tag belongs to
   */
  @Field()
  shortId!: string;

  /**
   * The text of the tag
   */
  @Field()
  tag!: string;

  /**
   * The short the tag belongs to
   */
  @Field(() => Short)
  short!: Short;
}
