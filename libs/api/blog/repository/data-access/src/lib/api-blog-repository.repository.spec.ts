import { Test, TestingModule } from '@nestjs/testing';
import { BlogRepository } from './api-blog-repository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Blog, BlogComment, BlogMedia } from '@graduates/api/blog/api/shared/entities/data-access';

jest.mock('@graduates/api/blog/api/shared/entities/data-access');

const blogMock: jest.Mocked<Blog> = new Blog() as Blog;
const blogCommentMock: jest.Mocked<BlogComment> = new BlogComment() as BlogComment;
const blogMediaMock: jest.Mocked<BlogMedia> = new BlogMedia() as BlogMedia;
const stringMock: jest.Mocked<string> = new String() as string;

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
  describe('findByBlogId', () => {    
    it('should return the blog with the blogID', async () => {
      jest
        .spyOn(repository, 'findByBlogId')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await repository.findByBlogId("32A")).toMatchObject(
        blogMock
      )
    });    
  it('should return null', async () => {
    jest.spyOn(repository, 'findByBlogId').mockResolvedValue(null);

    expect(await repository.findByBlogId('NULL')).toEqual(null);
  });
  });

  //Test findByUserId function
  describe('findByUserId', () => {
    const arrayOfBlog = [blogMock];
    it('should return an array of blogs posted by userID', async () => {
      jest
        .spyOn(repository, 'findByUserId')
        .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlog));

      expect(await repository.findByUserId("32A")).toEqual(
        expect.arrayContaining(arrayOfBlog)
      );
    });
  });
  //Test createBlog function
  describe('createBlog', () => {    
    it('should return the new blog that was created', async () => {
      jest
        .spyOn(repository, 'createBlog')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await repository.createBlog("Title","Contents: this is the blog",false,"243H")).toMatchObject(
        blogMock
      )
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'createBlog').mockResolvedValue(null);
  
      expect(await repository.createBlog("Title","Contents: this is the blog",false,"NULL")).toEqual(null);
    });
  });

  //Test updateBlogTitle function
  describe('updateBlogTitle', () => {    
    it('should return the updated Blog with new Title', async () => {
      jest
        .spyOn(repository, 'updateBlogTitle')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await repository.updateBlogTitle("234H","New Title")).toMatchObject(
        blogMock
      )
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'updateBlogTitle').mockResolvedValue(null);
  
      expect(await repository.updateBlogTitle("NULL","New Title")).toEqual(null);
    });
  });

  //Test updateBlogContent function
  describe('updateBlogContent', () => {    
    it('should return the updated Blog with new Contents', async () => {
      jest
        .spyOn(repository, 'updateBlogContent')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await repository.updateBlogContent("234H","Contents: this is the newely updated blog")).toMatchObject(
        blogMock
      )
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'updateBlogContent').mockResolvedValue(null);
  
      expect(await repository.updateBlogContent("NULL","New Contents: this is the newely updated blog")).toEqual(null);
    });
  });
  //Test updateBlogArchived function
  describe('updateBlogArchived', () => {    
    it('should return the updated Blog with updated Archive', async () => {
      jest
        .spyOn(repository, 'updateBlogArchived')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await repository.updateBlogArchived("234H", true)).toMatchObject(
        blogMock
      )
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'updateBlogArchived').mockResolvedValue(null);
  
      expect(await repository.updateBlogArchived("NULL",false)).toEqual(null);
    });
  });

  //Test deleteBlog function
  describe('deleteBlog', () => {    
    it('should delete the blog and return string if succesfull or unseccesfull', async () => {
      jest
        .spyOn(repository, 'deleteBlog')
        .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

      expect(await repository.deleteBlog("234H")).toMatchObject(
        stringMock
      )
    });
  });

  //Test findAllComments function
  describe('findAllComments', () => {    
    const arrayOfComments = [blogCommentMock];
    it('should return an array of all the comments', async () => {
      jest
        .spyOn(repository, 'findAllComments')
        .mockImplementation((): Promise<BlogComment[]> => Promise.resolve(arrayOfComments));

        expect(await repository.findAllComments ()).toEqual(
          expect.arrayContaining(arrayOfComments)
        );
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'findAllComments').mockResolvedValue(null);
  
      expect(await repository.findAllComments()).toEqual(null);
    });
  });

  //Test findAllCommentsByBlogId function
  describe('findAllCommentsByBlogId', () => {    
    const arrayOfComments = [blogCommentMock];
    it('should return an array of all the comments on the blogID', async () => {
      jest
        .spyOn(repository, 'findAllCommentsByBlogId')
        .mockImplementation((): Promise<BlogComment[]> => Promise.resolve(arrayOfComments));

        expect(await repository.findAllCommentsByBlogId ('32A')).toEqual(
          expect.arrayContaining(arrayOfComments)
        );
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'findAllCommentsByBlogId').mockResolvedValue(null);
  
      expect(await repository.findAllCommentsByBlogId('NULL')).toEqual(null);
    });
  });
  //Test findCommentByCommentId function
  describe('findCommentByCommentId', () => {    
    const arrayOfComments = [blogCommentMock];
    it('should return an array of all the comments by commentID', async () => {
      jest
        .spyOn(repository, 'findCommentByCommentId')
        .mockImplementation((): Promise<BlogComment[]> => Promise.resolve(arrayOfComments));

        expect(await repository.findCommentByCommentId ('32A')).toEqual(
          expect.arrayContaining(arrayOfComments)
        );
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'findCommentByCommentId').mockResolvedValue(null);
  
      expect(await repository.findCommentByCommentId('NULL')).toEqual(null);
    });
  });
  //Test createComment function
  describe('createComment', () => {    
    
    it('should return a newely created comment', async () => {
      jest
        .spyOn(repository, 'createComment')
        .mockImplementation((): Promise<BlogComment> => Promise.resolve(blogCommentMock));

        expect(await repository.createComment("45H",'35','New Comment to be added')).toMatchObject(
          blogCommentMock
        )
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'createComment').mockResolvedValue(null);
  
      expect(await repository.createComment("NULL",'NULL','New Comment to be added')).toEqual(null);
    });
  });
  //Test updateComment function
  describe('updateComment', () => {    
    it('should update a comment and return string if succesfull or unseccesfull', async () => {
      jest
        .spyOn(repository, 'updateComment')
        .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

      expect(await repository.updateComment("234H","Updated comment")).toMatchObject(
        stringMock
      )
    });
  });
  //Test deleteComment function
  describe('deleteComment', () => {    
    it('should delete a comment and return string if succesfull or unseccesfull', async () => {
      jest
        .spyOn(repository, 'deleteComment')
        .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

      expect(await repository.deleteComment("234H")).toMatchObject(
        stringMock
      )
    });
  });
  //Test deleteCommentsByBlogId function
  describe('deleteCommentsByBlogId', () => {    
    it('should delete a comment by BlogID and return string if success or No tags deleted', async () => {
      jest
        .spyOn(repository, 'deleteCommentsByBlogId')
        .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

      expect(await repository.deleteCommentsByBlogId("234H")).toMatchObject(
        stringMock
      )
    });
  });
  //Test findMediaByBlogId function
  describe('findMediaByBlogId', () => {    
    const arrayOfMedia = [blogMediaMock];
    it('should return an array of all the media', async () => {
      jest
        .spyOn(repository, 'findMediaByBlogId')
        .mockImplementation((): Promise<BlogMedia[]> => Promise.resolve(arrayOfMedia));

        expect(await repository.findMediaByBlogId('43H')).toEqual(
          expect.arrayContaining(arrayOfMedia)
        );
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'findMediaByBlogId').mockResolvedValue(null);
  
      expect(await repository.findMediaByBlogId('NULL')).toEqual(null);
    });
  });
  //Test createMedia function
  describe('createMedia', () => {    
    it('should return the new media', async () => {
      jest
        .spyOn(repository, 'createMedia')
        .mockImplementation((): Promise<BlogMedia> => Promise.resolve(blogMediaMock));

        expect(await repository.createMedia('43H','filename.png')).toMatchObject(
          blogMediaMock
        )
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'createMedia').mockResolvedValue(null);
  
      expect(await repository.createMedia('NULL','filename.')).toEqual(null);
    });
  });
  
});
