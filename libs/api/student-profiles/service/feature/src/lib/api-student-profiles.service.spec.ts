import { Test } from '@nestjs/testing';
import { ApiStudentProfileService } from './api-student-profiles.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SocialMedia } from '@prisma/client';
import { ApiStudentProfilesInputEntity } from '@graduates/api/student-profiles/api/shared/data-access';
import { StudentProfilesRepository } from '@graduates/api/student-profiles/repository/data-access'

const userID = '007';
const mockUser = {id:'007',email:"james@gmail.com",password:"herMajesty",passwordSalt:"the queen",name:"James Bond",created:"2018-12-10 13:45:00.000",suspended:true,validated:false};
const mockUserDataBase = {handler: {findFirst: jest.fn((id)=>mockUser)}};

const mockEmail = {userId:'007',email:"james@gmail.com"};
const mockEmailDataBase = {handler: {findMany: jest.fn((userId)=>mockEmail)}};

const mockUserProfile = {UserId:'007',studentNumber: "u12345678", bio:"Yes that James Bond",employmentStatus:true,openToOffers:true};
const mockUserProfileDataBase = {handler: {findFirst: jest.fn((id)=>mockUserProfile)}};

const mockTags = [{userId:'007',tag:"AI"},{userId:'007',tag:"LTK"}];
const mockTagsDataBase = {handler: {findMany: jest.fn((userId)=>mockTags)}};

const mockLocation = {userId:'007',tag:"Prefer not to say"};
const mockLocationDataBase = {handler: {findFirst: jest.fn((userId)=>mockLocation)}};

const mockSocialMedia = [{userId:'007',type:"LINKEDIN",link:"www.linkin.com"},{userId:'007',type:"INSTAGRAM",link:"www.insta.com"}];
const mockSocialMediaDataBase = {handler: {findMany: jest.fn((userId)=>mockSocialMedia)}};

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
    it('should return a name of a student name', async () => {
        const result = await mockUserDataBase.handler.findFirst(userID);
        expect(result).toEqual(mockUser);
    })
  });

  describe('getEmails', () => {
    it('should return 1 or more of the student\'s emails', async () => {
      const result = await mockEmailDataBase.handler.findMany(userID);
      expect(result).toEqual(mockEmail);
    })
  });

  describe('getBio', () => {
    it('should return the student\'s bio', async () => {
      const result = await mockUserProfileDataBase.handler.findFirst(userID);
      expect(result).toEqual(mockUserProfile);
    })
  });

  describe('getTags', () => {
    it('should return the student\'s bio', async () => {
      const result = await mockTagsDataBase.handler.findMany(userID);
      expect(result).toEqual(mockTags);
    })
  });

  describe('getLocation', () => {
    it('should return the student\'s prefered location', async () => {
      const result = await mockLocationDataBase.handler.findFirst(userID);
      expect(result).toEqual(mockLocation);
    })
  });

  describe('getEmploymentStatus', () => {
    it('should return the student\'s Employment Status', async () => {
      const result = await mockUserProfileDataBase.handler.findFirst(userID);
      expect(result).toEqual(mockUserProfile);
    })
  });

  describe('getSocialMedia', () => {
    it('should return the student\'s Social Media', async () => {
      const result = await mockSocialMediaDataBase.handler.findMany(userID);
      expect(result).toEqual(mockSocialMedia);
    })
  });
});
