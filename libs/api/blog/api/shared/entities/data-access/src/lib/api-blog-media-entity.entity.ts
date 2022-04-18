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

  /**
   * The blog that the media belongs to
   */
   @Field(() => Blog)
   blog!: Blog;
}
