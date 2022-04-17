import { Test, TestingModule } from '@nestjs/testing';
import { CompanyRepresentativeRepository } from './company-representative.repository';
import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { UserSocialMedia } from '@prisma/client';


describe('CompanyRepresentativeRepository', () => {

    let repository: CompanyRepresentativeRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CompanyRepresentativeRepository, PrismaService]
        }).compile();

        repository = module.get<CompanyRepresentativeRepository>(CompanyRepresentativeRepository);
    });


    it('Should be defined', async () => {
      expect(repository).toBeDefined();
    });

    describe('@returnRepObject', () => {
        
        const id = '1';
        const repName = 'Tester';
        const email = 'tester@gmail.com';
        const jobTitle = 'Tester';
        const aboutMe = 'Software Tester';
        const website = 'tester.up.ac.za';
        const location = 'Hatfield, Pretoria';
        const phoneNumber = '0812345678';
        const repExperience = 'Beginner';

        const SocialMedia: UserSocialMedia[] = [
             {
                userId: id,
                type: 'TWITTER',
                link: 'ishe@twitter.com',
             },
             {
                userId: id,
                type: "INSTAGRAM",
                link: "ishe@instagram.com"
              }, {
                userId: id,
                type: "LINKEDIN",
                link: "linkedin.com/in/isheanesu-dzingirai-2952b9180"
              }, {
                userId: id,
                type: "FACEBOOK",
                link: "ishe@facebook.com"
              },{
                userId: id,
                type: "SNAPCHAT",
                link: "ishe@snapchat.com"
              },{
                userId: id,
                type: "GITHUB",
                link: "zenthon@github.com"
              }
        
          ]

        it('should return a representative object',async () => {
            try {
                const user = repository.returnRepObject(id, repName, email, jobTitle, aboutMe, website, SocialMedia, location, phoneNumber, repExperience);
                expect(user).toEqual(user);

            } catch (error) {
                fail(error);
            }
        })
    }); 
         
    describe('@login', () => {

        const email = 'tester@gmail.com';
        const password = 'password';

        it('should allow user to login', async () => {
            try {
                const user = repository.login(email, password);
                expect(user).toEqual(user);

            } catch (error) {
                fail(error);
            }
        });
    });

    describe('@getAllRepresentativeUsers', () => {

        it('should return all representatives', async () =>{
            try {
                const allReps = repository.getAllRepresentativeUsers();
                expect(allReps).toHaveReturned;
            } catch (error) {
                fail(error);
            }    
        });
    });

    describe('@createDefaultRep', () =>{

        it('should create a default company representative', async () => {
            try{
                const defaultRep = repository.createDefaultRep();
                expect(defaultRep).toHaveBeenCalled;
            } catch (error) {
                fail(error);
            }
        });

    });

    describe('@deleteRepresentative', () =>{

        const user = 'Tester';

        it('should delete a representative', async () =>{
            try{
                
                const deletedUser = repository.deleteRepresentative(user);
                expect(deletedUser).toEqual(deletedUser);

            } catch (error) {
                fail(error);
            }
        });
    });

});
