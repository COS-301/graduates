import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from './api-blog-service.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import {Blog, BlogComment, BlogMedia } from '@graduates/api/blog/api/shared/entities/data-access';
import {ApiBlogServiceFeatureModuleModule} from './api-blog-service-feature-module.module';

jest.mock('@graduates/api/blog/api/shared/entities/data-access');
const blogMock: jest.Mocked<Blog> = new Blog() as Blog;

jest.mock('@graduates/api/blog/api/shared/entities/data-access');
const BlogCommentMock: jest.Mocked<BlogComment> = new BlogComment() as BlogComment;

jest.mock('@graduates/api/blog/api/shared/entities/data-access');
const stringMock: jest.Mocked<string> = new String() as string;

jest.mock('@graduates/api/blog/api/shared/entities/data-access');
const BlogMediaMock: jest.Mocked<BlogMedia> = new BlogMedia() as BlogMedia;
// Run `yarn test api-blog-service-feature` to execute the unit tests
describe('BlogService', () => {
  let service: BlogService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogService, QueryBus, CommandBus],
    }).compile();

    await module.init();

    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
    service = module.get<BlogService>(BlogService);
  });
  it('should be defined', () => {
    expect(commandBus).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(service).toBeDefined();
  });

  //Test createBlog function
  describe('createBlog', () =>{
    it('Should return a blog',async () => {
      jest
      .spyOn(service, 'createBlog')
      .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));
    
    expect(await service.createBlog('Title','Contents - this is a test',true,'1')).toMatchObject(
      blogMock
    )
    });
    it('should return null', async () => {
      jest.spyOn(service, 'createBlog').mockResolvedValue(null);

      expect(await service.createBlog('Title','Contents - this is a test',true,'NULL')).toEqual(null);
    });
  })

  //Test updateBlogTitle function

  describe('updateBlogTitle', () => {
    it('Should return a updated Blog Title',async () => {
      jest
      .spyOn(service, 'updateBlogTitle')
      .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

      expect(await service.updateBlogTitle('1','New Title')).toMatchObject(
        blogMock
      )
    })
  })

 //Test updateBlogContent function
 describe('updateBlogContent', () => {
  it('Should return a updated Blog Content',async () => {
    jest
    .spyOn(service, 'updateBlogContent')
    .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

    expect(await service.updateBlogContent('1','New content')).toMatchObject(
      blogMock
    )
  });
  it('should return null', async () => {
    jest.spyOn(service, 'updateBlogContent').mockResolvedValue(null);

    expect(await service.updateBlogContent('NULL','New content')).toEqual(null);
  });
})
 //Test updateBlogArchived function
 describe('updateBlogArchived', () => {
  it('Should return a updated Blog Archive',async () => {
    jest
    .spyOn(service, 'updateBlogArchived')
    .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

    expect(await service.updateBlogArchived('1',false)).toMatchObject(
      blogMock
    )
  });
  it('should return null', async () => {
    jest.spyOn(service, 'updateBlogArchived').mockResolvedValue(null);

    expect(await service.updateBlogArchived('NULL',false)).toEqual(null);
  });
})

 //Test deleteBlog function
 describe('deleteBlog', () => {
  it('Should return a deleted Blog',async () => {
    jest
    .spyOn(service, 'deleteBlog')
    .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

    expect(await service.deleteBlog('1')).toMatchObject(
      blogMock
    )
  })
})
 //Test createComment function
 describe('createComment', () => {
  it('Should return a new comment',async () => {
    jest
    .spyOn(service, 'createComment')
    .mockImplementation((): Promise<BlogComment> => Promise.resolve(BlogCommentMock));

    expect(await service.createComment('2A4','38GB23J','This is a new Comment')).toMatchObject(
      BlogCommentMock
    )
  });
  it('should return null', async () => {
    jest.spyOn(service, 'createComment').mockResolvedValue(null);

    expect(await service.createComment('NULL','NULL','This is a new Comment')).toEqual(null);
  });
})

 //Test updateComment function
 describe('updateComment', () => {
  it('Should return a string either succesfull or unsuccesfull',async () => {
    jest
    .spyOn(service, 'updateComment')
    .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

    expect(await service.updateComment('1','This is a new Comment - updated')).toEqual(
      stringMock
    )
  })
})

 //Test deleteComment function
 describe('deleteComment', () => {
  it('Should return a string either succesfull or unsuccesfullt',async () => {
    jest
    .spyOn(service, 'deleteComment')
    .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

    expect(await service.deleteComment('1')).toEqual(
      stringMock
    )
  })
})

 //Test deleteCommentsByBlogId function
 describe('deleteCommentsByBlogId', () => {
  it('Should return a string either succesfull or unsuccesfull',async () => {
    jest
    .spyOn(service, 'deleteCommentsByBlogId')
    .mockImplementation((): Promise<string> => Promise.resolve(stringMock));

    expect(await service.deleteCommentsByBlogId('2A4')).toEqual(
      stringMock
    )
  })
})

 //Test createMedia function
 describe('createMedia', () => {
  it('Should return a new media',async () => {
    jest
    .spyOn(service, 'createMedia')
    .mockImplementation((): Promise<BlogMedia> => Promise.resolve(BlogMediaMock));

    expect(await service.createMedia('2A4','asd3.png')).toMatchObject(
      stringMock
    )
  });
  it('should return null', async () => {
    jest.spyOn(service, 'createMedia').mockResolvedValue(null);

    expect(await service.createMedia('NULL','asd3.pSng')).toEqual(null);
  });
})
 //Test updateBlogMedia function
