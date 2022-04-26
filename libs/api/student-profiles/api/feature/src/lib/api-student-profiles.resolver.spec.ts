import { ApiStudentProfilesEntity, ApiStudentProfilesInputEntity } from '@graduates/api/student-profiles/api/shared/data-access';
import { ApiStudentProfileService } from '@graduates/api/student-profiles/service/feature';
import { Test, TestingModule } from '@nestjs/testing';
import { UserInputError } from 'apollo-server-errors';
import { ApiStudentProfileResolver } from './api-student-profiles.resolver';

describe('ApiStudentProfileResolver', () => {
  let resolver: ApiStudentProfileResolver;

  const MockStudentService = {
    getUserIDFromStudentNumQuery: jest.fn( (stuNum: string) =>{
      return '1';
    }),
     getName: jest.fn((userid : string) => {
      return {name : 'name surname'};
    }),
     setName: jest.fn( (userid : string, name: string) => {
      return {name : name}
    }),
     getDoB: jest.fn( (userid : string) => {
      return { dateOfBirth: new Date('1929-06-11T22:00:00.000Z')};
    }),
     getPfp: jest.fn( (userid : string) => {
      return { profilePicture: 'linktophoto'};
    }),
     setPfp: jest.fn( (userid : string, pfp: string) => {
      return { pfp: pfp};
    }),
     getBio: jest.fn( (userid : string) => {
      return { bio : 'my bio'};
    }),
     setBio: jest.fn( (userid : string, bio: string) => {
      return { bio : bio};
    }),
     getTags: jest.fn( (userid : string) => {
      return [{tag:'tagOne'},{tag:'tagTwo'}];
    }),
     addTag: jest.fn( (userid : string, tag: string) => {
      return {};
    }),
     removeTag: jest.fn( (userid : string, tag: string) => {
      return {};
    }),
     getSocialMedia: jest.fn( (userid : string) => {
      return [{type:'TWITTER', link:'link1'},{type:'Discord', link:'link2'}];
    }),
    //  addSocialMedia: jest.fn( (userid : string, type: string, link:string) => {
    //   return {};
    // }),
    //  removeSocialMedia: jest.fn( (userid : string, type : string) => {
    //   return {};
    // }),
     getLocation: jest.fn( (userid : string) => {
      return { location: 'Gauteng'};
    }),
     setLocation: jest.fn( (userid : string, location: string) => {
      return { location: location};
    }),
     getEmails: jest.fn( (userid : string) => {
      return [{ email: 'Test@gmail.com' }];
    }),
     setEmails: jest.fn( (userid : string, emails: string) => {
      return { email: emails};
    }),
     getFiles: jest.fn( (userid : string) => {
      return null;
    }),
    //  addFiles: jest.fn( (userid : string, fileCategory : FileCategory, filePath : string, fileExtension : string) {
    //   return {};
    // }),
    //  removeFiles: jest.fn( (userid : string, fileCategory : FileCategory) {
    //   return {};
    // }),
     getEmploymentStatus(userId: string) {
      return {employmentStatus: true, openToOffers: true};
    }
  };

  beforeEach( async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiStudentProfileResolver, ApiStudentProfileService],
    })
      .overrideProvider(ApiStudentProfileService)
      .useValue(MockStudentService)
      .compile();

    resolver = module.get<ApiStudentProfileResolver>(ApiStudentProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  describe('@getStudent', ()=>{
    it('Should return the student object', async ()=> {
      expect((await resolver.getStudent('u12345678'))).toEqual(mockObject);
    })
  })
  describe('@editStudent', () => {
    it('Should return the edited student object', async ()=>{
      expect(await resolver.editStudent(input)).toEqual(mockObjectEdit)
    })
  })
  describe('@deleteStudent', () => {
    it('Should throw an error', async () => {
      expect(await resolver.deleteStudent('u12345678')).toEqual(new UserInputError('Not implemented'))
    })
  })
});


const mockObject = new ApiStudentProfilesEntity()
mockObject.dbId = '1';
mockObject.studentNum = 'u12345678';
mockObject.firstName = 'name';
mockObject.lastName = 'surname';
mockObject.dateOfBirth = '2/5/1929';
mockObject.profilePhoto = 'linktophoto';
mockObject.bio = 'my bio';
mockObject.tags = ['tagOne','tagTwo'];
mockObject.links = [['TWITTER','link1'],['Discord', 'link2']];
mockObject.preferredLocation = 'Gauteng';
mockObject.email = ['Test@gmail.com'];
mockObject.employmentStatus = 'Employed, Open to Offers';
mockObject.notableAchievements = ['Golden Key Honours Society', 'Did internship at google'];
mockObject.title = 'PhD';
mockObject.nameOfDegree = 'Computer Science';
mockObject.phoneNum = ['0824466845'];
mockObject.academicRecord = false;
mockObject.cv = false;
mockObject.capstoneProject = true;

const mockObjectEdit = new ApiStudentProfilesEntity()
mockObjectEdit.dbId = '1';
mockObjectEdit.studentNum = 'u12345678';
mockObjectEdit.firstName = 'Xander';
mockObjectEdit.lastName = 'Coetzer';
mockObjectEdit.dateOfBirth = '2/5/1929';
mockObjectEdit.profilePhoto = 'New Photo';
mockObjectEdit.bio = 'my bio';
mockObjectEdit.tags = ['tagOne','tagTwo'];
mockObjectEdit.links = [['TWITTER','link1'],['Discord', 'link2']];
mockObjectEdit.preferredLocation = 'Gauteng';
mockObjectEdit.email = ['Test@gmail.com'];
mockObjectEdit.employmentStatus = 'Employed, Open to Offers';
mockObjectEdit.notableAchievements = ['Golden Key Honours Society', 'Did internship at google'];
mockObjectEdit.title = 'PhD';
mockObjectEdit.nameOfDegree = 'Computer Science';
mockObjectEdit.phoneNum = ['0824466845'];
mockObjectEdit.academicRecord = false;
mockObjectEdit.cv = false;
mockObjectEdit.capstoneProject = true;

const input = new ApiStudentProfilesInputEntity()
input.studentNum = 'u12345678';
input.firstName = 'Xander';
input.lastName = 'Coetzer';
input.profilePhoto = 'New Photo';
input.bio = 'my bio';
input.tags = ['tagOne','tagTwo'];
input.links = [['TWITTER','link1'],['Discord', 'link2']];
input.preferredLocation = 'Gauteng';
input.email = ['Test@gmail.com'];
input.employmentStatus = 'Employed, Open to Offers';
input.notableAchievements = ['Golden Key Honours Society', 'Did internship at google'];
input.title = 'PhD';
input.nameOfDegree = 'Computer Science';
input.phoneNum = ['0824466845'];
