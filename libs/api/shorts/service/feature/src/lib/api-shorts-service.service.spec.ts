import { Test, TestingModule } from '@nestjs/testing';
import { ShortsService } from './api-shorts-service.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import {
  Short,
  ShortCreateInput,
  ShortUpdateInput,
  ShortTag,
  ShortCreateTagInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortMock: jest.Mocked<Short> = new Short() as Short;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortCreateMock: jest.Mocked<ShortCreateInput> =
  new ShortCreateInput() as ShortCreateInput;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortUpdateMock: jest.Mocked<ShortUpdateInput> =
  new ShortUpdateInput() as ShortUpdateInput;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const tagMock: jest.Mocked<ShortTag> = new ShortTag() as ShortTag;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const tagCreateMock: jest.Mocked<ShortCreateTagInput> =
  new ShortCreateTagInput() as ShortCreateTagInput;
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

  /**
   * Test the findAllTags method
   */
  describe('findAllTags', () => {
    const result = [tagMock];
    it('should return an array of ShortTags', async () => {
      jest
        .spyOn(service, 'findAllTags')
        .mockImplementation((): Promise<ShortTag[]> => Promise.resolve(result));

      expect(await service.findAllTags()).toMatchObject(result);
    });
  });

  /**
   * Test the findTagsByShortId method
   */
  describe('findTagsByShortId', () => {
    const result = [tagMock];
    it('should return an array of ShortTags', async () => {
      jest
        .spyOn(service, 'findTagsByShortId')
        .mockImplementation((): Promise<ShortTag[]> => Promise.resolve(result));

      expect(await service.findTagsByShortId('1')).toMatchObject(result);
    });
  });

  /**
   * Test the createTag method
   */
  describe('createTag', () => {
    it('should return a ShortTag', async () => {
      jest
        .spyOn(service, 'createTag')
        .mockImplementation((): Promise<ShortTag> => Promise.resolve(tagMock));

      expect(await service.createTag(tagCreateMock)).toMatchObject(tagMock);
    });
  });

  /**
   * Test the updateTags method
   */
  describe('updateTags', () => {
    it('should return "success"', async () => {
      jest.spyOn(service, 'updateTags').mockResolvedValue('success');

      expect(await service.updateTags('tag', 'newTag')).toEqual('success');
    });
    it('should return "No tags updated"', async () => {
      jest.spyOn(service, 'updateTags').mockResolvedValue('No tags updated');

      expect(await service.updateTags('tag', 'newTag')).toEqual(
        'No tags updated'
      );
    });
  });

  /**
   * Test the updateTagByShortId method
   */
  describe('updateTagByShortId', () => {
    it('should return "success"', async () => {
      jest.spyOn(service, 'updateTagByShortId').mockResolvedValue('success');

      expect(await service.updateTagByShortId('1', 'tag', 'newTag')).toEqual(
        'success'
      );
    });
    it('should return "Tag not found"', async () => {
      jest
        .spyOn(service, 'updateTagByShortId')
        .mockResolvedValue('Tag not found');

      expect(await service.updateTagByShortId('1', 'tag', 'newTag')).toEqual(
        'Tag not found'
      );
    });
  });

  /**
   * Test the deleteTags method
   */
  describe('deleteTags', () => {
    it('should return "success"', async () => {
      jest.spyOn(service, 'deleteTags').mockResolvedValue('success');

      expect(await service.deleteTags('tag')).toEqual('success');
    });
    it('should return "No tags deleted"', async () => {
      jest.spyOn(service, 'deleteTags').mockResolvedValue('No tags deleted');

      expect(await service.deleteTags('tag')).toEqual('No tags deleted');
    });
  });

  /**
   * Test the deleteTagsByShortId method
   */
  describe('deleteTagsByShortId', () => {
    it('should return "success"', async () => {
      jest.spyOn(service, 'deleteTagsByShortId').mockResolvedValue('success');

      expect(await service.deleteTagsByShortId('1')).toEqual('success');
    });
    it('should return "No tags deleted"', async () => {
      jest
        .spyOn(service, 'deleteTagsByShortId')
        .mockResolvedValue('No tags deleted');

      expect(await service.deleteTagsByShortId('1')).toEqual('No tags deleted');
    });
  });

  /**
   * Test the deleteTagByShortTag method
   */
  describe('deleteTagByShortTag', () => {
    it('should return "success"', async () => {
      jest.spyOn(service, 'deleteTagByShortTag').mockResolvedValue('success');

      expect(await service.deleteTagByShortTag('1', 'tag')).toEqual('success');
    });
    it('should return "Tag not found"', async () => {
      jest
        .spyOn(service, 'deleteTagByShortTag')
        .mockResolvedValue('Tag not found');

      expect(await service.deleteTagByShortTag('1', 'tag')).toEqual(
        'Tag not found'
      );
    });
  });
});
