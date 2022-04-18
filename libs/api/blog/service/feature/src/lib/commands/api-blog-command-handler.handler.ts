import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateBlogCommand, 
  UpdateBlogTitleCommand, 
  UpdateBlogContentCommand, 
  UpdateBlogArchivedCommand, 
  DeleteBlogCommand, 
  UpdateCommentCommand, 
  DeleteCommentCommand, 
  DeleteCommentsByBlogIdCommand, 
  CreateMediaCommand,
  CreateCommentCommand } from './api-blog-command.command';
import { BlogRepository } from '@graduates/api/blog/repository/data-access';

// Blog

@CommandHandler(CreateBlogCommand)
export class CreateBlogHandler implements ICommandHandler<CreateBlogCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: CreateBlogCommand) {
    const { title, content, archived, userId } = command; 
    return this.repository.createBlog(title, content, archived, userId);
  }
}

@CommandHandler(UpdateBlogTitleCommand)
export class UpdateBlogTitleHandler implements ICommandHandler<UpdateBlogTitleCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: UpdateBlogTitleCommand) {
    const { blogId, title } = command; 
    return this.repository.updateBlogTitle(blogId, title);
  }
}

@CommandHandler(UpdateBlogContentCommand)
export class UpdateBlogContentHandler implements ICommandHandler<UpdateBlogContentCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: UpdateBlogContentCommand) {
    const { blogId, content} = command; 
    return this.repository.updateBlogContent(blogId, content);
  }
}

@CommandHandler(UpdateBlogArchivedCommand)
export class UpdateBlogArchivedHandler implements ICommandHandler<UpdateBlogArchivedCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: UpdateBlogArchivedCommand) {
    const { blogId, archived } = command; 
    return this.repository.updateBlogArchived(blogId, archived);
  }
}

@CommandHandler(DeleteBlogCommand)
export class DeleteBlogHandler implements ICommandHandler<DeleteBlogCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: DeleteBlogCommand) {
    const { blogId } = command; 
    return this.repository.deleteBlog(blogId);
  }
}

// Comments

@CommandHandler(CreateCommentCommand)
export class CreateCommentHandler implements ICommandHandler<CreateCommentCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: CreateCommentCommand) {
    const { id, blogId, userId, content } = command; 
    return this.repository.createComment(id, blogId, userId, content);
  }
}

@CommandHandler(UpdateCommentCommand)
export class UpdateCommentHandler implements ICommandHandler<UpdateCommentCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: UpdateCommentCommand) {
    const { commentId, commentContent } = command; 
    return this.repository.updateComment(commentId, commentContent);
  }
}

@CommandHandler(DeleteCommentCommand)
export class DeleteCommentHandler implements ICommandHandler<DeleteCommentCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: DeleteCommentCommand) {
    const { commentId } = command; 
    return this.repository.deleteComment(commentId);
  }
}

@CommandHandler(DeleteCommentsByBlogIdCommand)
export class DeleteCommentsByBlogIdHandler implements ICommandHandler<DeleteCommentsByBlogIdCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: DeleteCommentsByBlogIdCommand) {
    const { blogId } = command; 
    return this.repository.deleteCommentsByBlogId(blogId);
  }
}

// Media

@CommandHandler(CreateMediaCommand)
export class CreateMediaHandler implements ICommandHandler<CreateMediaCommand> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(command: CreateMediaCommand) {
    const { blogId, media } = command; 
    return this.repository.createMedia(blogId, media);
  }
}