import { Test, TestingModule } from '@nestjs/testing';
import { Blog, BlogComment, BlogMedia } from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogResolver } from './api-blog-resolver.resolver';
import {BlogCommentResolver} from './api-blog-resolver.resolver';
import {BlogMediaResolver} from './api-blog-resolver.resolver';
import { BlogService } from '@graduates/api/blog/service/feature';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';

jest.mock('@graduates/api/blog/api/shared/entities/data-access');
const blogMock: jest.Mocked<Blog> = new Blog() as Blog;
const BlogCommentMock: jest.Mocked<BlogComment> = new BlogComment() as BlogComment;
const BlogMediaMock: jest.Mocked<BlogMedia> = new BlogMedia() as BlogMedia;
const stringMock: jest.Mocked<string> = new String() as string;
// Run `yarn test api-blog-api-feature`
describe('BlogResolver', () => {
  let resolver: BlogResolver;
  let service: BlogService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogResolver, BlogService, QueryBus, CommandBus],
    }).compile();

    await module.init();

    resolver = module.get<BlogResolver>(BlogResolver);
    service = module.get<BlogService>(BlogService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
  });

  //test blogById function
  describe('blogById', () => {    
    it('should return a blog', async () => {
      jest
        .spyOn(resolver, 'blogById')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await resolver.blogById('blogID')).toMatchObject(
        blogMock
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'blogById').mockResolvedValue(null);
  
      expect(await resolver.blogById("blogID")).toEqual(null);
    });
  });

  //test allBlogs function  
  describe('allBlogs', () => {    
    const arrayOfBlogs = [blogMock];
    it('should return an array of all the blogs', async () => {
      jest
        .spyOn(resolver, 'allBlogs')
        .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlogs));

      expect(await resolver.allBlogs()).toEqual(
        expect.arrayContaining(arrayOfBlogs)
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'allBlogs').mockResolvedValue(null);
  
      expect(await resolver.allBlogs()).toEqual(null);
    });
  });
  
  //test allArchivedBlogs function
  describe('allArchivedBlogs', () => {    
    const arrayOfBlogs = [blogMock];
    it('should return an array of all the Archived blogs', async () => {
      jest
        .spyOn(resolver, 'allArchivedBlogs')
        .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlogs));

      expect(await resolver.allArchivedBlogs()).toEqual(
        expect.arrayContaining(arrayOfBlogs)
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'allArchivedBlogs').mockResolvedValue(null);
  
      expect(await resolver.allArchivedBlogs()).toEqual(null);
    });
  });
  //test blogByUserId function
  describe('blogByUserId', () => {    
    const arrayOfBlogs = [blogMock];
    it('should return an array of all the blogs posted by a usedID', async () => {
      jest
        .spyOn(resolver, 'blogByUserId')
        .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlogs));

      expect(await resolver.blogByUserId('43A')).toEqual(
        expect.arrayContaining(arrayOfBlogs)
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'blogByUserId').mockResolvedValue(null);
  
      expect(await resolver.blogByUserId('NULL')).toEqual(null);
    });
  });

  //test createBlog function
  describe('createBlog', () => {      
    it('should return a new blog', async () => {
      jest
        .spyOn(resolver, 'createBlog')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await resolver.createBlog('Title','Content - this is a blog', false, '43H')).toMatchObject(
        blogMock
      )
    });    
  });

  //test updateBlogTitle function
  describe('updateBlogTitle', () => {      
    it('should return a string', async () => {
      jest
        .spyOn(resolver, 'updateBlogTitle')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await resolver.updateBlogTitle('43H','Title')).toMatchObject(
        stringMock
      )
    });    
  });

  //test updateBlogContent function
  describe('updateBlogContent', () => {      
    it('should return a updated blog', async () => {
      jest
        .spyOn(resolver, 'updateBlogContent')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await resolver.updateBlogContent('32H','New Title')).toMatchObject(
        blogMock
      )
    });  
    it('should return null', async () => {
      jest.spyOn(resolver, 'updateBlogContent').mockResolvedValue(null);
  
      expect(await resolver.updateBlogContent('NULL','New Title')).toEqual(null);
    });  
  });
  //test updateBlogArchived function
  describe('updateBlogArchived', () => {      
    it('should return a updated blog with new Archive', async () => {
      jest
        .spyOn(resolver, 'updateBlogArchived')
        .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await resolver.updateBlogArchived('32H',true)).toMatchObject(
        blogMock
      )
    });  
    it('should return null', async () => {
      jest.spyOn(resolver, 'updateBlogArchived').mockResolvedValue(null);
  
      expect(await resolver.updateBlogArchived('NULL',false)).toEqual(null);
    });  
  });

  //test deleteBlog function
  describe('deleteBlog', () => {      
    it('should return a string', async () => {
      jest
        .spyOn(resolver, 'deleteBlog')
        .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

      expect(await resolver.deleteBlog('43H')).toMatchObject(
        stringMock
      )
    });    
  });

});

