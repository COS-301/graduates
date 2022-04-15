import { Test, TestingModule } from '@nestjs/testing';
import { BlogRepository } from './api-blog-repository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Blog } from '@graduates/api/blog/api/shared/entities/data-access';

jest.mock('@graduates/api/blog/api/shared/entities/data-access');

const blogMock: jest.Mocked<Blog> = new Blog() as Blog;

// Run `yarn test api-blog-repository-data-access`
describe('BlogRepository', () => {
  let repository: BlogRepository;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogRepository, PrismaService],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    repository = module.get<BlogRepository>(BlogRepository);
  });
  it('should be defined', () => {
    expect(prisma).toBeDefined();
    expect(repository).toBeDefined();
  });

  
});
