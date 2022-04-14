import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Blog } from './api-blog-entity.entity';

@ObjectType()
export class BlogMedia {
  /**
   * The id of the blog the media belongs to
   */
  @Field()
  blogId!: string;

  /**
   * url of media
   */
  @Field()
  media!: string;
}

/**
 * Definition of the BlogCreateInput entity as input type
 */
@InputType()
export class BlogMediaCreateInput {
  /**
   * The id of the blog the media belongs to
   */
  @Field()
  blogId!: string;
 
  /**
   * url of media
   */
  @Field()
  media!: string;
}