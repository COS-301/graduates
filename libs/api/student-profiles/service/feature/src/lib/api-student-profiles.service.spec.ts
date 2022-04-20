import { Test } from '@nestjs/testing';
import { ApiStudentProfileService } from './api-student-profiles.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SocialMedia } from '@prisma/client';
import { ApiStudentProfilesInputEntity } from '@graduates/api/student-profiles/api/shared/data-access';
import { StudentProfilesRepository } from '@graduates/api/student-profiles/repository/data-access'

jest.mock('@graduates/api/student-profiles/api/shared/data-access');
const mockStudent: jest.Mocked<ApiStudentProfilesInputEntity> = new ApiStudentProfilesInputEntity() as ApiStudentProfilesInputEntity;
mockStudent.studentNum =  'u12345678';
mockStudent.firstName = 'Anne';
mockStudent.lastName = 'Frankly';
mockStudent.title = 'Mrs';
mockStudent.email = ['u12345678@tuks.ac.za'];
mockStudent.nameOfDegree = 'Computer Science';
mockStudent.bio = 'Self-Published Author, Never trust anyone #soldout, <3 Gaslight, Gatekeep, Girlboss <3',
mockStudent.tags = ['Espionage','AI'],
mockStudent.preferredLocation = 'Prefer not to say',
mockStudent.employmentStatus = 'Unemployed. Not Open to Offers',
mockStudent.links = [[SocialMedia.LINKEDIN,'linked.com/Anne'],[SocialMedia.INSTAGRAM,'insta.com/AnnieeeeFinsta']];

describe('ApiStudentProfileService', () => {
  let service: ApiStudentProfileService;
  let queryBus: QueryBus;
  let repo: StudentProfilesRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiStudentProfileService, CommandBus, QueryBus, StudentProfilesRepository],
    }).compile();

    await module.init();
    queryBus = module.get<QueryBus>(QueryBus);
    service = module.get(ApiStudentProfileService);
    repo = module.get(StudentProfilesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(repo).toBeDefined();
  });

  describe('getName', () => {
    const userName = mockStudent.firstName + " " + mockStudent.lastName;
    it('should return a name of a student name', async () => {
      jest
        .spyOn(service, 'getName')
        .mockImplementation(
          (): Promise<string> => {
            return Promise.resolve(userName);
          }
        );
        const userID = await repo.getUserIDFromStudentNumber('u12345678');
        const result: Promise<string> = await service.getName(userID);
        expect(result).toEqual(userName);
    })
  });

  describe('getEmails', () => {
    const userdata = mockStudent.email;
    it('should return 1 or more of the student\'s emails', async () => {
      jest
        .spyOn(service, 'getEmails')
        .mockImplementation(
          (): Promise<string[]> => {
            return Promise.resolve(userdata);
          }
        );
        const userID = await repo.getUserIDFromStudentNumber('u12345678');
        const result: Promise<string> = await service.getEmails(userID);
        expect(result).toEqual(userdata);
    })
  });

  describe('getBio', () => {
    const userdata = mockStudent.bio;
    it('should return the student\'s bio', async () => {
      jest
        .spyOn(service, 'getBio')
        .mockImplementation(
          (): Promise<string> => {
            return Promise.resolve(userdata);
          }
        );
        const userID = await repo.getUserIDFromStudentNumber('u12345678');
        const result: Promise<string> = await service.getBio(userID);
        expect(result).toEqual(userdata);
    })
  });

  describe('getBio', () => {
    const userdata = mockStudent.bio;
    it('should return the student\'s bio', async () => {
      jest
        .spyOn(service, 'getBio')
        .mockImplementation(
          (): Promise<string> => {
            return Promise.resolve(userdata);
          }
        );
        const userID = await repo.getUserIDFromStudentNumber('u12345678');
        const result: Promise<string> = await service.getBio(userID);
        expect(result).toEqual(userdata);
    })
  });

  describe('getTags', () => {
    const userdata = mockStudent.tags;
    it('should return the student\'s bio', async () => {
      jest
        .spyOn(service, 'getTags')
        .mockImplementation(
          (): Promise<string[]> => {
            return Promise.resolve(userdata);
          }
        );
        const userID = await repo.getUserIDFromStudentNumber('u12345678');
        const result: Promise<string> = await service.getTags(userID);
        expect(result).toEqual(userdata);
    })
  });

  describe('getLocation', () => {
    const userdata = mockStudent.preferredLocation;
    it('should return the student\'s prefered location', async () => {
      jest
        .spyOn(service, 'getLocation')
        .mockImplementation(
          (): Promise<string> => {
            return Promise.resolve(userdata);
          }
        );
        const userID = await repo.getUserIDFromStudentNumber('u12345678');
        const result: Promise<string> = await service.getLocation(userID);
        expect(result).toEqual(userdata);
    })
  });
});
