import { Test, TestingModule } from '@nestjs/testing';
import { ApiUpIntegrationResolver } from './api-upintegration.resolver';
import { ApiUpIntegrationService } from '@graduates/api/upintegration/service/feature';
import {
  StudentDetails,
  AcademicRecord,
  Degree
}from '@graduates/api/upintegration/api/shared/data-access'
import { QueryBus } from '@nestjs/cqrs';

jest.mock('@graduates/api/upintegration/api/shared/data-access');
const studentDetailsMock : jest.Mocked<StudentDetails> = new StudentDetails() as StudentDetails;
const academicRecordMock : jest.Mocked<AcademicRecord> = new AcademicRecord() as AcademicRecord;
const degreeMock : jest.Mocked<Degree> = new Degree() as Degree;

describe('ApiUpIntegrationResolver', () => {
  let resolver:ApiUpIntegrationResolver;
  let service:ApiUpIntegrationService;
  let queryBus:QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiUpIntegrationResolver, 
        ApiUpIntegrationService,
        QueryBus
      ],
    }).compile();

    await module.init();

    resolver = module.get<ApiUpIntegrationResolver>(ApiUpIntegrationResolver);
    service = module.get<ApiUpIntegrationService>(ApiUpIntegrationService);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
    expect(queryBus).toBeDefined();
  });

  describe('getStudentDetailsUP', ()=>{
    const result = studentDetailsMock;

    it('should return a student details',async () =>{
      jest
      .spyOn(resolver,'getStudentDetailsUP')
      .mockImplementation(():Promise<StudentDetails> => Promise.resolve(result));
      
      expect(await resolver.getStudentDetailsUP('12345')).toEqual(result)
    });

    it('should return a student details with a string id field',async () =>{
      jest
      .spyOn(resolver,'getStudentDetailsUP')
      .mockImplementation(():Promise<StudentDetails> => Promise.resolve(result));
      
      expect(await (await resolver.getStudentDetailsUP('12345')).userID).toEqual(result.userID)
    });
  });

  describe('getDegree', ()=>{
    const result = degreeMock;

    it('should return a degree',async () =>{
      jest
      .spyOn(resolver,'getDegree')
      .mockImplementation(():Promise<Degree> => Promise.resolve(result));
      
      expect(await resolver.getDegree()).toEqual(result)
    });

    it('should have the value: stub for future use, use the Storage api for retrieving and uploading degree to the database',async () =>{
      jest
      .spyOn(resolver,'getDegree')
      .mockImplementation(():Promise<Degree> => Promise.resolve(result));
      
      expect(await (await resolver.getDegree()).fileAsString).toEqual(result.fileAsString)
    });
  });

  describe('getAcademicRecord', ()=>{
    const result = academicRecordMock;

    it('should return an academic record',async () =>{
      jest
      .spyOn(resolver,'getAcademicRecord')
      .mockImplementation(():Promise<AcademicRecord> => Promise.resolve(result));
      
      expect(await resolver.getAcademicRecord()).toEqual(result)
    });

    it('should have the value: stub for future use, use the Storage api for retrieving and uploading academic record to the database',async () =>{
      jest
      .spyOn(resolver,'getAcademicRecord')
      .mockImplementation(():Promise<AcademicRecord> => Promise.resolve(result));
      
      expect(await (await resolver.getAcademicRecord()).fileAsString).toEqual(result.fileAsString)
    });
  });

});