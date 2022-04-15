import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateBlogHandler } from './commands/api-blog-command-handler.handler';
import { GetBlogByIdHandler } from './queries/api-blog-query-handler.handler';
import { BlogService } from './api-blog-service.service';

@Module({
    imports: [CqrsModule],
    providers: [
        BlogService,
        CreateBlogHandler,
        GetBlogByIdHandler,
      ],
})
export class ApiBlogServiceFeatureModuleModule {}
