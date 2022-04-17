import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { GetStoriesHandler } from './get-stories.handler';

describe('GetStoriesHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new GetStoriesHandler(prisma)).toBeDefined();
    expect(new GetStoriesHandler(prisma)).toBeTruthy();
  });
});