//  describe('updateBlogMedia', () => {
//   it('Should return a new updated media',async () => {
//     jest
//     .spyOn(service, 'updateBlogMedia')
//     .mockImplementation((): Promise<BlogMedia | null> => Promise.resolve(BlogMediaMock));

//     expect(await service.updateBlogMedia('2A4','asd34.png')).toMatchObject(
//       stringMock
//     )
//   })
// })

//Now for the query function tests 
//============================================

 //Test getBlogById function
 describe('getBlogById', () => {
  it('Should return a blog by the ID',async () => {
    jest
    .spyOn(service, 'getBlogById')
    .mockImplementation((): Promise<Blog> => Promise.resolve(blogMock));

    expect(await service.getBlogById('2A4')).toMatchObject(
      blogMock
    )
  });
  it('should return null', async () => {
    jest.spyOn(service, 'getBlogById').mockResolvedValue(null);

    expect(await service.getBlogById('NULL')).toEqual(null);
  });
})
 //Test getAllBlogs function
 describe('getAllBlogs', () => {
   const arrayOfBlog = [blogMock];
  it('Should return a array of the blogs',async () => {
    jest
    .spyOn(service, 'getAllBlogs')
    .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlog));

    expect(await service.getAllBlogs()).toEqual(expect.arrayContaining(arrayOfBlog));
  })
})

 //Test getAllArchivedBlogs function
 describe('getAllArchivedBlogs', () => {
  const arrayOfBlog = [blogMock];
 it('Should return a array of all the archived blogs',async () => {
   jest
   .spyOn(service, 'getAllArchivedBlogs')
   .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlog));

   expect(await service.getAllArchivedBlogs()).toEqual(expect.arrayContaining(arrayOfBlog));
 })
})

 //Test getBlogByUserId function
 describe('getBlogByUserId', () => {
  const arrayOfBlog = [blogMock];
 it('Should return a array of blogs posted by usedID',async () => {
   jest
   .spyOn(service, 'getBlogByUserId')
   .mockImplementation((): Promise<Blog[]> => Promise.resolve(arrayOfBlog));

   expect(await service.getBlogByUserId('1')).toEqual(expect.arrayContaining(arrayOfBlog));
 })
})

 //Test getAllComments function
 describe('getAllComments', () => {
  const arrayOfComment = [BlogCommentMock];
 it('Should return a array of all the comments',async () => {
   jest
   .spyOn(service, 'getAllComments')
   .mockImplementation((): Promise<BlogComment[]> => Promise.resolve(arrayOfComment));

   expect(await service.getAllComments()).toEqual(expect.arrayContaining(arrayOfComment));
 })
})

 //Test getCommentsByBlogId function
 describe('getCommentsByBlogId', () => {
  const arrayOfComment = [BlogCommentMock];
 it('Should return a array of all the comments on a blog',async () => {
   jest
   .spyOn(service, 'getCommentsByBlogId')
   .mockImplementation((): Promise<BlogComment[]> => Promise.resolve(arrayOfComment));

   expect(await service.getCommentsByBlogId('43A')).toEqual(expect.arrayContaining(arrayOfComment));
 })
})

 //Test getCommentByCommentId function
 describe('getCommentByCommentId', () => {  
 it('Should return a array of all the comments by commentID',async () => {
   jest
   .spyOn(service, 'getCommentByCommentId')
   .mockImplementation((): Promise<BlogComment> => Promise.resolve(BlogCommentMock));

   expect(await service.getCommentByCommentId('6')).toMatchObject(
     BlogCommentMock
   )
 })
})

 //Test getMediaByBlogId function
 describe('getMediaByBlogId', () => {
  const arrayOfMedia = [BlogMediaMock];
 it('Should return a array of all the media on a blog',async () => {
   jest
   .spyOn(service, 'getMediaByBlogId')
   .mockImplementation((): Promise<BlogMedia[]> => Promise.resolve(arrayOfMedia));

   expect(await service.getMediaByBlogId('6')).toEqual(expect.arrayContaining(arrayOfMedia));
 })
})

});
