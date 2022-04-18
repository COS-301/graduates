import { BlogRepository } from '@graduates/api/blog/repository/data-access';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { 
  GetBlogByIdQuery, 
  GetAllBlogsQuery, 
  GetAllArchivedBlogsQuery, 
  GetBlogByUserIdQuery, 
  GetAllCommentsQuery, 
  GetCommentsByBlogIdQuery, 
  GetCommentByCommentIdQuery, 
  GetMediaByBlogIdQuery,
  GetNameByUserIdQuery } from './api-blog-query.query';

@QueryHandler(GetBlogByIdQuery)
export class GetBlogByIdHandler implements IQueryHandler<GetBlogByIdQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetBlogByIdQuery) {
    const { blogId } = query;
    return this.repository.findByBlogId(blogId);
  }
}

@QueryHandler(GetAllBlogsQuery)
export class GetAllBlogsHandler implements IQueryHandler<GetAllBlogsQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetAllBlogsQuery) {
    return this.repository.findAll();
  }
}

@QueryHandler(GetAllArchivedBlogsQuery)
export class GetAllArchivedBlogsHandler implements IQueryHandler<GetAllArchivedBlogsQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetAllArchivedBlogsQuery) {
    return this.repository.findAllArchivedBlogs();
  }
}

@QueryHandler(GetNameByUserIdQuery)
export class GetNameByUserIdHandler implements IQueryHandler<GetNameByUserIdQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetNameByUserIdQuery) {
    const { userId } = query;
    return this.repository.findByUserId(userId);
  }
}

@QueryHandler(GetBlogByUserIdQuery)
export class GetBlogByUserIdHandler implements IQueryHandler<GetBlogByUserIdQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetBlogByUserIdQuery) {
    const { userId } = query;
    return this.repository.findByUserId(userId);
  }
}

// Comments

@QueryHandler(GetAllCommentsQuery)
export class GetAllCommentsHandler implements IQueryHandler<GetAllCommentsQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetAllCommentsQuery) {
    return this.repository.findAllComments();
  }
}

@QueryHandler(GetCommentsByBlogIdQuery)
export class GetCommentsByBlogIdHandler implements IQueryHandler<GetCommentsByBlogIdQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetCommentsByBlogIdQuery) {
    const { blogId } = query;
    return this.repository.findAllCommentsByBlogId(blogId);
  }
}

@QueryHandler(GetCommentByCommentIdQuery)
export class GetCommentByCommentIdHandler implements IQueryHandler<GetCommentByCommentIdQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetCommentByCommentIdQuery) {
    const { commentId } = query;
    return this.repository.findCommentByCommentId(commentId);
  }
}

// Media

@QueryHandler(GetMediaByBlogIdQuery)
export class GetMediaByBlogIdHandler implements IQueryHandler<GetMediaByBlogIdQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetMediaByBlogIdQuery) {
    const { blogId } = query;
    return this.repository.findMediaByBlogId(blogId);
  }
}