import { Test, TestingModule } from '@nestjs/testing';
import {
  Short,
  ShortTag,
  ShortCreateInput,
  ShortUpdateInput,
  ShortReport,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { ShortsResolver } from './api-shorts-resolver.resolver';
import {
  ShortsService,
  ShortsTagsService,
  ShortsReportsService,
} from '@graduates/api/shorts/service/feature';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortMock: jest.Mocked<Short> = new Short() as Short;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const reportsMock: jest.Mocked<ShortReport> = new ShortReport() as ShortReport;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortInputMock: jest.Mocked<ShortCreateInput> =
  new ShortCreateInput() as ShortCreateInput;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortUpdateMock: jest.Mocked<ShortUpdateInput> =
  new ShortUpdateInput() as ShortUpdateInput;

jest.mock('@graduates/api/authentication/api/shared/interfaces/data-access');
const userMock: jest.Mocked<User> = new User() as User;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const tagMock: jest.Mocked<ShortTag> = new ShortTag() as ShortTag;

// Run `yarn test api-shorts-api-feature`
describe('ShortsResolver', () => {
  let resolver: ShortsResolver;
  let service: ShortsService;
  let tagsService: ShortsTagsService;
  let reportsService: ShortsReportsService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShortsResolver,
        ShortsService,
        ShortsTagsService,
        ShortsReportsService,
        QueryBus,
        CommandBus,
      ],
    }).compile();

    await module.init();

    resolver = module.get<ShortsResolver>(ShortsResolver);
    service = module.get<ShortsService>(ShortsService);
    tagsService = module.get<ShortsTagsService>(ShortsTagsService);
    reportsService = module.get<ShortsReportsService>(ShortsReportsService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
    expect(tagsService).toBeDefined();
    expect(reportsService).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
  });

  /**
   * Test the user field resolver method
   */
  describe('user', () => {
    it('should return a user', async () => {
      jest
        .spyOn(resolver, 'user')
        .mockImplementation((): Promise<User> => Promise.resolve(userMock));

      expect(await resolver.user(shortMock)).toMatchObject(userMock);
    });
  });

  /**
   * Test the shortTag field resolver method
   */
  describe('shortTag', () => {
    const result = [tagMock];

    it('should return an array of shortTags', async () => {
      jest
        .spyOn(resolver, 'shortTag')
        .mockImplementation((): Promise<ShortTag[]> => Promise.resolve(result));

      expect(await resolver.shortTag(shortMock)).toMatchObject(result);
    });
  });

  /**
   * Test the shortReport field resolver method
   */
  describe('shortReport', () => {
    const result = [reportsMock];

    it('should return an array of shortTags', async () => {
      jest
        .spyOn(resolver, 'shortReport')
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

      expect(await resolver.shortReport(shortMock)).toMatchObject(result);
    });
  });

  /**
   * Test the getAllShorts method
   */
  describe('getAllShorts', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(resolver, 'getAllShorts')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await resolver.getAllShorts()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the getShortById method
   */
  describe('getShortById', () => {
    it('should throw an exception', async () => {
      jest
        .spyOn(resolver, 'getShortById')
        .mockRejectedValue(new NotFoundException('Short not found'));

      await expect(resolver.getShortById('0')).rejects.toThrow();
    });

    it('should return a short', async () => {
      jest
        .spyOn(resolver, 'getShortById')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.getShortById('1')).toMatchObject(shortMock);
    });
  });

  /**
   * Test the getShortsByUser method
   */
  describe('getShortsByUser', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(resolver, 'getShortsByUser')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await resolver.getShortsByUser('1')).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the getShortsByTag method
   */
  describe('getShortsByTag', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(resolver, 'getShortsByTag')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await resolver.getShortsByTag('1')).toEqual(
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

      expect(await resolver.createShort(shortInputMock, '1')).toMatchObject(
        shortMock
      );
    });
  });

  /**
   * Test the deleteShort method
   */
  describe('deleteShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(resolver, 'deleteShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.deleteShort('1')).toMatchObject(shortMock);
    });
  });

  /**
   * Test the updateShort method
   */
  describe('updateShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(resolver, 'updateShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.updateShort(shortUpdateMock)).toMatchObject(
        shortMock
      );
    });
  });
});
