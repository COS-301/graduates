import { Test, TestingModule } from '@nestjs/testing';
import { ApiCompanyExploreResolver } from './company-explore.resolver';
import { CompanyExploreService } from '@graduates/api/companyexplore/service/feature';
import { CqrsModule } from '@nestjs/cqrs';
import { ApiCompanyExploreEntity } from '@graduates/api/companyexplore/api/shared/interfaces/data-access';
import { ApiCompanyExploreTaggedEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";

jest.mock('@graduates/api/companyexplore/api/shared/interfaces/data-access');

const CompanyExploreMock: jest.Mocked<ApiCompanyExploreEntity> = new ApiCompanyExploreEntity() as ApiCompanyExploreEntity;
const CompanyExploreTaggedMock: jest.Mocked<ApiCompanyExploreTaggedEntity> = new ApiCompanyExploreTaggedEntity() as ApiCompanyExploreTaggedEntity;

//Run 'yarn nx test api-companyexplore-api-feature'
describe('ApiCompanyExploreResolver', () => {
  let resolver: ApiCompanyExploreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [ApiCompanyExploreResolver, CompanyExploreService],
    }).compile();

    resolver = module.get<ApiCompanyExploreResolver>(ApiCompanyExploreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  /**
   * Test the getCompanyById method
   */
  describe('getCompanyById', () => {
    const result = CompanyExploreMock;
    it('should return a Company', async () => {
      jest
        .spyOn(resolver, 'getCompanyById')
        .mockImplementation((): Promise<ApiCompanyExploreEntity> => Promise.resolve(result));

        expect(await resolver.getCompanyById('1')).toMatchObject(CompanyExploreMock);
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'getCompanyById').mockResolvedValue(null);

      expect(await resolver.getCompanyById('1')).toEqual(null);
    });
   });

  /**
   * Test the GetListOfCompanies method
   
  describe('GetListOfCompanies', () => {
    const result = [CompanyExploreMock];
    it('should return a list of Companies', async () => {
      jest
        .spyOn(resolver, 'GetListOfCompanies')
        .mockImplementation((): Promise<ApiCompanyExploreEntity[]> => Promise.resolve(result));
  
        expect(await resolver.GetListOfCompanies).toMatchObject(CompanyExploreMock);
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'GetListOfCompanies').mockResolvedValue(null);
  
      expect(await resolver.GetListOfCompanies).toEqual(null);
    });
  });
*/
  /**
   * Test the GetCompanySearchResult method
   */
  describe('GetCompanySearchResult', () => {
    const result = [CompanyExploreMock];
    it('should return a list of Companies following a search parameter', async () => {
      jest
        .spyOn(resolver, 'GetCompanySearchResult')
        .mockImplementation((): Promise<ApiCompanyExploreEntity[]> => Promise.resolve(result));
      
        expect(await resolver.GetCompanySearchResult('1')).toMatchObject(CompanyExploreMock);
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'GetCompanySearchResult').mockResolvedValue(null);
      
      expect(await resolver.GetCompanySearchResult('1')).toEqual(null);
    });
  });

  /**
   * Test the GetCompanyTagged method
   */
  describe('GetCompanyTagged', () => {
    const result = [CompanyExploreTaggedMock];
    it('should return a list of Companies following a tag parameter', async () => {
      jest
        .spyOn(resolver, 'GetCompanyTagged')
        .mockImplementation((): Promise<ApiCompanyExploreTaggedEntity[]> => Promise.resolve(result));
   
        expect(await resolver.GetCompanyTagged('1')).toMatchObject(CompanyExploreMock);
    });
    it('should return null', async () => {
      jest.spyOn(resolver, 'GetCompanyTagged').mockResolvedValue(null);
  
      expect(await resolver.GetCompanyTagged('1')).toEqual(null);
    });
  });
});
