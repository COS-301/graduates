import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateBlogCommand } from './api-blog-command.command';
import { BlogRepository } from '@graduates/api/blog/repository/data-access';
import { Blog } from '@prisma/client';

/**

 */
@CommandHandler(CreateBlogCommand)
export class CreateBlogHandler implements ICommandHandler<CreateBlogCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: CreateBlogCommand): Promise<Blog | null> {
    // const {} = command;

    // return this.repository.createBlog();
    return null;
  }
}
