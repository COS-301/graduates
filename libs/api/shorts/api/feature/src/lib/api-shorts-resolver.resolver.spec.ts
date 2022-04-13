import { Test, TestingModule } from '@nestjs/testing';
import {
  Short,
  ShortTag,
  ShortCreateInput,
  ShortUpdateInput,
  ShortCreateTagInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { ShortsResolver } from './api-shorts-resolver.resolver';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortMock: jest.Mocked<Short> = new Short() as Short;

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

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const tagCreateMock: jest.Mocked<ShortCreateTagInput> =
  new ShortCreateTagInput() as ShortCreateTagInput;

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

  /**
   * Test the getAllTags method
   */
  describe('getAllTags', () => {
    const result = [tagMock];
    it('should return an array of ShortTags', async () => {
      jest
        .spyOn(resolver, 'getAllTags')
        .mockImplementation((): Promise<ShortTag[]> => Promise.resolve(result));

      expect(await resolver.getAllTags()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the getTagsByShortId method
   */
  describe('getTagsByShortId', () => {
    const result = [tagMock];
    it('should return an array of ShortTags', async () => {
      jest
        .spyOn(resolver, 'getTagsByShortId')
        .mockImplementation((): Promise<ShortTag[]> => Promise.resolve(result));

      expect(await resolver.getTagsByShortId('1')).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the createTag method
   */
  describe('createTag', () => {
    it('should return a ShortTag', async () => {
      jest
        .spyOn(resolver, 'createTag')
        .mockImplementation((): Promise<ShortTag> => Promise.resolve(tagMock));

      expect(await resolver.createTag(tagCreateMock)).toMatchObject(tagMock);
    });
  });

  /**
   * Test the updateTags method
   */
  describe('updateTags', () => {
    it('should return "success"', async () => {
      jest.spyOn(resolver, 'updateTags').mockResolvedValue('success');

      expect(await resolver.updateTags('tagName', 'newTag')).toEqual('success');
    });

    it('should return "No Tags Updated"', async () => {
      jest.spyOn(resolver, 'updateTags').mockResolvedValue('No Tags Updated');

      expect(await resolver.updateTags('tagName', 'newTag')).toEqual(
        'No Tags Updated'
      );
    });
  });

  /**
   * Test the updateTagByShortId method
   */
  describe('updateTagByShortId', () => {
    it('should return "success"', async () => {
      jest.spyOn(resolver, 'updateTagByShortId').mockResolvedValue('success');

      expect(
        await resolver.updateTagByShortId('1', 'tagName', 'newTag')
      ).toEqual('success');
    });

    it('should return "Tag not found"', async () => {
      jest
        .spyOn(resolver, 'updateTagByShortId')
        .mockResolvedValue('Tag not found');

      expect(
        await resolver.updateTagByShortId('1', 'tagName', 'newTag')
      ).toEqual('Tag not found');
    });
  });

  /**
   * Test the deleteTagsByTag method
   */
  describe('deleteTagsByTag', () => {
    it('should return "success"', async () => {
      jest.spyOn(resolver, 'deleteTagsByTag').mockResolvedValue('success');

      expect(await resolver.deleteTagsByTag('tagName')).toEqual('success');
    });

    it('should return "No Tags Deleted"', async () => {
      jest
        .spyOn(resolver, 'deleteTagsByTag')
        .mockResolvedValue('No Tags Deleted');

      expect(await resolver.deleteTagsByTag('tagName')).toEqual(
        'No Tags Deleted'
      );
    });
  });

  /**
   * Test the deleteAllTagsForShort method
   */
  describe('deleteAllTagsForShort', () => {
    it('should return "success"', async () => {
      jest
        .spyOn(resolver, 'deleteAllTagsForShort')
        .mockResolvedValue('success');

      expect(await resolver.deleteAllTagsForShort('1')).toEqual('success');
    });

    it('should return "No Tags Deleted"', async () => {
      jest
        .spyOn(resolver, 'deleteAllTagsForShort')
        .mockResolvedValue('No Tags Deleted');

      expect(await resolver.deleteAllTagsForShort('1')).toEqual(
        'No Tags Deleted'
      );
    });
  });

  /**
   * Test the deleteTag method
   */
  describe('deleteTag', () => {
    it('should return "success"', async () => {
      jest.spyOn(resolver, 'deleteTag').mockResolvedValue('success');

      expect(await resolver.deleteTag('1', 'tagText')).toEqual('success');
    });

    it('should return "Tag not found"', async () => {
      jest.spyOn(resolver, 'deleteTag').mockResolvedValue('Tag not found');

      expect(await resolver.deleteTag('1', 'tagText')).toEqual('Tag not found');
    });
  });
});
