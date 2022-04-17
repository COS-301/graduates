import { Blog, BlogComment, BlogMedia } from '@graduates/api/blog/api/shared/entities/data-access';
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateBlogCommand, 
  UpdateBlogTitleCommand, 
  UpdateBlogContentCommand, 
  UpdateBlogArchivedCommand, 
  DeleteBlogCommand, 
  UpdateCommentCommand, 
  DeleteCommentCommand, 
  DeleteCommentsByBlogIdCommand, 
  CreateMediaCommand,
  CreateCommentCommand } from './commands/api-blog-command.command';
import { 
  GetBlogByIdQuery, 
  GetAllBlogsQuery, 
  GetAllArchivedBlogsQuery, 
  GetBlogByUserIdQuery, 
  GetAllCommentsQuery, 
  GetCommentsByBlogIdQuery, 
  GetCommentByCommentIdQuery, 
  GetMediaByBlogIdQuery } from './queries/api-blog-query.query';

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

  // Commands
  async createBlog(title, content, archived, userId): Promise<Blog> {
    return await this.commandBus.execute(
      new CreateBlogCommand(title, content, archived, userId)
    );
  }

  async updateBlogTitle(blogId, title): Promise<string> {
    return await this.commandBus.execute(
      new UpdateBlogTitleCommand(blogId, title)
    );
  }

  async updateBlogContent(blogId, content): Promise<Blog | null> {
    return await this.commandBus.execute(
      new UpdateBlogContentCommand(blogId, content)
    );
  }

  async updateBlogArchived(blogId, archived): Promise<Blog | null> {
    return await this.commandBus.execute(
      new UpdateBlogArchivedCommand(blogId, archived)
    );
  }

  async deleteBlog(blogId): Promise<string> {
    return await this.commandBus.execute(
      new DeleteBlogCommand(blogId)
    );
  }

  async createComment(id, blogId, userId, content): Promise<BlogComment | null> {
    return await this.commandBus.execute(
      new CreateCommentCommand(id, blogId, userId, content)
    );
  }

  async updateComment(commentId, commentContent): Promise<string> {
    return await this.commandBus.execute(
      new UpdateCommentCommand(commentId, commentContent)
    );
  }

  async deleteComment(commentId): Promise<string> {
    return await this.commandBus.execute(
      new DeleteCommentCommand(commentId)
    );
  }

  async deleteCommentsByBlogId(blogId): Promise<string> {
    return await this.commandBus.execute(
      new DeleteCommentsByBlogIdCommand(blogId)
    );
  }

  async createMedia(blogId, media): Promise<BlogMedia | null> {
    return await this.commandBus.execute(
      new CreateMediaCommand(blogId, media)
    );
  }

  // Queries
  async getBlogById(blogId): Promise<Blog | null> {
    return await this.queryBus.execute(
      new GetBlogByIdQuery(blogId)
    );
  }

  async getAllBlogs(): Promise<Blog[]> {
    return await this.queryBus.execute(
      new GetAllBlogsQuery()
    );
  }

  async getAllArchivedBlogs(): Promise<Blog[]> {
    return await this.queryBus.execute(
      new GetAllArchivedBlogsQuery()
    );
  }

  async getBlogByUserId(userId): Promise<Blog[]> {
    return await this.queryBus.execute(
      new GetBlogByUserIdQuery(userId)
    );
  }

  async getAllComments(): Promise<BlogComment[]> {
    return await this.queryBus.execute(
      new GetAllCommentsQuery()
    );
  }

  async getCommentsByBlogId(blogId): Promise<BlogComment[]> {
    return await this.queryBus.execute(
      new GetCommentsByBlogIdQuery(blogId)
    );
  }

  async getCommentByCommentId(commentId): Promise<BlogComment> {
    return await this.queryBus.execute(
      new GetCommentByCommentIdQuery(commentId)
    );
  }

  async getMediaByBlogId(blogId): Promise<BlogMedia[]> {
    return await this.queryBus.execute(
      new GetMediaByBlogIdQuery(blogId)
    );
  }
}
