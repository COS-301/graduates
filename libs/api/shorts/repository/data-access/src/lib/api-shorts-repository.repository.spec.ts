import { Test, TestingModule } from '@nestjs/testing';
import { ShortsRepository } from './api-shorts-repository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import {
  Short,
  ShortTag,
  ShortReport,
  ShortCreateInput,
  ShortUpdateInput,
  ShortTagInput,
  ShortReportInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import * as PrismaNS from '@prisma/client';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');

const shortMock: jest.Mocked<Short> = new Short() as Short;
const shortTagMock: jest.Mocked<ShortTag> = new ShortTag() as ShortTag;
const shortReportMock: jest.Mocked<ShortReport> =
  new ShortReport() as ShortReport;

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

      expect(await repository.findAllShortsPaged(0, 2)).toEqual(
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

      expect(await repository.findByTagPaged('1', 0, 2)).toMatchObject(
        shortMock
      );
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

      expect(
        await repository.createShort(shortMock, '1', '', '')
      ).toMatchObject(shortMock);
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

      expect(await repository.updateShort(shortMock)).toMatchObject(shortMock);
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

      expect(await repository.deleteShort('1')).toMatchObject(shortMock);
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

      expect(await repository.findTagByShortId('1')).toMatchObject(
        shortTagMock
      );
    });
  });

  /**
   * Test the createTag method
   */
  describe('createTag', () => {
    it('should return a short tag', async () => {
      jest
        .spyOn(repository, 'createTag')
        .mockImplementation(
          (): Promise<ShortTag> => Promise.resolve(shortTagMock)
        );

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

      expect(await repository.updateTags('1', '1')).toEqual('success');
    });

    it('should return no tags updated', async () => {
      jest.spyOn(repository, 'updateTags').mockResolvedValue('No tags updated');

      expect(await repository.updateTags('1', '1')).toEqual('No tags updated');
    });
  });

  /**
   * Test the updateTagByShort method
   */
  describe('updateTagByShort', () => {
    it('should return a short tag', async () => {
      jest
        .spyOn(repository, 'updateTagByShort')
        .mockImplementation(
          (): Promise<ShortTag> => Promise.resolve(shortTagMock)
        );

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

      expect(await repository.deleteTags('1')).toEqual('success');
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

      expect(await repository.deleteTagsByShortId('1')).toEqual('success');
    });

    it('should return no tags deleted', async () => {
      jest
        .spyOn(repository, 'deleteTagsByShortId')
        .mockResolvedValue('No tags deleted');

      expect(await repository.deleteTagsByShortId('1')).toEqual(
        'No tags deleted'
      );
    });
  });

  /**
   * Test the deleteTagByShortTag method
   */
  describe('deleteTagByShortTag', () => {
    it('should return a short tag', async () => {
      jest
        .spyOn(repository, 'deleteTagByShortTag')
        .mockImplementation(
          (): Promise<ShortTag> => Promise.resolve(shortTagMock)
        );

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
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

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
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(result)
        );

      expect(await repository.getReport('1', '1')).toMatchObject(result);
    });

    it('should return null', async () => {
      jest.spyOn(repository, 'getReport').mockResolvedValue(null);

      expect(await repository.getReport('1', '1')).toEqual(null);
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
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

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
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

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
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(shortReportMock)
        );

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
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(shortReportMock)
        );

      expect(await repository.deleteReport('1', '1')).toMatchObject(
        shortReportMock
      );
    });
  });
});

