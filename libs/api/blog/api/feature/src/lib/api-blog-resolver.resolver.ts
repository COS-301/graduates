import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import {
  Blog,
  BlogCreateInput,
} from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogService } from '@graduates/api/blog/service/feature';
import { NotFoundException } from '@nestjs/common';

@Resolver(Blog)
export class BlogResolver {
  constructor(private readonly service: BlogService) {}

   /**
   * Mutation to create a blog
   * params to create a blog
   */
  // @Mutation(() => Blog)
  // async createBlog(
  //   // @Args('') blog: BlogCreateInput - example

  // ): Promise<Blog | null> {

  // }
}
