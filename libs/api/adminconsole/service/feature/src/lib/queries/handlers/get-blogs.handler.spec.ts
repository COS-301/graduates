import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { GetBlogsHandler } from './get-blogs.handler';

describe('GetBlogsHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new GetBlogsHandler(prisma)).toBeDefined();
    expect(new GetBlogsHandler(prisma)).toBeTruthy();
  });
});