//! TODO Uncomment once DB and API are ready in CI/CD or Deployment Environment
describe('DB Integration Tests', () => {
  /*
  let repository: ShortsRepository;
  let prisma: PrismaService;  


  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortsRepository, PrismaService],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    repository = module.get<ShortsRepository>(ShortsRepository);

  });

  it('should ensure prisma and repository modules are defined', () => {
    expect(prisma).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe("createShort", () => {
    it("should return a short", async () => {

      
    const testUserInput: PrismaNS.User = {
      id: "TestUser",
      name: "John Testerson the Unique Test Guy",
      email: "tester@example.test",
      password: "",
      passwordSalt: "",
      created: new Date(),
      dateOfBirth: new Date(),
      companyId: null,
      suspended: false,
      validated: false,
    }
    const testUser = await prisma.user.create({ data: testUserInput});
    
    const shortTagIn: ShortTagInput = {
      tag: "#TestTag",
    };


      const createInput: ShortCreateInput = {
        description: "Test Create Description",
        link: "TestUpdateLink.test/test.mp4",
        thumbnail: "",
        shortTag: [shortTagIn],
        archived: false,
      }
      const result = await repository.createShort(createInput,testUser.id);
      expect(result).toMatchObject(new Short());
    });
  });

  describe('updateShort', () => {
    it('should return a short', async () => {

      const shorts = await repository.findByUser('TestUser');
      const updateInput: ShortUpdateInput = {
        id: shorts[0].id,
        description: "Test Update Description",
        link: "TestUpdateLink.test/test.mp4",
        thumbnail: "",
        archived: false
      }

      const result = await repository.updateShort(updateInput);
      expect(result).toMatchObject(new Short());
    });
  });

  describe("findAll", () => {
    it("should return an array", async () => {
      const result = await repository.findAll();
      if (result.length > 0) {
        expect.arrayContaining(result);
      }
      else {
        expect(result).toMatchObject([]);
      }
    });
  });

  describe('findAllShortsPaged', () => {
    it('should return an array', async () => {
      const result = await repository.findAllShortsPaged(0, 10);
      if (result.length > 0) {
        expect.arrayContaining(result);
      }
      else {
        expect(result).toMatchObject([]);
      }
    });
  });

  describe("findUserById", () => {
    it("should return a user or null", async () => {
      const result = await repository.findUserById("TestUser");
      if (result !== null) {
        expect(result).toMatchObject(new User());
      }
      else {
        expect(result).toBeNull();
      }
    });
  });

  describe('findByUser', () => {

    it('should return an array', async () => {
      const result = await repository.findByUser('TestUser');
      if (result.length > 0) {
        expect.arrayContaining(result);
      }
      else {
        expect(result).toMatchObject([]);
      }
    });
  });

  describe('findByTag', () => {
      it('should return array', async () => {
        const result = await repository.findByTag('TagIdTest');
        if (result.length > 0) {
          expect.arrayContaining(result);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    describe('findByTagPaged', () => {
      it('should return array', async () => {
        const result = await repository.findByTagPaged("TagIdTest", 1, 10);
        if (result.length > 0) {
          expect.arrayContaining(result);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });
    describe("findAllTags", () => {
      it("should return an array", async () => {
        const result = await repository.findAllTags();
        if (result.length > 0) {
          expect.arrayContaining(result);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    describe("findTagByShortId", () => {
      it("should return an array", async () => {
        const short = await repository.findByUser('TestUser');
        const result = await repository.findTagByShortId(short[0].id);
        if (result.length > 0) {
          expect.arrayContaining(result);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    describe("findById", () => {
      it("should return a short", async () => {
        const short = await repository.findByUser('TestUser');
        const result = await repository.findById(short[0].id);
        if (result !== null) {
          expect(result).toMatchObject(new Short());
        }
        else {
          expect(result).toBeNull();
        }
      });
    });

    describe("reportShort", () => {
      it("should return a short", async () => {
        const shortTest = await repository.findByUser("TestUser");
        const reportInput: ShortReportInput = {
          shortId: shortTest[0].id,
          reason: "Test Reason",
        }
        const result = await repository.reportShort(reportInput, "TestUser");
        expect(result).toMatchObject(new ShortReport());
      });
    });
        
    describe("getReport", () => {
      it("should return a report", async () => {
        const shorts = await repository.findByUser("TestUser");
        const result = await repository.getReport("TestUser", shorts[0].id);
        if (result !== null) {
          expect(result).toMatchObject(new ShortReport());
        }
        else {
          expect(result).toBeNull();
        }
      });
    });

    describe("getAllReports", () => {
      it("should return an array", async () => {
        const result = await repository.getAllReports();
        if (result.length > 0) {
          expect.arrayContaining(result);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    describe("getReportsByUser", () => {
      it("should return an array", async () => {
        const result = await repository.getReportsByUser("TestUser");
        if (result.length > 0) {
          expect.arrayContaining(result);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    describe("getReportsForShort", () => {
      it("should return an array", async () => {
        const shorts = await repository.findByUser("TestUser");
        const result = await repository.getReportsForShort(shorts[0].id);
        if (result.length > 0) {
          expect.arrayContaining(result);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    // describe.only('Manual Test Call', () => {
    //   it('should return an array', async () => {
    //     const result = await repository.findAllShortsPaged(0, 10);
    //     console.log(result);
    //     if (result.length > 0) {
    //       expect.arrayContaining(result);
    //     }
    //     else {
    //       expect(result).toMatchObject([]);
    //     }
    //   });
    // });

    afterAll(async () => {
      prisma.$transaction([
        prisma.shortReport.deleteMany({where: {userId: "TestUser"} }),
        prisma.shortTag.deleteMany({ where: { tag: "#TestTag" } }),
        prisma.short.deleteMany({where:  {description: "Test Update Description"}}),
        prisma.user.delete({where: {id: "TestUser"}}),
      ]);
    });
    */
});
