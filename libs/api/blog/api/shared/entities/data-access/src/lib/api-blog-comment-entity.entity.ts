import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Blog } from './api-blog-entity.entity';

@ObjectType()
export class BlogComment {
  /**
   * The id of the blog that the comment belongs to
   */
  @Field()
  Id!: string;

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

  @Field(() => User)
  user!: User;

  /**
   * The blog that the comment belongs to
   */
  @Field(() => Blog)
  blog!: Blog;
}

@InputType()
export class BlogCommentCreateInput {

  @Field()
  Id!: string;
 
  /**
   * The id of the blog that the comment belongs to
   */
  @Field()
  blogId!: string;

  @Field()
  userId!: string;
  
  @Field()
  content!: string;

  @Field(() => Date)
  date!: Date;
 
  @Field(() => User)
  user!: User;
 
  /**
   * The blog that the comment belongs to
   */
  @Field(() => Blog)
  blog!: Blog;
}
