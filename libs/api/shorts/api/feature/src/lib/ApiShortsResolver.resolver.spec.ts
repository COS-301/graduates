import { Test, TestingModule } from '@nestjs/testing';
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsResolver } from './ApiShortsResolver.resolver';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { QueryBus, CommandBus } from '@nestjs/cqrs';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');

const shortMock: jest.Mocked<Short> = new Short() as Short;
// Run `yarn test api-shorts-api-feature`
describe('ShortsResolver', () => {
  let resolver: ShortsResolver;
  let service: ShortsService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortsResolver, ShortsService, QueryBus, CommandBus],
    }).compile();

    await module.init();

    resolver = module.get<ShortsResolver>(ShortsResolver);
    service = module.get<ShortsService>(ShortsService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
  });

  describe('findAllShorts', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(resolver, 'findAllShorts')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await resolver.findAllShorts()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  describe('findShortById', () => {
    it('should return a short', async () => {
      jest
        .spyOn(resolver, 'findShortById')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.findShortById('1')).toMatchObject(shortMock);
    });
  });

  describe('findShortsByUser', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(resolver, 'findShortsByUser')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await resolver.findShortsByUser('1')).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  describe('findShortsByTag', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(resolver, 'findShortsByTag')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await resolver.findShortsByTag('1')).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  describe('createShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(resolver, 'createShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.createShort(shortMock, '1')).toMatchObject(
        shortMock
      );
    });
  });
});
