import { CompanyExploreRepository } from './api-companyexplore-repository-data-access';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ApiCompanyExploreEntity, ApiCompanyExploreUserEntity } from '@graduates/api/companyexplore/api/shared/interfaces/data-access';
import { User, UserProfile, UserTag } from '@prisma/client';

jest.mock('@graduates/api/companyexplore/api/shared/interfaces/data-access');
const ApiCompanyExploreEntityMock: jest.Mocked<(User & { UserProfile: UserProfile[]; })> = new ApiCompanyExploreEntity() as unknown as (User & { UserProfile: UserProfile[]; });
ApiCompanyExploreEntityMock.id =  '234567891';
ApiCompanyExploreEntityMock.email = 'test2@test.test';
ApiCompanyExploreEntityMock.password = 'admin2';
ApiCompanyExploreEntityMock.passwordSalt = 'admin2';
ApiCompanyExploreEntityMock.name = 'null2';
ApiCompanyExploreEntityMock.companyId = null;
ApiCompanyExploreEntityMock.suspended = false;
ApiCompanyExploreEntityMock.validated = false;

const ApiCompanyExploreEntityMock1: User & { UserProfile: UserProfile[]; } = new ApiCompanyExploreUserEntity() as unknown as User & { UserProfile: UserProfile[]; };
ApiCompanyExploreEntityMock1.id =  '234567891';
ApiCompanyExploreEntityMock1.email = 'test2@test.test';
ApiCompanyExploreEntityMock1.password = 'admin2';
ApiCompanyExploreEntityMock1.passwordSalt = 'admin2';
ApiCompanyExploreEntityMock1.name = 'null2';
ApiCompanyExploreEntityMock1.companyId = null;
ApiCompanyExploreEntityMock1.suspended = false;
ApiCompanyExploreEntityMock1.validated = false;

const ApiCompanyExploreEntityMock2: UserTag & { user: User; } = new ApiCompanyExploreEntity() as unknown as UserTag & { user: User; };
ApiCompanyExploreEntityMock2.userId =  '234567891';
ApiCompanyExploreEntityMock2.tag = 'trending';
ApiCompanyExploreEntityMock2.user = null;
describe('CompanyExploreRepository', () => {
  let repo: CompanyExploreRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyExploreRepository],
      providers: [PrismaService],
    }).compile();

    repo = module.get<CompanyExploreRepository>(CompanyExploreRepository);
  });

  describe('GetListOfCompanies', () => {
    const arrayCompanyUser = [ApiCompanyExploreEntityMock];
    it('should return a JSON lit of default companies', async () => {
      jest
        .spyOn(repo, 'getDefaultCompany')
        .mockImplementation(
          (): Promise<(User & { UserProfile: UserProfile[]; })[]> => {
            return Promise.resolve(arrayCompanyUser);
          }
        );

        expect(await repo.getDefaultCompany()).toEqual(expect.arrayContaining(arrayCompanyUser));
    })
  });

  describe('getCompanyById', () => {
    const arrayCompanyUser = ApiCompanyExploreEntityMock1;

    it('should return a JSON company with a given ID', async () => {
      jest
        .spyOn(repo, 'getCompanyById')
        .mockImplementation(
        (): Promise<(User & { UserProfile: UserProfile[]; })> =>  Promise.resolve(arrayCompanyUser));
        //(): Promise<(User & { UserProfile: UserProfile[]; })> =>  Promise.resolve(arrayCompanyUser));
        expect(await repo.getCompanyById("234567891")).toEqual(ApiCompanyExploreEntityMock1);
    })
  });

  describe('getSearchResult', () => {
    const arrayCompanyUser = [ApiCompanyExploreEntityMock];
    it('should return a JSON lit of companies with this name', async () => {
      jest
        .spyOn(repo, 'getSearchResults')
        .mockImplementation(
          (): Promise<(User & { UserProfile: UserProfile[]; })[]> => {
            return Promise.resolve(arrayCompanyUser);
          }
        );

        expect(await repo.getSearchResults("null2")).toEqual(expect.arrayContaining(arrayCompanyUser));
    })
  });

  describe('getTaggedCompan', () => {
    const arrayCompanyUser = [ApiCompanyExploreEntityMock2];
    it('should return a JSON lit of companies with this tag', async () => {
      jest
        .spyOn(repo, 'getTaggedCompany')
        .mockImplementation(
          (input: string): Promise<(UserTag & { user: User; })[]> => {
            return Promise.resolve(arrayCompanyUser);
          }
        );

        expect(await repo.getTaggedCompany("trending")).toEqual(expect.arrayContaining(arrayCompanyUser));
    })
  });
});


