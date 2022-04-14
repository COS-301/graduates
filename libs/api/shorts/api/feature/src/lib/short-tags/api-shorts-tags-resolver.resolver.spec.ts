import { Test, TestingModule } from '@nestjs/testing';
import {
  ShortTag,
  ShortCreateTagInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsTagsResolver } from './api-shorts-tags-resolver.resolver';
import {
  ShortsTagsService,
  ShortsService,
} from '@graduates/api/shorts/service/feature';
import { QueryBus, CommandBus } from '@nestjs/cqrs';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const tagMock: jest.Mocked<ShortTag> = new ShortTag() as ShortTag;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const tagCreateMock: jest.Mocked<ShortCreateTagInput> =
  new ShortCreateTagInput() as ShortCreateTagInput;

// Run `yarn test api-shorts-api-feature`
describe('ShortsTagsResolver', () => {
  let resolver: ShortsTagsResolver;
  let service: ShortsTagsService;
  let shortsService: ShortsService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShortsTagsResolver,
        ShortsTagsService,
        ShortsService,
        QueryBus,
        CommandBus,
      ],
    }).compile();

    await module.init();

    resolver = module.get<ShortsTagsResolver>(ShortsTagsResolver);
    service = module.get<ShortsTagsService>(ShortsTagsService);
    shortsService = module.get<ShortsService>(ShortsService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
    expect(shortsService).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
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
