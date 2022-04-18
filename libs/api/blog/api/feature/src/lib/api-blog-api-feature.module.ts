import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { BlogRepository } from '@graduates/api/blog/repository/data-access';
import { BlogResolver, BlogCommentResolver, BlogMediaResolver } from './api-blog-resolver.resolver';
import { CreateBlogHandler, 
  UpdateBlogTitleHandler, 
  UpdateBlogContentHandler, 
  UpdateBlogArchivedHandler, 
  DeleteBlogHandler, 
  UpdateCommentHandler, 
  DeleteCommentHandler, 
  DeleteCommentsByBlogIdHandler, 
  CreateMediaHandler,
  CreateCommentHandler, 
  GetBlogByIdHandler, 
  GetAllBlogsHandler, 
  GetAllArchivedBlogsHandler, 
  GetBlogByUserIdHandler, 
  GetAllCommentsHandler, 
  GetCommentsByBlogIdHandler, 
  GetCommentByCommentIdHandler, 
  GetMediaByBlogIdHandler,
  GetNameByUserIdHandler } from '@graduates/api/blog/service/feature';
import { BlogService } from '@graduates/api/blog/service/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    BlogRepository,
    BlogResolver, 
    BlogCommentResolver, 
    BlogMediaResolver,
    PrismaService,
    BlogService, 
    CreateBlogHandler, 
    UpdateBlogTitleHandler, 
    UpdateBlogContentHandler, 
    UpdateBlogArchivedHandler, 
    DeleteBlogHandler, 
    UpdateCommentHandler, 
    DeleteCommentHandler, 
    DeleteCommentsByBlogIdHandler, 
    CreateMediaHandler,
    CreateCommentHandler, 
    GetBlogByIdHandler, 
    GetAllBlogsHandler, 
    GetAllArchivedBlogsHandler, 
    GetBlogByUserIdHandler, 
    GetAllCommentsHandler, 
    GetCommentsByBlogIdHandler, 
    GetCommentByCommentIdHandler, 
    GetMediaByBlogIdHandler,
    GetNameByUserIdHandler
  ],
  exports: [],
})
export class ApiBlogApiFeatureModule {}
