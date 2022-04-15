import { Test, TestingModule } from '@nestjs/testing';
import { StudentDetails } from './api-upintegration-studentdetails.entity';

describe('StudentDetails', () => {

  it('should be defined', () => {
    expect(new StudentDetails()).toBeDefined();
  });
});