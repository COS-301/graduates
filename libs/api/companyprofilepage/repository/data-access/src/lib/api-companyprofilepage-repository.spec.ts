import { Test, TestingModule } from '@nestjs/testing';
import { CompanyProfilePage } from './api-companyprofilepage-repository';
import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { SocialMedia } from '@prisma/client';


describe('CompanyProfilePageeRepository', () => {
    let repository: CompanyProfilePage;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CompanyProfilePage, PrismaService]
        }).compile();

        repository = module.get<CompanyProfilePage>(CompanyProfilePage);
    });

    it('Should be defined', async () => {
        expect(repository).toBeDefined();
      });
      
    describe('@getCompanyById', () => {
        
        const id = '1';
      
        it('should return a company object',async () => {
            try {
                const userCompany = repository.getCompanyById(id);
                expect(userCompany).toEqual(userCompany);

            } catch (error) {
                fail(error);
            }
        })
    }); 

    describe('@getCompanyProfile', () => {
        
        const id = '1';
      
        it('should return a company profile object',async () => {
            try {
                const profileCompany = repository.getCompanyProfile(id);
                expect(profileCompany).toEqual(profileCompany);

            } catch (error) {
                fail(error);
            }
        })
    }); 

    describe('@getCompanySocialMedia', () => {
        
        const id = '1';
      
        it('should return a social media object',async () => {
            try {
                const socialMediaCompany = repository.getCompanySocialMedia(id);
                expect(socialMediaCompany).toEqual(socialMediaCompany);

            } catch (error) {
                fail(error);
            }
        })
    }); 

    describe('@getCompanyLocations', () => {
        
        const id = '1';
      
        it('should return a locations object',async () => {
            try {
                const locationsCompany = repository.getCompanyLocations(id);
                expect(locationsCompany).toEqual(locationsCompany);

            } catch (error) {
                fail(error);
            }
        })
    }); 

    describe('@getCompanyEmail', () => {
        
        const id = '1';
      
        it('should return an email object',async () => {
            try {
                const emailCompany = repository.getCompanyEmail(id);
                expect(emailCompany).toEqual(emailCompany);

            } catch (error) {
                fail(error);
            }
        })
    }); 

    describe('@getCompanyProfileFile', () => {
        
        const id = '1';
      
        it('should return a profile file object',async () => {
            try {
                const profileFileCompany = repository.getCompanyProfileFile(id);
                expect(profileFileCompany).toEqual(profileFileCompany);

            } catch (error) {
                fail(error);
            }
        })
    }); 

    describe('@getCompanyContactNumber', () => {
        
        const id = '1';
      
        it('should return a contact number object',async () => {
            try {
                const contactNumberCompany = repository.getCompanyContactNumber(id);
                expect(contactNumberCompany).toEqual(contactNumberCompany);

            } catch (error) {
                fail(error);
            }
        })
    }); 

    describe('@getCompanyRepById', () => {
        
        const id = '1';
      
        it('should return a rep object',async () => {
            try {
                const repsCompany = repository.getCompanyRepById(id);
                expect(repsCompany).toEqual(repsCompany);

            } catch (error) {
                fail(error);
            }
        })
    }); 

    describe('@editCompanyProfile', () => {

        const id = '1';
        const bio = 'newBio';

        const Bio: BioObject = {
            id: id,
            bio: bio
        }

        it('should allow user to update company bio in company profile', async () => {
            
            try{
                const newBio = repository.editCompanyProfile(Bio); 
                expect(newBio).toHaveBeenCalled;
            } catch (error){
                fail(error);
            }
        });
    }); 

    describe('@editCompanySocialMedia', () => {

        const id = '1';
        const socialMediaInType:SocialMedia = "FACEBOOK";
        const socialMediaOutType:SocialMedia = "TWITTER";
        const link = 'newlinkdisplay';

        it('should allow user to update company social media', async () => {
            
            try{
                const newSocial = repository.editCompanySocialMedia(id, socialMediaInType,socialMediaOutType,link); 
                expect(newSocial).toHaveBeenCalled;
            } catch (error){
                fail(error);
            }
        });
    }); 

    describe('@editCompanyLocation', () => {

        const id = '1';
        const locationIn = "a brand new location";
        
        it('should allow user to update company location', async () => {
            
            try{
                const newLocation = repository.editCompanyLocations(id, locationIn); 
                expect(newLocation).toHaveBeenCalled;
            } catch (error){
                fail(error);
            }
        });
    }); 

    describe('@editCompanyEmail', () => {

        const id = '1';
        const emailIn = "newemailaddress";
        const currEmail = "currEmail"
        
        it('should allow user to update company email', async () => {
            
            try{
                const newEmail = repository.editCompanyEmail(id, currEmail, emailIn); 
                expect(newEmail).toHaveBeenCalled;
            } catch (error){
                fail(error);
            }
        });
    }); 

    describe('@editCompanyContactNumber', () => {

        const id = '1';
        const contact = "0118057656";

        it('should allow user to update company contact number', async () => {
            
            try{
                const newContact = repository.editCompanyContactNumber(id, contact); 
                expect(newContact).toHaveBeenCalled;
            } catch (error){
                fail(error);
            }
        });
    }); 

});

interface BioObject {
    id: string,
    bio: string
}
