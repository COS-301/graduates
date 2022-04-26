import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Blog, BlogComment, BlogMedia, User } from '@prisma/client';

@Injectable()
export class BlogRepository {
  constructor(private prisma: PrismaService) {}

  //Blogs
  
  /**
   * Find all blogs currently in the database
   * @return {Promise<Blog[]>} 
   */
  async findAll(): Promise<Blog[]> {
    return this.prisma.blog.findMany({
      where: {
        archived : false
      },
      orderBy: {
        date: 'desc'
      }
    });
  }

  /**
   * Find all archived blogs currently in the database
   * @return {Promise<Blog[]>} 
   */
  async findAllArchivedBlogs(): Promise<Blog[]> {
    return this.prisma.blog.findMany({
      where: {
        archived: true,
      },
    });
  }

  /**
   * Find a blog by id
   * @param {string} blogId The id of the blog to find
   * @return {Promise<Blog | null>} 
   */
  async findByBlogId(blogId: string): Promise<Blog | null> {
    return this.prisma.blog.findUnique({ where: { id: blogId } });
  }

  /**
   * Find all blogs posted by the user with the given id
   * @param {string} userId The id of the user
   * @return {Promise<Blog[]>} 
   */
  async findByUserId(userId: string): Promise<Blog[]> {
    return this.prisma.blog.findMany({
      where: {
        user: { id: userId },
      },
    });
    return [];
  }

  /**
   * Find the name of the user with the given id
   * @param {string} userId The id of the user
   * @return {Promise<User | null>} 
   */
  async findNameByUserId(userId: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  /**
   * Create a new blog
   * @param {string} title The title of the blog to create
   * @param {string} content The content of the blog to create
   * @param {boolean} archived Whether the blog is archived or not
   * @param {string} userId The id of the user who posted the blog
   * @return {Promise<Blog>} 
   */
  async createBlog(title: string, content: string, archived: boolean, userId: string ): Promise<Blog> {
    return this.prisma.blog.create({
      data: {
        title: title,
        content: content,
        archived: archived,
        user: {
          connect: {id: userId}
        },
        date: new Date()
      },
    });
  }

  /**
   * Update the title of a blog
   * @param {string} blogId The id of the blog to update
   * @param {string} title The new title for the blog
   * @return {Promise<Blog | null>} 
   */
  async updateBlogTitle(blogId: string, title: string): Promise<Blog | null> {
    return this.prisma.blog.update({
      where: { id: blogId, },
      data: {
        title: title
      },
    });
  }

  /**
   * Update the content of a blog
   * @param {string} blogId The id of the blog to update
   * @param {string} content The new content for the blog
   * @return {Promise<Blog | null>} 
   */
  async updateBlogContent(blogId: string, content: string): Promise<Blog | null> {
    return this.prisma.blog.update({
      where: { id: blogId, },
      data: {
        content: content
      },
    });
  }

  /**
   * Update the archived status of a blog
   * @param {string} blogId The id of the blog to update
   * @param {boolean} archived The new archived status for the blog
   * @return {Promise<Blog | null>} 
   */
  async updateBlogArchived(blogId: string, archived: boolean): Promise<Blog | null> {
    return this.prisma.blog.update({
      where: { id: blogId, },
      data: {
        archived: archived
      },
    });
  }

  /**
   * Delete a blog
   * @param {string} blogId The id of the blog to delete
   * @return {Promise<string>} 
   */
  async deleteBlog(blogId: string): Promise<string> {
    const deleteBlog = this.prisma.blog.delete({
      where: {
        id: blogId,
      },
    });

    const deleteComments = this.prisma.blogComment.deleteMany({
      where: {
        blogId: blogId,
      },
    });

    const deleteMedia = this.prisma.blogMedia.deleteMany({
      where: {
        blogId: blogId,
      },
    });

    if(await this.prisma.$transaction([deleteBlog, deleteComments, deleteMedia]))
      return "successful";
    else
      return "unsuccessful";
  }

  // Comments

  /**
   * Find all comments currently in the database
   * @return {Promise<BlogComment[]>} 
   */
  async findAllComments(): Promise<BlogComment[] | null> {
    return this.prisma.blogComment.findMany();
  }

  /**
   * Find all comments posted on a blog with a given blogId
   * @param {string} blogId The id of the blog to find comments on
   * @return {Promise<BlogComment[]>} 
   */
  async findAllCommentsByBlogId(blogId: string): Promise<BlogComment[] | null> {
    return this.prisma.blogComment.findMany({
      where: { blogId: blogId }
    });
  }


  /**
   * Find a comment by id
   * @param {string} commentId The id of the comment to find
   * @return {Promise<BlogComment>} 
   */
  async findCommentByCommentId(commentId: string): Promise<BlogComment[] | null> {
    return this.prisma.blogComment.findMany({ 
      where: { id : commentId } 
    });
  }

  /**
   * Create a comment
   * @param {string} blogId The id of the blog the comment is made on
   * @param {string} userId The id of the user who posted the comment
   * @param {string} content The  content of the comment
   * @return {Promise<BlogComment | null>} 
   */
  async createComment(blogId: string, userId: string, content: string): Promise<BlogComment | null> {
    return this.prisma.blogComment.create({
      data: {
        userId: userId,
        blogId: blogId,
        content: content,
        date: new Date()
      },
    });
  }

  /**
   * Update the content of a comment
   * @param {string} commentId The id of the comment to update
   * @param {string} content The new content of the comment
   * @return {Promise<string>} 
   */
  async updateComment(commentId: string, commentContent: string): Promise<string> {
    const res = await this.prisma.blogComment.update({
      where: {
        id: commentId,
      },
      data: {
        content: commentContent,
      },
    });
    if(res){
      return "success";
    }else{
      return "unsuccessful";
    }
  }

  /**
   * Delete a comment
   * @param {string} commentId The id of the comment to delete
   * @return {Promise<string>} 
   */
  async deleteComment(commentId: string): Promise<string> {
    const res = await this.prisma.blogComment.delete({
      where: {
        id: commentId,
      },
    });

    if(res){
      return "success";
    }else{
      return "unsuccessful";
    }
  }

  /**
   * Delete all comments on a blog
   * @param {string} blogId The id of the blog to have comments deleted
   * @return {Promise<string>} 
   */
  async deleteCommentsByBlogId(blogId: string): Promise<string> {
    const res = await this.prisma.blogComment.deleteMany({
      where: {
        blogId: blogId,
      },
    });

    if (res.count > 0) {
      return 'success';
    } else {
      return 'No tags deleted';
    }
  }
 
// Media

  /**
   * Find all media used on a blog with a given blogId
   * @param {string} blogId The id of the blog
   * @return {Promise<BlogMedia[]>} 
   */
  async findMediaByBlogId (blogId: string): Promise<BlogMedia[] | null> {
    return this.prisma.blogMedia.findMany({ 
      where: { blogId : blogId } 
    });
  }

  /**
   * Create a blog media
   * @param {string} blogId The id of the blog the media is used on
   * @param {string} media The url of media
   * @return {Promise<BlogMedia | null>} 
   */
  async createMedia(blogId: string, media: string): Promise<BlogMedia | null> {
    return this.prisma.blogMedia.create({
      data: {
        blogId: blogId,
        media: media
      },
    });
  }
}
