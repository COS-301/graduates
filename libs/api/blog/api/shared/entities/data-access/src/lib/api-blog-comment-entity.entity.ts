import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Blog } from './api-blog-entity.entity';

@ObjectType()
export class BlogComment {
  /**
   * The id of the blog that the comment belongs to
   */
  @Field()
  id!: string;

  /**
   * The id of the blog the comment is on
   */
  @Field()
  blogId!: string;

  /**
   * content of blog
   */
  @Field()
  userId!: string;

  @Field()
  content!: string;

  @Field(() => Date)
  date!: Date;

  @Field(() => AuthenticationUser)
  user!: AuthenticationUser;

  /**
   * The blog that the comment belongs to
   */
  @Field(() => Blog)
  blog!: Blog;
}