import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
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
   * Find all blogs from database, that are archived
   * @param {boolean} archived The page number used to offset the query
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
   * Update a Blog
   * @param {BlogUpdateInput} Blog The Blog to update along with updated data
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

  async updateBlogContent(blogId: string, content: string): Promise<Blog | null> {
    return this.prisma.blog.update({
      where: { id: blogId, },
      data: {
        content: content
      },
    });
  }

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
   * @param {string} blogId The id of the blogs to delete
   * @return {string>}
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
   * Find all comments from database
   * @return {Promise<BlogComment[]>}
   */
  async findAllComments(): Promise<BlogComment[] | null> {
    return this.prisma.blogComment.findMany();
  }

  /**
  * Find all comments from database by blogid
  * @param {string} blogId id of blog
  * @return {Promise<Blog[]>}
  */
  async findAllCommentsByBlogId(blogId: string): Promise<BlogComment[] | null> {
    return this.prisma.blogComment.findMany({
      where: { blogId: blogId }
    });
  }


  /**
   * Find comment by id
   * @param {string} commentId The id of the comment to find
   * @return {Promise<BlogComment[]>}
   */
   async findCommentByCommentId(commentId: string): Promise<BlogComment[] | null> {
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
  async createComment(id: string, blogId: string, userId: string, content: string): Promise<BlogComment | null> {
    return this.prisma.blogComment.create({
      data: {
        userId: userId,
        id: id,
        blogId: blogId,
        content: content,
        date: new Date()
      },
    });
  }

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
    if(res){
      return "success";
    }else{
      return "unsuccessful";
    }
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

    if(res){
      return "success";
    }else{
      return "unsuccessful";
    }
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

  async findMediaByBlogId (blogId: string): Promise<BlogMedia[] | null> {
    return this.prisma.blogMedia.findMany({ 
      where: { blogId : blogId } 
    });
  }

  async createMedia(blogId: string, media: string): Promise<BlogMedia | null> {
    return this.prisma.blogMedia.create({
      data: {
        blogId: blogId,
        media: media
      },
    });
  }
}
