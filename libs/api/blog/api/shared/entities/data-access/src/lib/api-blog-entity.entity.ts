import { Field, ObjectType } from '@nestjs/graphql';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { BlogComment } from './api-blog-comment-entity.entity';
import { BlogMedia } from './api-blog-media-entity.entity';
import { ID } from '@nestjs/graphql';

/**
 * Definition of the Blog entity as object type
 */
@ObjectType()
export class Blog {
  /**
   * The id of the Blog
   */
  @Field(() => ID)
  id!: string;

  /**
   * The id of the user who uploaded the Blog
   */
  @Field()
  userId!: string;

  /**
   * The description/name of the Blog
   */
  @Field({ nullable: true })
  title!: string;

  /**
   * The content of the Blog
   */
  @Field({ nullable: true })
  content!: string;

  /**
   * The date the Blog was created
   */
  @Field(() => Date)
  date!: Date;

  /**
   * Wether the Blog is archived or not
   */
  @Field(() => Boolean)
  archived!: boolean;

  /**
   * The user who uploaded the Blog
   */
  @Field(() => AuthenticationUser)
  user!: AuthenticationUser;

  /**
   * The media of the Blog
   */
  @Field(() => [BlogMedia])
  blogMedia!: BlogMedia[];

  /**
   * The comments of the Blog
   */
  @Field(() => [BlogComment])
  blogComment!: BlogComment[];
}