describe('BlogCommentResolver', () => {
  let resolver: BlogCommentResolver;
  let service: BlogService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogCommentResolver, BlogService, QueryBus, CommandBus],
    }).compile();

    await module.init();

    resolver = module.get<BlogCommentResolver>(BlogCommentResolver);
    service = module.get<BlogService>(BlogService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
  });

   //test allComments function
   describe('allComments', () => {    
    const arrayOfComments = [BlogCommentMock];
    it('should return an array of all the comments', async () => {
      jest
        .spyOn(resolver, 'allComments')
        .mockImplementation((): Promise<BlogComment[]> => Promise.resolve(arrayOfComments));

      expect(await resolver.allComments()).toEqual(
        expect.arrayContaining(arrayOfComments)
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'allComments').mockResolvedValue(null);
  
      expect(await resolver.allComments()).toEqual(null);
    });
  });

  //test commentsByBlogId function
  describe('commentsByBlogId', () => {    
    const arrayOfComments = [BlogCommentMock];
    it('should return an array of all the comments from a blog', async () => {
      jest
        .spyOn(resolver, 'commentsByBlogId')
        .mockImplementation((): Promise<BlogComment[]> => Promise.resolve(arrayOfComments));

      expect(await resolver.commentsByBlogId('H326E')).toEqual(
        expect.arrayContaining(arrayOfComments)
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'commentsByBlogId').mockResolvedValue(null);
  
      expect(await resolver.commentsByBlogId('NULL')).toEqual(null);
    });
  });

  //test commentsByCommentId function
  describe('commentsByCommentId', () => {    
    it('should return a comment', async () => {
      jest
        .spyOn(resolver, 'commentsByCommentId')
        .mockImplementation((): Promise<BlogComment> => Promise.resolve(BlogCommentMock));

      expect(await resolver.commentsByCommentId('H36')).toMatchObject(
        BlogCommentMock
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'commentsByCommentId').mockResolvedValue(null);
  
      expect(await resolver.commentsByCommentId('NULL')).toEqual(null);
    });
  });

  //test createComment function
  describe('createComment', () => {    
    it('should return a new comment', async () => {
      jest
        .spyOn(resolver, 'createComment')
        .mockImplementation((): Promise<BlogComment> => Promise.resolve(BlogCommentMock));

      expect(await resolver.createComment('347','Q23','This is a test Comment')).toMatchObject(
        BlogCommentMock
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'createComment').mockResolvedValue(null);
  
      expect(await resolver.createComment('NULL','NULL','This is a test Comment')).toEqual(null);
    });
  });

  //test updateComment function
  describe('updateComment', () => {      
    it('should return a string', async () => {
      jest
        .spyOn(resolver, 'updateComment')
        .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

      expect(await resolver.updateComment('43H','This is a new comment')).toMatchObject(
        stringMock
      )
    });    
  });
  //test deleteComment function
  describe('deleteComment', () => {      
    it('should return a string', async () => {
      jest
        .spyOn(resolver, 'deleteComment')
        .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

      expect(await resolver.deleteComment('43H')).toMatchObject(
        stringMock
      )
    });    
  });

  //test deleteCommentsByBlogId function
  describe('deleteCommentsByBlogId', () => {      
    it('should return a string', async () => {
      jest
        .spyOn(resolver, 'deleteCommentsByBlogId')
        .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

      expect(await resolver.deleteCommentsByBlogId('238346GDS3')).toMatchObject(
        stringMock
      )
    });    
  });
});

describe('BlogMediaResolver', () => {
  let resolver: BlogMediaResolver;
  let service: BlogService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogMediaResolver, BlogService, QueryBus, CommandBus],
    }).compile();

    await module.init();

    resolver = module.get<BlogMediaResolver>(BlogMediaResolver);
    service = module.get<BlogService>(BlogService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
  });

  //test mediaByBlogId function
  describe('mediaByBlogId', () => {    
    const arrayOfMedia = [BlogMediaMock];
    it('should return an array of all the media on a blog', async () => {
      jest
        .spyOn(resolver, 'mediaByBlogId')
        .mockImplementation((): Promise<BlogMedia[]> => Promise.resolve(arrayOfMedia));

      expect(await resolver.mediaByBlogId('H326E')).toEqual(
        expect.arrayContaining(arrayOfMedia)
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'mediaByBlogId').mockResolvedValue(null);
  
      expect(await resolver.mediaByBlogId('NULL')).toEqual(null);
    });
  });

  //test createMedia function

  describe('createMedia', () => {        
    it('should return a new media', async () => {
      jest
        .spyOn(resolver, 'createMedia')
        .mockImplementation((): Promise<BlogMedia> => Promise.resolve(BlogMediaMock));

      expect(await resolver.createMedia('H326E','image.png')).toMatchObject(
        BlogMediaMock
      )
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'createMedia').mockResolvedValue(null);
  
      expect(await resolver.createMedia('NULL','image.s')).toEqual(null);
    });
  });

});