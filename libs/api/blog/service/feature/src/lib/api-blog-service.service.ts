import {
  Blog,
  BlogCreateInput,
} from '@graduates/api/blog/api/shared/entities/data-access';
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
// import {

// } from './queries/api-blog-query.query';
import { CreateBlogCommand } from './commands/api-blog-command.command';

@Injectable()
export class BlogService {
  /**
   * Constructor - injects QueryBus and CommandBus
   * @param {QueryBus} queryBus The query bus
   * @param {CommandBus} commandBus The command bus
   */
  constructor(
    private readonly queryBus: QueryBus,
    private commandBus: CommandBus
  ) {}


  // /**
  //  * Create a new blog
  //  * create blog params
  //  */
  // async createBlog(): Promise<Blog> {
  //   return await this.commandBus.execute(
  //     new CreateBlogCommand();
  //   );
  // }
}
