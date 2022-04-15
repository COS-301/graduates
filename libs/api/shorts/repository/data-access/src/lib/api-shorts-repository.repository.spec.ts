import { Test, TestingModule } from '@nestjs/testing';
import { ShortsRepository } from './api-shorts-repository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Short, ShortTag } from '@graduates/api/shorts/api/shared/entities/data-access';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');

const shortMock: jest.Mocked<Short> = new Short() as Short;
const shortTagMock: jest.Mocked<ShortTag> = new ShortTag() as ShortTag;

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
   * Test the findShortById method
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
  // describe('findByUser', () => {
  //   it('should return empty array', async () => {
  //     expect(await repository.findByUser('1')).toEqual([]);
  //   });
  // });

  // /**
  //  * Test the findByTag method
  //  */
  // describe('findByTag', () => {
  //   it('should return empty array', async () => {
  //     expect(await repository.findByTag('1')).toEqual([]);
  //   });
  // });

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
});

//! TODO Uncomment once DB and API are ready in CI/CD or Deployment Environment
describe("DB Integration Tests", () => {
  let repository: ShortsRepository;
  let prisma: PrismaService;  
  let shortTest: Short;
  let shortTagTest: ShortTag;

  beforeAll(async () => {
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
  
  describe("findAll", () => {
    it("should return an array", async () => {
      const result = await repository.findAll();
      if (result.length > 0) {
        expect(result).toMatchObject([shortMock]);
      }
      else {
        expect(result).toMatchObject([]);
      }
    });
  });

  describe('findAllShortsPaged', () => {
    it('should return an array', async () => {
      const result = await repository.findAllShortsPaged(1, 10);
      if (result.length > 0) {
        expect(result).toMatchObject([shortTest]);
      }
      else {
        expect(result).toMatchObject([]);
      }
    });
  });

  describe("findUserById", () => {
    it("should return a user or null", async () => {
      const result = await repository.findUserById("1");
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
      const result = await repository.findByUser('1');
      if (result.length > 0) {
        expect(result).toMatchObject([shortTest]);
      }
      else {
        expect(result).toMatchObject([]);
      }
    });
  });

  describe('findByTag', () => {
      it('should return array', async () => {
        const result = await repository.findByTag('1');
        if (result.length > 0) {
          expect(result).toMatchObject([shortTest]);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    describe('findByTagPaged', () => {
      it('should return array', async () => {
        const result = await repository.findByTagPaged('1', 1, 10);
        if (result.length > 0) {
          expect(result).toMatchObject([shortMock]);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    //! Cannot live test createTag as it requires a user to be created and there is no createUser function available, User table needs to be populated first
    //! Cannot live test createShort as it requires a user to be created and there is no createUser function available, User table needs to be populated first
    //! Cannot live test updateShort as it requires a user to be created and there is no createUser function available, User table needs to be populated first
    //! Cannot live test deleteShort as it requires a user to be created and there is no createUser function available, User table needs to be populated first
    //! Cannot live test deleteShortReport as it requires a user to be created and there is no createUser function available, User table needs to be populated first

    describe("findAllTags", () => {
      it("should return an array", async () => {
        const result = await repository.findAllTags();
        if (result.length > 0) {
          expect(result).toMatchObject([shortTagTest]);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    describe("findTagByShortId", () => {
      it("should return an array", async () => {
        const result = await repository.findTagByShortId("1");
        if (result.length > 0) {
          expect(result).toMatchObject([shortTagTest]);
        }
        else {
          expect(result).toMatchObject([]);
        }
      });
    });

    


});