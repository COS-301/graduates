import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from './api-blog-service.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { Blog } from '@graduates/api/blog/api/shared/entities/data-access';

jest.mock('@graduates/api/blog/api/shared/entities/data-access');

const blogMock: jest.Mocked<Blog> = new Blog() as Blog;

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

  
});
