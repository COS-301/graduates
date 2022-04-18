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
  GetMediaByBlogIdQuery,
  GetNameByUserIdQuery } from './queries/api-blog-query.query';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';

@Injectable()
export class BlogService {
  /**
   * Constructor - injects the CommandBus and the QueryBus
   * @param {QueryBus} queryBus The query bus
   * @param {CommandBus} commandBus The command bus
   */
  constructor(
    private readonly queryBus: QueryBus,
    private commandBus: CommandBus
  ) {}

  // Commands

  /**
   * Create a new blog
   * @param {string} title The title of the blog to create
   * @param {string} content The content of the blog to create
   * @param {boolean} archived Whether the blog is archived or not
   * @param {string} userId The id of the user who posted the blog
   * @return {Promise<Blog>} 
   */
  async createBlog(title: string, content: string, archived: boolean, userId: string): Promise<Blog> {
    return await this.commandBus.execute(
      new CreateBlogCommand(title, content, archived, userId)
    );
  }

  /**
   * Update the title of a blog
   * @param {string} blogId The id of the blog to update
   * @param {string} title The new title for the blog
   * @return {Promise<Blog | null>} 
   */
  async updateBlogTitle(blogId: string, title: string): Promise<Blog | null> {
    return await this.commandBus.execute(
      new UpdateBlogTitleCommand(blogId, title)
    );
  }

  /**
   * Update the content of a blog
   * @param {string} blogId The id of the blog to update
   * @param {string} content The new content for the blog
   * @return {Promise<Blog | null>} 
   */
  async updateBlogContent(blogId: string, content: string): Promise<Blog | null> {
    return await this.commandBus.execute(
      new UpdateBlogContentCommand(blogId, content)
    );
  }

  /**
   * Update the archived status of a blog
   * @param {string} blogId The id of the blog to update
   * @param {boolean} archived The new archived status for the blog
   * @return {Promise<Blog | null>} 
   */
  async updateBlogArchived(blogId: string, archived: boolean): Promise<Blog | null> {
    return await this.commandBus.execute(
      new UpdateBlogArchivedCommand(blogId, archived)
    );
  }

  /**
   * Delete a blog
   * @param {string} blogId The id of the blog to delete
   * @return {Promise<string>} 
   */
  async deleteBlog(blogId: string): Promise<string> {
    return await this.commandBus.execute(
      new DeleteBlogCommand(blogId)
    );
  }

  /**
   * Create a comment
   * @param {string} blogId The id of the blog the comment is made on
   * @param {string} userId The id of the user who posted the comment
   * @param {string} content The  content of the comment
   * @return {Promise<BlogComment | null>} 
   */
  async createComment(blogId: string, userId: string, content: string): Promise<BlogComment | null> {
    return await this.commandBus.execute(
      new CreateCommentCommand(blogId, userId, content)
    );
  }

  /**
   * Update the content of a comment
   * @param {string} commentId The id of the comment to update
   * @param {string} content The new content of the comment
   * @return {Promise<string>} 
   */
  async updateComment(commentId: string, commentContent): Promise<string> {
    return await this.commandBus.execute(
      new UpdateCommentCommand(commentId, commentContent)
    );
  }

  /**
   * Delete a comment
   * @param {string} commentId The id of the comment to delete
   * @return {Promise<string>} 
   */
  async deleteComment(commentId: string): Promise<string> {
    return await this.commandBus.execute(
      new DeleteCommentCommand(commentId)
    );
  }

  /**
   * Delete all comments on a blog
   * @param {string} blogId The id of the blog to have comments deleted
   * @return {Promise<string>} 
   */
  async deleteCommentsByBlogId(blogId: string): Promise<string> {
    return await this.commandBus.execute(
      new DeleteCommentsByBlogIdCommand(blogId)
    );
  }

  /**
   * Create a blog media
   * @param {string} blogId The id of the blog the media is used on
   * @param {string} media The url of media
   * @return {Promise<BlogMedia | null>} 
   */
  async createMedia(blogId: string, media: string): Promise<BlogMedia | null> {
    return await this.commandBus.execute(
      new CreateMediaCommand(blogId, media)
    );
  }

  // Queries

  /**
   * Find a blog by id
   * @param {string} blogId The id of the blog to find
   * @return {Promise<Blog | null>} 
   */
  async getBlogById(blogId: string): Promise<Blog | null> {
    return await this.queryBus.execute(
      new GetBlogByIdQuery(blogId)
    );
  }

  /**
   * Find all blogs currently in the database
   * @return {Promise<Blog[]>} 
   */
  async getAllBlogs(): Promise<Blog[]> {
    return await this.queryBus.execute(
      new GetAllBlogsQuery()
    );
  }

  /**
   * Find all archived blogs currently in the database
   * @return {Promise<Blog[]>} 
   */
  async getAllArchivedBlogs(): Promise<Blog[]> {
    return await this.queryBus.execute(
      new GetAllArchivedBlogsQuery()
    );
  }

  /**
   * Find all blogs posted by the user with the given id
   * @param {string} userId The id of the user
   * @return {Promise<Blog[]>} 
   */
  async getBlogByUserId(userId: string): Promise<Blog[]> {
    return await this.queryBus.execute(
      new GetBlogByUserIdQuery(userId)
    );
  }

  /**
   * Find the name of the user with the given id
   * @param {string} userId The id of the user
   * @return {Promise<AuthenticationUser | null>} 
   */
   async getNameByUserId(userId: string): Promise<AuthenticationUser | null> {
    return await this.queryBus.execute(
      new GetNameByUserIdQuery(userId)
    );
  }

  /**
   * Find all comments currently in the database
   * @return {Promise<BlogComment[]>} 
   */
  async getAllComments(): Promise<BlogComment[]> {
    return await this.queryBus.execute(
      new GetAllCommentsQuery()
    );
  }

  /**
   * Find all comments posted on a blog with a given blogId
   * @param {string} blogId The id of the blog to find comments on
   * @return {Promise<BlogComment[]>} 
   */
  async getCommentsByBlogId(blogId: string): Promise<BlogComment[]> {
    return await this.queryBus.execute(
      new GetCommentsByBlogIdQuery(blogId)
    );
  }

  /**
   * Find a comment by id
   * @param {string} commentId The id of the comment to find
   * @return {Promise<BlogComment>} 
   */
  async getCommentByCommentId(commentId: string): Promise<BlogComment> {
    return await this.queryBus.execute(
      new GetCommentByCommentIdQuery(commentId)
    );
  }

  /**
   * Find all media used on a blog with a given blogId
   * @param {string} blogId The id of the blog
   * @return {Promise<BlogMedia[]>} 
   */
  async getMediaByBlogId(blogId: string): Promise<BlogMedia[]> {
    return await this.queryBus.execute(
      new GetMediaByBlogIdQuery(blogId)
    );
  }
}
