import { BlogRepository } from '@graduates/api/blog/repository/data-access';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBlogByIdQuery } from './api-blog-query.query';
import { Blog } from '@prisma/client';

@QueryHandler(GetBlogByIdQuery)
export class GetBlogByIdHandler implements IQueryHandler<GetBlogByIdQuery> {
  constructor(private readonly repository: BlogRepository) {}

  async execute(query: GetBlogByIdQuery) {
    const { blogId } = query;
    return this.repository.findByBlogId(blogId);
  }
}