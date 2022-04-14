import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { BlogCreateInput } from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogUpdateInput } from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogCommentCreateInput } from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogMediaCreateInput } from '@graduates/api/blog/api/shared/entities/data-access';
import { Blog, BlogComment, BlogMedia } from '@prisma/client';

@Injectable()
export class BlogRepository {
  constructor(private prisma: PrismaService) {}
  /**
   * Find all blogs from database
   * @return {Promise<Blog[]>}
   */

  //Blogs
  
  async findAll(): Promise<Blog[]> {
    return this.prisma.blog.findMany();
  }

  /**
   * Find all blogs from database, that are archived
   * @param {boolean} archived The page number used to offset the query
   * @return {Promise<Blog[]>}
   */
     async findAllArchivedBlogs(archived : boolean): Promise<Blog[]> {
      return this.prisma.blog.findMany({
        where: {
          archived: archived,
        },
      });
    }

  /**
   * Find a blog by id
   * @param {string} id The id of the blog to find
   * @return {Promise<Blog | null>}
   */
  async findByBlogId(blogId: string): Promise<Blog | null> {
    return this.prisma.blog.findUnique({ where: { id: blogId } });
  }

  /**
   * Find all blogs by user id
   * @param {string} userId The id of the user to find the blogs for
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
   * Create a new blog
   * @param {Blog} blog The blog to create
   * @param {string} userId The id of the user to create the blog for
   * @return {Promise<Blog | null>}
   */
  async createBlog(blog: BlogCreateInput, userId: string ): Promise<Blog> {
    return this.prisma.blog.create({
      data: {
        title: blog.title,
        content: blog.content,
        archived: blog.archived,
        user: {
          connect: {id: userId}
        },
        date: new Date()
      },
    });
  }

  /**
   * Update a Blog
   * @param {BlogUpdateInput} Blog The Blog to update along with updated data
   * @return {Promise<Blog | null>}
   */
  async updateBlog(blog: BlogUpdateInput): Promise<Blog | null> {
    return this.prisma.blog.update({
      where: { id: blog.id, },
      data: {
        title: blog.title,
        content: blog.content,
        archived: blog.archived
      },
    });
  }

  /**
   * Delete a blog
   * @param {string} blogId The id of the blogs to delete
   * @return {Promise<Blog | null>}
   */
  async deleteBlog(blogId: string): Promise<Blog | null> {
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

    await this.prisma.$transaction([deleteBlog, deleteComments]);

    return deleteBlog;
  }

  // Comments

  /**
   * Find all comments from database
   * @return {Promise<BlogComment[]>}
   */
  async findAllComments(): Promise<BlogComment[]> {
    return this.prisma.blogComment.findMany();
  }

  /**
  * Find all comments from database by blogid
  * @param {string} blogId id of blog
  * @return {Promise<Blog[]>}
  */
  async findAllCommentsByBlogId(blogId: string): Promise<BlogComment[]> {
    return this.prisma.blogComment.findMany({
      where: { blogId: blogId }
    });
  }


  /**
   * Find comment by id
   * @param {string} commentId The id of the comment to find
   * @return {Promise<BlogComment[]>}
   */
   async findCommentByCommentId(commentId: string): Promise<BlogComment[]> {
    return this.prisma.blogComment.findMany({ 
      where: { id : commentId } 
    });
  }

  /**
   * Create a comment
   * @param {BlogCommentCreateInput} comment The comment to create
   * @param {string} userId Id of user creating blog
   * @param {string} blogId Id of blog comment is created from 
   * @return {Promise<BlogComment>}
   */
  // async createComment(comment: BlogCommentCreateInput, userId: string, blogId: string ): Promise<BlogComment | null> {
  //   return this.prisma.blogComment.create({
  //     data: {
  //       id: comment.Id,
  //       blogId: blogId,
  //       userId: userId,
  //       content: comment.content,
  //       user: {
  //         connect: {id: userId}
  //       },
  //       blog: {
  //         connect: {id: blogId}
  //       },
  //       date: new Date()
  //     },
  //   });
  // }

  /**
   * Update comment by id
   * @param {string} commentId The id for the comment being updated
   * @param {string} commentContent The new content
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
    return "success";

  }

  /**
   * Delete a tag
   * @param {string} tag The tag to delete
   * @return {Promise<string>}
   */
  async deleteComment(commentId: string): Promise<string> {
    const res = await this.prisma.blogComment.delete({
      where: {
        id: commentId,
      },
    });

    return "success";
  }

  /**
   * Delete comments of a blog
   * @param {string} blogId The id of the blog
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

  async findMediaByBlogId (blogId: string): Promise<BlogMedia[]> {
    return this.prisma.blogMedia.findMany({ 
      where: { blogId : blogId } 
    });
  }

  async createMedia(media: BlogMediaCreateInput): Promise<BlogMedia | null> {
    return this.prisma.blogMedia.create({
      data: {
        blogId: media.blogId,
        media: media.media
      },
    });
  }

  // async updateBlogMedia(blogId: string, mediaId: string): Promise<BlogMedia | null> {
  //   return this.prisma.blogMedia.update({
  //     where: { blogId: blogId },
  //     data: {
  //       media: mediaId
  //     },
  //   });
  // }

}
