import { Test, TestingModule } from '@nestjs/testing';
import { ShortsService } from './ApiShortsService.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';

// Run `yarn test api-shorts-service-feature` to execute the unit tests
describe('ShortsService', () => {
  let service: ShortsService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortsService, QueryBus, CommandBus],
    }).compile();

    await module.init();

    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
    service = module.get<ShortsService>(ShortsService);
  });
  it('should be defined', () => {
    expect(commandBus).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(service).toBeDefined();
  });

  // describe('find all', () => {
  //   it('should return an array of shorts', async () => {
  //     expect(Array.isArray(await service.findAllShorts())).toBe(true);
  //   });
  // });

  // describe('find by id', () => {
  //   it('should return a short', async () => {
  //     const res = await service.findShortById('1');

  //     expect(res).toMatchObject(Short);
  //   });
  // });
});
