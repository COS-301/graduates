// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BlogRepository } from '../../../../../../../blog/repository/data-access/src'
import { GetBlogsHandler } from './get-blogs.handler';

describe('GetBlogsHandler', () => {
  let prisma: BlogRepository; 
  it('should be defined', () => {
    expect(new GetBlogsHandler(prisma)).toBeDefined();
    expect(new GetBlogsHandler(prisma)).toBeTruthy();
  });
});
