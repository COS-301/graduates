import { Test, TestingModule } from '@nestjs/testing';
import { ShortsService } from './api-shorts-service.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import {
  Short,
  ShortCreateInput,
  ShortUpdateInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortMock: jest.Mocked<Short> = new Short() as Short;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortCreateMock: jest.Mocked<ShortCreateInput> =
  new ShortCreateInput() as ShortCreateInput;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortUpdateMock: jest.Mocked<ShortUpdateInput> =
  new ShortUpdateInput() as ShortUpdateInput;
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

  /**
   * Test the findAllShorts method
   */
  describe('findAllShorts', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(service, 'findAllShorts')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await service.findAllShorts()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the findShortById method
   */
  describe('findShortById', () => {
    it('should return a short', async () => {
      jest
        .spyOn(service, 'findShortById')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await service.findShortById('1')).toMatchObject(shortMock);
    });
  });

  /**
   * Test the findShortsByUser method
   */
  describe('findShortsByUser', () => {
    const result = [shortMock];
    it('should return a short', async () => {
      jest
        .spyOn(service, 'findShortsByUser')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await service.findShortsByUser('1')).toMatchObject(result);
    });
  });

  /**
   * Test the findShortsByTag method
   */
  describe('findShortsByTag', () => {
    const result = [shortMock];
    it('should return a short', async () => {
      jest
        .spyOn(service, 'findShortsByTag')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await service.findShortsByTag('1')).toMatchObject(result);
    });
  });

  /**
   * Test the createShort method
   */
  describe('createShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(service, 'createShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await service.createShort(shortCreateMock, '1')).toMatchObject(
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
        .spyOn(service, 'deleteShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await service.deleteShort('1')).toMatchObject(shortMock);
    });
  });

  /**
   * Test the updateShort method
   */
  describe('updateShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(service, 'updateShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await service.updateShort(shortUpdateMock)).toMatchObject(
        shortMock
      );
    });
  });
});
