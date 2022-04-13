import { Field, ObjectType, InputType } from '@nestjs/graphql';
//import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Blog } from './api-blog-entity.entity';

@ObjectType()
export class BlogComment {
  /**
   * The id of the blog that the comment belongs to
   */
  @Field()
  Id!: string;

  /**
   * The id of the user who created the blog
   */
  @Field()
  blogID!: string;

  /**
   * content of blog
   */
  @Field()
  content!: string;


  /**
   * The blog that the comment belongs to
   */
  @Field(() => Blog)
  blog!: Blog;
}

@InputType()
export class BlogCommentInput {
  /**
   * The id of the blog that the comment belongs to
   */
  @Field()
  blogId!: string;

  /**
   * media
   */
  @Field()
  media!: string;

 
  /**
   * The blog that the comment belongs to
   */
  @Field(() => Blog)
  blog!: Blog;
}
