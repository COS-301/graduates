import { Test, TestingModule } from '@nestjs/testing';
import { BlogRepository } from './api-blog-repository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Blog, BlogComment, BlogMedia  } from '@graduates/api/blog/api/shared/entities/data-access';

jest.mock('@graduates/api/blog/api/shared/entities/data-access');

const blogMock: jest.Mocked<Blog> = new Blog() as Blog;
const blogCommentMock: jest.Mocked<BlogComment> = new BlogComment() as BlogComment;
const blogMediaMock: jest.Mocked<BlogMedia> = new BlogMedia() as BlogMedia;

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

  //Test findAll function
  describe('findAll', () => {
    const arrayOfBlog = [blogMock];
    it('should return an array of blogs in descending order of date', async () => {
      jest
        .spyOn(repository, 'findAll')
        .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlog));

      expect(await repository.findAll()).toEqual(
        expect.arrayContaining(arrayOfBlog)
      );
    });
  });
  
  //Test findAllArchivedBlogs function
  describe('findAllArchivedBlogs', () => {
    const arrayOfBlog = [blogMock];
    it('should return an array of blogs that are archived', async () => {
      jest
        .spyOn(repository, 'findAllArchivedBlogs')
        .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlog));

      expect(await repository.findAllArchivedBlogs()).toEqual(
        expect.arrayContaining(arrayOfBlog)
      );
    });
  });

  //Test findByBlogId function

  //Test findByUserId function

  //Test createBlog function

  //Test updateBlogTitle function

  //Test updateBlogContent function

  //Test updateBlogArchived function

  //Test deleteBlog function

  //Test findAllComments function

  //Test findAllCommentsByBlogId function

  //Test findCommentByCommentId function

  //Test createComment function

  //Test updateComment function

  //Test deleteComment function

  //Test deleteCommentsByBlogId function

  //Test findMediaByBlogId function

  //Test createMedia function
  
});
