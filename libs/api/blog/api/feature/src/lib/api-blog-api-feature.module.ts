import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BlogRepository } from '@graduates/api/blog/repository/data-access';
// import {

// } from '@graduates/api/blog/service/feature';
import { BlogResolver } from './api-blog-resolver.resolver';
// import { BlogService } from '@graduates/api/blog/service/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    BlogRepository,
    BlogResolver,
    PrismaService
    // BlogService,
  ],
  exports: [],
})
export class ApiBlogApiFeatureModule {}
