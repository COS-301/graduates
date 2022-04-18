import { Test, TestingModule } from '@nestjs/testing';
import { UpdateBioInput , ApiCompanyProfilePage, UserEmail, UserLocation, UserSocialMedia, UserNumber, UserProfile, CompanyReps } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { ApicompanyprofilepageServiceFeatureModule } from './api-companyprofilepage-service-feature';



jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companyBioUpdateMock: jest.Mocked<UpdateBioInput> = new UpdateBioInput() as UpdateBioInput;

jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companyMock: jest.Mocked<ApiCompanyProfilePage> = new ApiCompanyProfilePage() as ApiCompanyProfilePage;

jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companyEmailMock: jest.Mocked<UserEmail>  = new UserEmail() as UserEmail;

jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companyLocationMock: jest.Mocked<UserLocation>  = new UserLocation() as UserLocation;

jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companySocialMediaMock: jest.Mocked<UserSocialMedia>  = new UserSocialMedia() as UserSocialMedia;

jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companyNumberMock: jest.Mocked<UserNumber>  = new UserNumber() as UserNumber;

jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companyBioMock: jest.Mocked<UserProfile> = new UserProfile() as UserProfile;

jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companyRepsMock: jest.Mocked<CompanyReps> = new CompanyReps() as CompanyReps;


describe('ApicompanyprofilepageServiceFeatureModule', () => {
    let service: ApicompanyprofilepageServiceFeatureModule;
    let queryBus: QueryBus;
    let commandBus: CommandBus;

    beforeAll(async() => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ApicompanyprofilepageServiceFeatureModule, CommandBus, QueryBus],
        
        }).compile();

        await module.init();

        commandBus = module.get<CommandBus>(CommandBus);
        queryBus = module.get<QueryBus>(QueryBus);
        service = module.get<ApicompanyprofilepageServiceFeatureModule>(ApicompanyprofilepageServiceFeatureModule);
    });

    it('should be defined', () => {
        expect(commandBus).toBeDefined();
        expect(queryBus).toBeDefined();
        expect(service).toBeDefined();
    });

    //fetch company with id test
    describe('getCompanyWithID', () => {
        it('should return a company', async () => {
          jest
            .spyOn(service, 'getCompanyWithID')
            .mockImplementation((): Promise<ApiCompanyProfilePage> => Promise.resolve(companyMock));
    
          expect(await service.getCompanyWithID('1')).toMatchObject(companyMock);
        });
    });

    //fetch company with id test
    describe('getCompanyNumber', () => {
        it('should return a number', async () => {
          jest
            .spyOn(service, 'getCompanyNumber')
            .mockImplementation((): Promise<UserNumber> => Promise.resolve(companyNumberMock));
    
          expect(await service.getCompanyNumber('1')).toMatchObject(companyMock);
        });
    });

    
    //fetch company with id test
    describe('getCompanyBio', () => {
        it('should return a bio', async () => {
          jest
            .spyOn(service, 'getCompanyBio')
            .mockImplementation((): Promise<UserProfile> => Promise.resolve(companyBioMock));
    
          expect(await service.getCompanyBio('1')).toMatchObject(companyMock);
        });
    });


    //test the get company emails retuns an array of emails
    describe('getCompanyEmail', () => {
        const result = [companyEmailMock];
        it('should return an array of company emails', async () => {
          jest
            .spyOn(service, 'getCompanyEmail')
            .mockImplementation((): Promise<UserEmail[]> => Promise.resolve(result));
    
          expect(await service.getCompanyEmail('1')).toEqual(
            expect.arrayContaining(result)
          );
        });
      });

      //test the get company location retuns an array
      describe('getCompanyLocation', () => {
        const result = [companyLocationMock];
        it('should return an array of company emails', async () => {
          jest
            .spyOn(service, 'getCompanyLocation')
            .mockImplementation((): Promise<UserLocation[]> => Promise.resolve(result));
    
          expect(await service.getCompanyLocation('1')).toEqual(
            expect.arrayContaining(result)
          );
        });
      });

    //test the get company Social media retuns an array
    describe('getCompanySocialMedia', () => {
        const result = [companySocialMediaMock];
        it('should return an array of company socials', async () => {
             jest
            .spyOn(service, 'getCompanySocialMedia')
            .mockImplementation((): Promise<UserSocialMedia[]> => Promise.resolve(result));
            
            expect(await service.getCompanySocialMedia('1')).toEqual(
            expect.arrayContaining(result)
            );
        });
    });

    //test the get company reps retuns an array
    describe('getCompanyReps', () => {
        const result = [companyRepsMock];
        it('should return an array of company reps', async () => {
             jest
            .spyOn(service, 'getCompanyReps')
            .mockImplementation((): Promise<CompanyReps[]> => Promise.resolve(result));
            
            expect(await service.getCompanyReps('1')).toEqual(
            expect.arrayContaining(result)
            );
        });
    });

    //test update company bio
    describe('updateCompanyBio', () => {
        it('should return a bio', async () => {
          jest
            .spyOn(service, 'updateCompanyBio')
            .mockImplementation((): Promise<UserProfile> => Promise.resolve(companyBioMock));
    
          expect(await service.updateCompanyBio(companyBioUpdateMock)).toMatchObject(
            companyBioMock
          );
        });
      });
})
