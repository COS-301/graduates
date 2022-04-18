import { ApicompanyprofilepageServiceFeatureModule } from "@graduates/api/companyprofilepage/service/feature";
import { ApicompanyprofilepageResolver } from './api-companyprofilepage.resolver';
import { Test, TestingModule } from '@nestjs/testing';
import { QueryBus, CommandBus } from "@nestjs/cqrs";
import { ApiCompanyProfilePage, UserEmail, UserLocation, UserNumber, UserSocialMedia, UserProfile, CompanyReps, UpdateBioInput } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { NotFoundException } from "@nestjs/common";


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

jest.mock('@graduates/api/companyprofilepage/api/shared/data-access');
const companyBioUpdateMock: jest.Mocked<UpdateBioInput> = new UpdateBioInput() as UpdateBioInput;



describe('ApiCompanyprofilepageResolver', () =>{
    let resolver: ApicompanyprofilepageResolver;
    let service: ApicompanyprofilepageServiceFeatureModule;
    let queryBus: QueryBus;
    let commandBus ; CommandBus;


    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ApicompanyprofilepageResolver,
                        ApicompanyprofilepageServiceFeatureModule,
                        QueryBus,
                        CommandBus],
        }).compile();

        await module.init();

        resolver = module.get<ApicompanyprofilepageResolver>(ApicompanyprofilepageResolver);
        service = module.get<ApicompanyprofilepageServiceFeatureModule>(ApicompanyprofilepageServiceFeatureModule);
        queryBus = module.get<QueryBus>(QueryBus)
        commandBus = module.get<CommandBus>(CommandBus)
    
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined();
        expect(service).toBeDefined();
        expect(queryBus).toBeDefined();
        expect(commandBus).toBeDefined();
    })


    //check get company by ID 
    describe('getCompanyById', () => {

        it('should throw an exception', async () => {
            jest
                .spyOn(resolver, 'getCompanyByID')
                .mockRejectedValue(new NotFoundException("company not found"));

                await expect(resolver.getCompanyByID('0')).rejects.toThrow();
        });

        it('should return a company', async () => {
            jest
              .spyOn(resolver, 'getCompanyByID')
              .mockImplementation((): Promise<ApiCompanyProfilePage> => Promise.resolve(companyMock));
      
            expect(await resolver.getCompanyByID('1')).toMatchObject(companyMock);
          });
    })


    //check get company number
    describe('test getCompanyNumber', () => {

        
        it('should throw an exception', async () => {
            jest
                .spyOn(resolver, 'getCompanyNumber')
                .mockRejectedValue(new NotFoundException("company not found"));
                await expect(resolver.getCompanyNumber('0')).rejects.toThrow();
        });

        it('should return a number', async () => {
            jest
              .spyOn(resolver, 'getCompanyNumber')
              .mockImplementation((): Promise<UserNumber> => Promise.resolve(companyNumberMock));
      
            expect(await resolver.getCompanyNumber('1')).toMatchObject(companyNumberMock);
          });

    })
    //check get company bio
    describe('test getCompanyBio', () => {

        
        it('should throw an exception', async () => {
            jest
                .spyOn(resolver, 'getCompanyBio')
                .mockRejectedValue(new NotFoundException("company not found"));
                await expect(resolver.getCompanyBio('0')).rejects.toThrow();
        });

        it('should return a number', async () => {
            jest
              .spyOn(resolver, 'getCompanyBio')
              .mockImplementation((): Promise<UserProfile> => Promise.resolve(companyBioMock));
      
            expect(await resolver.getCompanyBio('1')).toMatchObject(companyBioMock);
          });

    })

    //test the get company emails retuns an array of emails
    describe('getCompanyEmail', () => {
        const result = [companyEmailMock];
        it('should return an array of company emails', async () => {
          jest
            .spyOn(resolver, 'getCompanyEmail')
            .mockImplementation((): Promise<UserEmail[]> => Promise.resolve(result));
    
          expect(await resolver.getCompanyEmail('1')).toEqual(
            expect.arrayContaining(result)
          );
        });
      });

      //test the get company location retuns an array
      describe('getCompanyLocation', () => {
        const result = [companyLocationMock];
        it('should return an array of company emails', async () => {
          jest
            .spyOn(resolver, 'getCompanyLocation')
            .mockImplementation((): Promise<UserLocation[]> => Promise.resolve(result));
    
          expect(await resolver.getCompanyLocation('1')).toEqual(
            expect.arrayContaining(result)
          );
        });
      });

    //test the get company Social media retuns an array
    describe('getCompanySocialMedia', () => {
        const result = [companySocialMediaMock];
        it('should return an array of company socials', async () => {
             jest
            .spyOn(resolver, 'getCompanySocialMedia')
            .mockImplementation((): Promise<UserSocialMedia[]> => Promise.resolve(result));
            
            expect(await resolver.getCompanySocialMedia('1')).toEqual(
            expect.arrayContaining(result)
            );
        });
    });

    //test the get company reps retuns an array
    describe('getCompanyReps', () => {
        const result = [companyRepsMock];
        it('should return an array of company reps', async () => {
             jest
            .spyOn(resolver, 'getCompanyReps')
            .mockImplementation((): Promise<CompanyReps[]> => Promise.resolve(result));
            
            expect(await resolver.getCompanyReps('1')).toEqual(
            expect.arrayContaining(result)
            );
        });
    });

    //test update company bio
    describe('updateCompanyBio', () => {
        it('should return a bio', async () => {
          jest
            .spyOn(resolver, 'updateCompanyBio')
            .mockImplementation((): Promise<UserProfile> => Promise.resolve(companyBioMock));
    
          expect(await resolver.updateCompanyBio(companyBioUpdateMock)).toMatchObject(
            companyBioMock
          );
        });
      });
})
