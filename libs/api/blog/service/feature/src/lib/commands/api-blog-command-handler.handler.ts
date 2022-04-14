import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateBlogCommand } from './api-blog-command.command';
import { BlogRepository } from '@graduates/api/blog/repository/data-access';
import { Blog } from '@graduates/api/blog/api/shared/entities/data-access';

@CommandHandler(CreateBlogCommand)
export class CreateBlogHandler implements ICommandHandler<CreateBlogCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: CreateBlogCommand) {
    const { title, content, archived, userId } = command; 
    return this.repository.createBlog(title, content, archived, userId);
  }
}
