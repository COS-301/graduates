import { Test, TestingModule } from '@nestjs/testing';
import { Blog } from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogResolver } from './api-blog-resolver.resolver';
import { BlogService } from '@graduates/api/blog/service/feature';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';

jest.mock('@graduates/api/blog/api/shared/entities/data-access');
const blogMock: jest.Mocked<Blog> = new Blog() as Blog;
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

  
  // describe('createBlog', () => {
  //   it('should return a blog', async () => {
  //     jest
  //       .spyOn(resolver, 'createBlog')
  //       .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

<<<<<<< HEAD
  //     expect(await resolver.createBlog(blogMock, [], '1')).toMatchObject(
  //       blogMock
  //     );
  //   });
  // });
=======
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
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef

});
