import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateBlogHandler, 
  UpdateBlogTitleHandler, 
  UpdateBlogContentHandler, 
  UpdateBlogArchivedHandler, 
  DeleteBlogHandler, 
  UpdateCommentHandler, 
  DeleteCommentHandler, 
  DeleteCommentsByBlogIdHandler, 
  CreateMediaHandler,
  CreateCommentHandler } from './commands/api-blog-command-handler.handler';
import { GetBlogByIdHandler, 
  GetAllBlogsHandler, 
  GetAllArchivedBlogsHandler, 
  GetBlogByUserIdHandler, 
  GetAllCommentsHandler, 
  GetCommentsByBlogIdHandler, 
  GetCommentByCommentIdHandler, 
  GetMediaByBlogIdHandler } from './queries/api-blog-query-handler.handler';
import { BlogService } from './api-blog-service.service';

@Module({
    imports: [CqrsModule],
    providers: [
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
        GetMediaByBlogIdHandler
      ],
})
export class ApiBlogServiceFeatureModuleModule {}
