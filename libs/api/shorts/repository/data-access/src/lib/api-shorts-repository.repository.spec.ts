import { Test, TestingModule } from '@nestjs/testing';
import { ShortsRepository } from './api-shorts-repository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Short, ShortTag, ShortReport } from '@graduates/api/shorts/api/shared/entities/data-access';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');

const shortMock: jest.Mocked<Short> = new Short() as Short;
const shortTagMock: jest.Mocked<ShortTag> = new ShortTag() as ShortTag;
const shortReportMock: jest.Mocked<ShortReport> = new ShortReport() as ShortReport;

// Run `yarn test api-shorts-repository-data-access`
describe('ShortsRepository', () => {
  let repository: ShortsRepository;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortsRepository, PrismaService],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    repository = module.get<ShortsRepository>(ShortsRepository);
  });
  it('should be defined', () => {
    expect(prisma).toBeDefined();
    expect(repository).toBeDefined();
  });

  /**
   * Test the findAllShorts method
   */
  describe('findAll', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(repository, 'findAll')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await repository.findAll()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the findAllShortsPaged method
   */
  describe('findAllShortsPaged', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(repository, 'findAllShortsPaged')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await repository.findAllShortsPaged(0,2)).toEqual(
        expect.arrayContaining(result)
      );
    });
  });


  /**
   * Test the findById method
   */
  describe('findById', () => {
    it('should return a short', async () => {
      jest
        .spyOn(repository, 'findById')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await repository.findById('1')).toMatchObject(shortMock);
    });

    it('should return null', async () => {
      jest.spyOn(repository, 'findById').mockResolvedValue(null);

      expect(await repository.findById('1')).toEqual(null);
    });
  });

  /**
   * Test the findByUser method
   */
  describe('findByUser', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(repository, 'findByUser')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await repository.findByUser('1')).toMatchObject(shortMock);
    });
  });

  /**
   * Test the findByTag method
   */
  describe('findByTag', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(repository, 'findByTag')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await repository.findByTag('1')).toMatchObject(shortMock);
    });
  });

  /**
   * Test the findByTagPaged method
   */
  describe('findByTagPaged', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(repository, 'findByTagPaged')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await repository.findByTagPaged('1', 0, 2)).toMatchObject(shortMock);
    });
  });

  /**
   * Test the createShort method
   */
  describe('createShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(repository, 'createShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await repository.createShort(shortMock, '1')).toMatchObject(
        shortMock
      );
    });
  });

  /**
   * Test the updateShort method
   */
  describe('updateShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(repository, 'updateShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await repository.updateShort(shortMock)).toMatchObject(
        shortMock
      );
    });

    it('should return null', async () => {
      jest.spyOn(repository, 'updateShort').mockResolvedValue(null);

      expect(await repository.updateShort(shortMock)).toEqual(null);
    });
  });

  /**
   * Test the deleteShort method
   */
  describe('deleteShort', () => {
    it('should return a short', async () => {
      jest
        .spyOn(repository, 'deleteShort')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await repository.deleteShort('1')).toMatchObject(
        shortMock
      );
    });

    it('should return null', async () => {
      jest.spyOn(repository, 'deleteShort').mockResolvedValue(null);

      expect(await repository.deleteShort('1')).toEqual(null);
    });
  });

  /**
   * Test the findAllTags method
   */
  describe('findAllTags', () => {
    const result = [shortTagMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(repository, 'findAllTags')
        .mockImplementation((): Promise<ShortTag[]> => Promise.resolve(result));

      expect(await repository.findAllTags()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the findTagByShortId method
   */
   describe('findTagByShortId', () => {
    const result = [shortTagMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(repository, 'findTagByShortId')
        .mockImplementation((): Promise<ShortTag[]> => Promise.resolve(result));

      expect(await repository.findTagByShortId('1')).toMatchObject(shortTagMock);
    });
  });

  /**
   * Test the createTag method
   */
   describe('createTag', () => {
    it('should return a short tag', async () => {
      jest
        .spyOn(repository, 'createTag')
        .mockImplementation((): Promise<ShortTag> => Promise.resolve(shortTagMock));

      expect(await repository.createTag(shortTagMock)).toMatchObject(
        shortTagMock
      );
    });
  });

  /**
   * Test the updateTags method
   */
   describe('updateTags', () => {
    const result = 'success';
    it('should return success', async () => {
      
      jest
        .spyOn(repository, 'updateTags')
        .mockImplementation((): Promise<string> => Promise.resolve(result));

      expect(await repository.updateTags('1', '1')).toEqual(
        'success'
      );
    });

    it('should return no tags updated', async () => {
      jest.spyOn(repository, 'updateTags').mockResolvedValue('No tags updated');

      expect(await repository.updateTags('1', '1')).toEqual(
        'No tags updated'
      );
    });
  });

  /**
   * Test the updateTagByShort method
   */
   describe('updateTagByShort', () => {
    it('should return a short tag', async () => {
      
      jest
        .spyOn(repository, 'updateTagByShort')
        .mockImplementation((): Promise<ShortTag> => Promise.resolve(shortTagMock));

      expect(await repository.updateTagByShort('1', '1', '1')).toMatchObject(
        shortTagMock
      );
    });
  });

  /**
   * Test the deleteTags method
   */
   describe('deleteTags', () => {
    const result = 'success';
    it('should return success', async () => {
      jest
        .spyOn(repository, 'deleteTags')
        .mockImplementation((): Promise<string> => Promise.resolve(result));

      expect(await repository.deleteTags('1')).toEqual(
        'success'
      );
    });

    it('should return no tags deleted', async () => {
      jest.spyOn(repository, 'deleteTags').mockResolvedValue('No tags deleted');

      expect(await repository.deleteTags('1')).toEqual('No tags deleted');
    });
  });

  /**
   * Test the deleteTagsByShortId method
   */
   describe('deleteTagsByShortId', () => {
    const result = 'success';
    it('should return success', async () => {
      jest
        .spyOn(repository, 'deleteTagsByShortId')
        .mockImplementation((): Promise<string> => Promise.resolve(result));

      expect(await repository.deleteTagsByShortId('1')).toEqual(
        'success'
      );
    });

    it('should return no tags deleted', async () => {
      jest.spyOn(repository, 'deleteTagsByShortId').mockResolvedValue('No tags deleted');

      expect(await repository.deleteTagsByShortId('1')).toEqual('No tags deleted');
    });
  });

  /**
   * Test the deleteTagByShortTag method
   */
   describe('deleteTagByShortTag', () => {
    it('should return a short tag', async () => {
      jest
        .spyOn(repository, 'deleteTagByShortTag')
        .mockImplementation((): Promise<ShortTag> => Promise.resolve(shortTagMock));

      expect(await repository.deleteTagByShortTag('1', '1')).toMatchObject(
        shortTagMock
      );
    });
  });

  /**
   * Test the getAllReports method
   */
   describe('getAllReports', () => {
    const result = [shortReportMock];
    it('should return an array of short reports', async () => {
      jest
        .spyOn(repository, 'getAllReports')
        .mockImplementation((): Promise<ShortReport[]> => Promise.resolve(result));

      expect(await repository.getAllReports()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the getReport method
   */
   describe('getReport', () => {
    const result = shortReportMock;
    it('should return an array of short reports', async () => {
      jest
        .spyOn(repository, 'getReport')
        .mockImplementation((): Promise<ShortReport> => Promise.resolve(result));

      expect(await repository.getReport('1','1')).toMatchObject(
        result
      );
    });

    it('should return null', async () => {
      jest.spyOn(repository, 'getReport').mockResolvedValue(null);

      expect(await repository.getReport('1','1')).toEqual(null);
    });
  });

  /**
   * Test the getReportsByUser method
   */
   describe('getReportsByUser', () => {
    const result = [shortReportMock];
    it('should return an array of short reports', async () => {
      jest
        .spyOn(repository, 'getReportsByUser')
        .mockImplementation((): Promise<ShortReport[]> => Promise.resolve(result));

      expect(await repository.getReportsByUser('1')).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the getReportsForShort method
   */
   describe('getReportsForShort', () => {
    const result = [shortReportMock];
    it('should return an array of short reports', async () => {
      jest
        .spyOn(repository, 'getReportsForShort')
        .mockImplementation((): Promise<ShortReport[]> => Promise.resolve(result));

      expect(await repository.getReportsForShort('1')).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the reportShort method
   */
   describe('reportShort', () => {
    it('should return a short report', async () => {
      jest
        .spyOn(repository, 'reportShort')
        .mockImplementation((): Promise<ShortReport> => Promise.resolve(shortReportMock));

      expect(await repository.reportShort(shortReportMock, '1')).toMatchObject(
        shortReportMock
      );
    });
  });

  /**
   * Test the deleteReport method
   */
   describe('deleteReport', () => {
    it('should return a short', async () => {
      jest
        .spyOn(repository, 'deleteReport')
        .mockImplementation((): Promise<ShortReport> => Promise.resolve(shortReportMock));

      expect(await repository.deleteReport('1', '1')).toMatchObject(
        shortReportMock
      );
    });
  });
});
