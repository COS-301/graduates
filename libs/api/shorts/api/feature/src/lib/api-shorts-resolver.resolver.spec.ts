import { Test, TestingModule } from '@nestjs/testing';
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsResolver } from './api-shorts-resolver.resolver';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';

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

  /**
   * Test the findAllShorts method
   */
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

  /**
   * Test the findShortById method
   */
  describe('findShortById', () => {
    it('should throw an exception', async () => {
      jest
        .spyOn(resolver, 'findShortById')
        .mockRejectedValue(new NotFoundException('Short not found'));

      await expect(resolver.findShortById('0')).rejects.toThrow();
    });

    it('should return a short', async () => {
      jest
        .spyOn(resolver, 'findShortById')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.findShortById('1')).toMatchObject(shortMock);
    });
  });

  /**
   * Test the findShortsByUser method
   */
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

  /**
   * Test the findShortsByTag method
   */
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

  /**
   * Test the createShort method
   */
  describe('createShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(resolver, 'createShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.createShort(shortMock, [], '1')).toMatchObject(
        shortMock
      );
    });
  });

  /**
   * Test the user method
   */
  describe('user', () => {
    it('should return a short', async () => {
      jest
        .spyOn(resolver, 'user')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.user(shortMock)).toMatchObject(shortMock);
    });
  });
});
