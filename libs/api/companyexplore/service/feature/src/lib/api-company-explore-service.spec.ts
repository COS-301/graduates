import { Test, TestingModule } from '@nestjs/testing';
import { CompanyExploreService } from './api-company-explore-service';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { GetTaggedCompHandler } from './queries/handlers/get-companies-by-tag.handler';
import { GetDefaultCompHandler } from './queries/handlers/get-companies-default.handler';
import { GetSearchHandler } from './queries/handlers/get-companies-search.handler';
import { GetCompByIdHandler } from './queries/handlers/get-company-by-id.handler';
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { CompanyExploreServiceModule } from  './company-explore-service.module'
import { ApiCompanyExploreEntity } from '@graduates/api/companyexplore/api/shared/interfaces/data-access';
import { ApiCompanyExploreUserEntity } from '@graduates/api/companyexplore/api/shared/interfaces/data-access';

jest.mock('@graduates/api/companyexplore/api/shared/interfaces/data-access');
const ApiCompanyExploreUserEntityMock: jest.Mocked<ApiCompanyExploreUserEntity> = new ApiCompanyExploreUserEntity() as ApiCompanyExploreUserEntity;
ApiCompanyExploreUserEntityMock.id =  '234567891';
ApiCompanyExploreUserEntityMock.email = 'test2@test.test';
ApiCompanyExploreUserEntityMock.password = 'admin2';
ApiCompanyExploreUserEntityMock.passwordSalt = 'admin2';
ApiCompanyExploreUserEntityMock.name = 'null2';
ApiCompanyExploreUserEntityMock.companyID = null;
ApiCompanyExploreUserEntityMock.suspended = false;
ApiCompanyExploreUserEntityMock.validated = false;

describe('CompanyExploreService', () => {
  let service: CompanyExploreService;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyExploreService,QueryBus]
    }).compile();

    await module.init();
    queryBus = module.get<QueryBus>(QueryBus);
    service = module.get<CompanyExploreService>(CompanyExploreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(queryBus).toBeDefined();
  });

  describe('getDefaultCompany', () => {
    const arrayCompanyUser = [ApiCompanyExploreUserEntityMock];
    it('should return a JSON lit of default companies', async () => {
      jest
        .spyOn(service, 'getDefaultCompany')
        .mockImplementation(
          (): Promise<ApiCompanyExploreUserEntity[]> => {
            return Promise.resolve(arrayCompanyUser);
          }
        );
        const result: Promise<ApiCompanyExploreUserEntity[]> = await service.getDefaultCompany();
        expect(result).toEqual(expect.arrayContaining(arrayCompanyUser));
    })
  });

  describe('getCompanyById', () => {
    const arrayCompanyUser = ApiCompanyExploreUserEntityMock;
    it('should return a JSON company with a given ID', async () => {
      jest
        .spyOn(service, 'getCompanyById')
        .mockImplementation(
          (): Promise<ApiCompanyExploreUserEntity> => {
            return Promise.resolve(arrayCompanyUser);
          }
        );
        const result: Promise<ApiCompanyExploreUserEntity[]> = await service.getCompanyById("234567891");
        expect(result).toEqual(arrayCompanyUser);
    })
  });

  describe('getSearchResult', () => {
    const arrayCompanyUser = [ApiCompanyExploreUserEntityMock];
    it('should return a JSON lit of companies with this name', async () => {
      jest
        .spyOn(service, 'getSearchResults')
        .mockImplementation(
          (): Promise<ApiCompanyExploreUserEntity[]> => {
            return Promise.resolve(arrayCompanyUser);
          }
        );
        const result: Promise<ApiCompanyExploreUserEntity[]> = await service.getSearchResults("null2");
        expect(result).toEqual(expect.arrayContaining(arrayCompanyUser));
    })
  });

  describe('getTaggedCompan', () => {
    const arrayCompanyUser = [ApiCompanyExploreUserEntityMock];
    it('should return a JSON lit of companies with this tag', async () => {
      jest
        .spyOn(service, 'getTaggedCompany')
        .mockImplementation(
          (): Promise<ApiCompanyExploreUserEntity[]> => {
            return Promise.resolve(arrayCompanyUser);
          }
        );
        const result: Promise<ApiCompanyExploreUserEntity[]> = await service.getTaggedCompany("trending");
        expect(result).toEqual(expect.arrayContaining(arrayCompanyUser));
    })
  });
});


