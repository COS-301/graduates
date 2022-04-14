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

  //     expect(await resolver.createBlog(blogMock, [], '1')).toMatchObject(
  //       blogMock
  //     );
  //   });
  // });

});
