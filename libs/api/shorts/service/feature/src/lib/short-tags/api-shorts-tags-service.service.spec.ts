import { Test, TestingModule } from '@nestjs/testing';
import { ShortsTagsService } from './api-shorts-tags-service.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import {
  ShortTag,
  ShortCreateTagInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const tagMock: jest.Mocked<ShortTag> = new ShortTag() as ShortTag;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const tagCreateMock: jest.Mocked<ShortCreateTagInput> =
  new ShortCreateTagInput() as ShortCreateTagInput;
// Run `yarn test api-shorts-service-feature` to execute the unit tests
describe('ShortsService', () => {
  let service: ShortsTagsService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortsTagsService, QueryBus, CommandBus],
    }).compile();

    await module.init();

    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
    service = module.get<ShortsTagsService>(ShortsTagsService);
  });
  it('should be defined', () => {
    expect(commandBus).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(service).toBeDefined();
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

      expect(await service.findAllTags()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the findTagsByShortId method
   */
  describe('findTagsByShortId', () => {
    const result = [tagMock];

    it('should return a short', async () => {
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
    it('should return a short', async () => {
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

      expect(await service.updateTags('tagName', 'newTag')).toEqual('success');
    });

    it('should return "No Tags Updated"', async () => {
      jest.spyOn(service, 'updateTags').mockResolvedValue('No Tags Updated');

      expect(await service.updateTags('tagName', 'newTag')).toEqual(
        'No Tags Updated'
      );
    });
  });

  /**
   * Test the updateTagByShortId method
   */
  describe('updateTagByShortId', () => {
    it('should return a ShortTag', async () => {
      jest
        .spyOn(service, 'updateTagByShortId')
        .mockImplementation((): Promise<ShortTag> => Promise.resolve(tagMock));

      expect(
        await service.updateTagByShortId('1', 'tagName', 'newTag')
      ).toMatchObject(tagMock);
    });
  });

  /**
   * Test the deleteTags method
   */
  describe('deleteTags', () => {
    it('should return "success"', async () => {
      jest.spyOn(service, 'deleteTags').mockResolvedValue('success');

      expect(await service.deleteTags('tagName')).toEqual('success');
    });

    it('should return "No Tags Deleted"', async () => {
      jest.spyOn(service, 'deleteTags').mockResolvedValue('No Tags Deleted');

      expect(await service.deleteTags('tagName')).toEqual('No Tags Deleted');
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

    it('should return "No Tags Deleted"', async () => {
      jest
        .spyOn(service, 'deleteTagsByShortId')
        .mockResolvedValue('No Tags Deleted');

      expect(await service.deleteTagsByShortId('1')).toEqual('No Tags Deleted');
    });
  });

  /**
   * Test the deleteTagByShortTag method
   */
  describe('deleteTagByShortTag', () => {
    it('should return a ShortTag', async () => {
      jest
        .spyOn(service, 'deleteTagByShortTag')
        .mockImplementation((): Promise<ShortTag> => Promise.resolve(tagMock));

      expect(await service.deleteTagByShortTag('1', 'tagText')).toMatchObject(
        tagMock
      );
    });
  });
});
