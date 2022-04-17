import { Test, TestingModule } from '@nestjs/testing';
import { StudentExploreRepository } from './api-student-explore-repository-data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';
import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature'; //


jest.mock('@graduates/api/student-explore/api/shared/data-access');

const StudentExploreMock: jest.Mocked<ApiStudentExplore> = new ApiStudentExplore() as ApiStudentExplore;


// Run `yarn test api-student-explore-repository-data-access`
describe ( 'StudentExploreRepository', () => {
    let repository: StudentExploreRepository;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [StudentExploreRepository, PrismaService, ApiStorageServiceFeatureModule],
        }).compile();

        prisma = module.get<PrismaService>(PrismaService);
        repository = module.get<StudentExploreRepository>(StudentExploreRepository);
  });
  it('should be defined', () => {
    expect(prisma).toBeDefined();
    expect(repository).toBeDefined();
  });

  /**
   * Test the initStudents method
   */
  describe('initStudents', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'initStudents')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.initStudents()).toEqual(
        expect.arrayContaining(result)
      );
    });
  });

  /**
   * Test the FindSpecificStudent method
   */
  describe('FindSpecificStudent', () => {
    //const result = [StudentExploreMock];
    it('should return a Student', async () => {
      jest
        .spyOn(repository, 'FindSpecificStudent')
        .mockImplementation((): Promise<ApiStudentExplore> => Promise.resolve(StudentExploreMock));

        expect(await repository.FindSpecificStudent('1')).toMatchObject(StudentExploreMock);
    });
    it('should return null', async () => {
      jest.spyOn(repository, 'FindSpecificStudent').mockResolvedValue(null);

      expect(await repository.FindSpecificStudent('1')).toEqual(null);
    });
  });

  /**
   * Test the SearchStudent method
   */
  describe('SearchStudent', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'SearchStudent')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.SearchStudent()).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the SearchStudentTag method
   */
   describe('SearchStudentTag', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'SearchStudentTag')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.SearchStudentTag('mockTag')).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FilterStudentLocation method
   */
   describe('FilterStudentLocation', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FilterStudentLocation')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FilterStudentLocation('mockFilter')).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FilterStudentDegreeType method
   */
   describe('FilterStudentDegreeType', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FilterStudentDegreeType')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FilterStudentDegreeType('mockFilter')).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FilterStudentDegreeName method
   */
   describe('FilterStudentDegreeName', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FilterStudentDegreeName')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FilterStudentDegreeName('mockFilter')).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FilterStudentEmploymentStatus method
   */
   describe('FilterStudentEmploymentStatus', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FilterStudentEmploymentStatus')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FilterStudentEmploymentStatus('mockFilter')).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FindAllLocation method
   */
   describe('FindAllLocation', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FindAllLocation')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FindAllLocation()).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FindAllDegreeType method
   */
   describe('FindAllDegreeType', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FindAllDegreeType')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FindAllDegreeType()).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FindAllDegreeName method
   */
   describe('FindAllDegreeName', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FindAllDegreeName')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FindAllDegreeName()).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FindAllTag method
   */
   describe('FindAllTag', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FindAllTag')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FindAllTag()).toEqual(
        expect.arrayContaining(result)
      );
    });

  });

  /**
   * Test the FindAllEmpStatus method
   */
   describe('FindAllEmpStatus', () => {
    const result = [StudentExploreMock];
    it('should return an array of Students', async () => {
      jest
        .spyOn(repository, 'FindAllEmpStatus')
        .mockImplementation((): Promise<ApiStudentExplore[]> => Promise.resolve(result));

      expect(await repository.FindAllEmpStatus()).toEqual(
        expect.arrayContaining(result)
      );
    });

  });
});