import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { CompanyRepresentative } from  '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeResolver } from './api-company-representative.resolver';
import { async } from '@firebase/util';


describe('ApiCompanyRepresentativeResolver', () => {
  let resolver: ApiCompanyRepresentativeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCompanyRepresentativeResolver, ApiCompanyRepresentativeService,QueryBus,CommandBus,{
        provide: ApiCompanyRepresentativeService,
        useFactory: () =>({
          create: jest.fn((companyRep :CompanyRepresentative) => ({
            id: 'c1234',
            ...companyRep
          })),
          getAllCompanyRepresentatives: jest.fn(()=>(
            [
              {
                id: "c1234523456d",
                repName: "Siphesihle Vezi",
                jobTitle: "Data Engineer at Consnet",
                aboutMe: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning.",
                repExperience: "Worked for Universtity of Pretoria as a Teaching Assistant.",
                location: "Hatfield, Gauteng, 0028",
                email: "zama.vezi@gmail.com",
                linkedIn: "linkedin.com/in/isheanesu-dzingirai-2952b9180",
                twitter: "ishe@twitter.com",
                instagram: "ishe@instagram.com",
                snapChat: "snapchat@ishe.com",
                gitHub: "zenthon@github.com",
                facebook: "ishe@facebook.com",
                phoneNumber: "0724545654",
                website: "www.ishe.dzingi.com"
              },
              {
                id: "c1234",
                repName: "Isheanesu Joseph Dzingirai",
                jobTitle: "Data Engineer at Consnet",
                aboutMe: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning.",
                repExperience: "Worked for Universtity of Pretoria as a Teaching Assistant.",
                location: "Hatfield, Gauteng, 0028",
                email: "ishe.dzingirai@gmail.com",
                linkedIn: "linkedin.com/in/isheanesu-dzingirai-2952b9180",
                twitter: "ishe@twitter.com",
                instagram: "ishe@instagram.com",
                snapChat: "ishe@snapchat.com",
                gitHub: "zenthon@github.com",
                facebook: "ishe@facebook.com",
                phoneNumber: "0724545654",
                website: "www.ishe.dzingi.com"
              }
            ]
          )),
          getCompanyRepresentative: jest.fn((id: string) =>({
            id: "c1234",
            repName: "Isheanesu Joseph Dzingirai",
            jobTitle: "Data Engineer at Consnet",
            aboutMe: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning.",
            repExperience: "Worked for Universtity of Pretoria as a Teaching Assistant.",
            location: "Hatfield, Gauteng, 0028",
            email: "ishe.dzingirai@gmail.com",
            linkedIn: "linkedin.com/in/isheanesu-dzingirai-2952b9180",
            twitter: "ishe@twitter.com",
            instagram: "ishe@instagram.com",
            snapChat: "ishe@snapchat.com",
            gitHub: "zenthon@github.com",
            facebook: "ishe@facebook.com",
            phoneNumber: "0724545654",
            website: "www.ishe.dzingi.com"
          })),
          getDefaultRepresentative: jest.fn((id: string) =>({
            id: "c1234",
            repName: "Isheanesu Joseph Dzingirai",
            jobTitle: "Data Engineer at Consnet",
            aboutMe: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning.",
            repExperience: "Worked for Universtity of Pretoria as a Teaching Assistant.",
            location: "Hatfield, Gauteng, 0028",
            email: "ishe.dzingirai@gmail.com",
            linkedIn: "linkedin.com/in/isheanesu-dzingirai-2952b9180",
            twitter: "ishe@twitter.com",
            instagram: "ishe@instagram.com",
            snapChat: "ishe@snapchat.com",
            gitHub: "zenthon@github.com",
            facebook: "ishe@facebook.com",
            phoneNumber: "0724545654",
            website: "www.ishe.dzingi.com"
          })),
          login: jest.fn((email:string, password:string) =>({
            id: "c1234",
            repName: "Isheanesu Joseph Dzingirai",
            jobTitle: "Data Engineer at Consnet",
            aboutMe: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning.",
            repExperience: "Worked for Universtity of Pretoria as a Teaching Assistant.",
            location: "Hatfield, Gauteng, 0028",
            email: "ishe.dzingirai@gmail.com",
            linkedIn: "linkedin.com/in/isheanesu-dzingirai-2952b9180",
            twitter: "ishe@twitter.com",
            instagram: "ishe@instagram.com",
            snapChat: "ishe@snapchat.com",
            gitHub: "zenthon@github.com",
            facebook: "ishe@facebook.com",
            phoneNumber: "0724545654",
            website: "www.ishe.dzingi.com"
          }))
        })
      }],
    }).compile();

    resolver = module.get<ApiCompanyRepresentativeResolver>(ApiCompanyRepresentativeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe("@getCompanyRepresentative", () => {
    it("should return a company representative profile", async () =>{
      const rep = await resolver.getCompanyRepresentative("c1234523456d");
      expect(rep).toEqual({
        id: "c1234",
        repName: "Isheanesu Joseph Dzingirai",
        jobTitle: "Data Engineer at Consnet",
        aboutMe: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning.",
        repExperience: "Worked for Universtity of Pretoria as a Teaching Assistant.",
        location: "Hatfield, Gauteng, 0028",
        email: "ishe.dzingirai@gmail.com",
        linkedIn: "linkedin.com/in/isheanesu-dzingirai-2952b9180",
        twitter: "ishe@twitter.com",
        instagram: "ishe@instagram.com",
        snapChat: "ishe@snapchat.com",
        gitHub: "zenthon@github.com",
        facebook: "ishe@facebook.com",
        phoneNumber: "0724545654",
        website: "www.ishe.dzingi.com"
      })
    })
  });

  describe("@getDefaultRepresentative", () =>{
    const pass = "IamACSStudent@1";
    const email = "ishe.dzingirai@gmail.com"; 
    it("should return the logged in company profile", async () => {
      const reps = await resolver.login(email, pass)
      expect(reps).toEqual(
        {
          id: "c1234",
          repName: "Isheanesu Joseph Dzingirai",
          jobTitle: "Data Engineer at Consnet",
          aboutMe: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning.",
          repExperience: "Worked for Universtity of Pretoria as a Teaching Assistant.",
          location: "Hatfield, Gauteng, 0028",
          email: "ishe.dzingirai@gmail.com",
          linkedIn: "linkedin.com/in/isheanesu-dzingirai-2952b9180",
          twitter: "ishe@twitter.com",
          instagram: "ishe@instagram.com",
          snapChat: "ishe@snapchat.com",
          gitHub: "zenthon@github.com",
          facebook: "ishe@facebook.com",
          phoneNumber: "0724545654",
          website: "www.ishe.dzingi.com"
        }
      )
    })
  });

  describe("@getAllCompanyRepresentatives", () =>{
    it("should return a list of company representative profiles", async () => {
      const reps = await resolver.getAllCompanyRepresentatives();
      expect(reps).toContainEqual(
        {
          id: "c1234",
          repName: "Isheanesu Joseph Dzingirai",
          jobTitle: "Data Engineer at Consnet",
          aboutMe: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning.",
          repExperience: "Worked for Universtity of Pretoria as a Teaching Assistant.",
          location: "Hatfield, Gauteng, 0028",
          email: "ishe.dzingirai@gmail.com",
          linkedIn: "linkedin.com/in/isheanesu-dzingirai-2952b9180",
          twitter: "ishe@twitter.com",
          instagram: "ishe@instagram.com",
          snapChat: "ishe@snapchat.com",
          gitHub: "zenthon@github.com",
          facebook: "ishe@facebook.com",
          phoneNumber: "0724545654",
          website: "www.ishe.dzingi.com"
        }
      )
    })
  })  
});
