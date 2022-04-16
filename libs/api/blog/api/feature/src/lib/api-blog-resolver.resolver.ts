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
 // BlogCreateInput,
} from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogService } from '@graduates/api/blog/service/feature';
import { NotFoundException } from '@nestjs/common';

@Resolver(Blog)
export class BlogResolver {
  // constructor(private blogsService: BlogsService) {}

  // @Query(returns => Blog)
  // getBlog(@Args('id',{type: () => Int}) id: number): Promise<Blog>{
  //     return this.blogsService.findOne(id);
  // }

  // @Query(returns => [Blog])
  // blogs(): Promise<Blog[]>{
  //     return this.blogsService.findAll();
  // }
  // @Mutation(returns => Blog)
  // createBlog(@Args('createBlogInput') createBlogInput: createBlogInput): Promise<Blog>{
  //     return this.blogsService.createBlog(createBlogInput);
  // }
  // @ResolveField(returns => User)
  // user(@Parent() blog: Blog): Promise<User>{
  //     return this.blogsService.getUser(blog.userId);
  // }
}
