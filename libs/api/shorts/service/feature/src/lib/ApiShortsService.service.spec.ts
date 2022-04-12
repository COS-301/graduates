import { Test, TestingModule } from '@nestjs/testing';
import { ShortsService } from './ApiShortsService.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';

// Run `nx test api-shorts-service-feature` to execute the unit tests
describe('ShortsService', () => {
  let service: ShortsService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortsService, QueryBus, CommandBus],
    }).compile();

    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
    service = module.get<ShortsService>(ShortsService);
  });
  it('should be defined', () => {
    expect(commandBus).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('find all', () => {
    it('should return an array of shorts', async () => {
      const res = await service.findAllShorts();

      expect(Array.isArray(res)).toBe(true);
    });
  });
});
