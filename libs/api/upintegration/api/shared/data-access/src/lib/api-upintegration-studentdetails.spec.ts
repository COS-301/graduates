import { StudentDetails } from './api-upintegration-studentdetails.entity';
import { AcademicRecord } from './api-upintegration-academicrecord.entity';
import { Degree } from './api-upintegration-academicrecord.entity';

describe('StudentDetails', () => {

  it('should be defined', () => {
    expect(new StudentDetails()).toBeDefined();
  });
});

describe('AcademicRecord', () => {

  it('should be defined', () => {
    expect(new AcademicRecord()).toBeDefined();
  });
});

describe('Degree', () => {

  it('should be defined', () => {
    expect(new Degree()).toBeDefined();
  });
});