import { Test } from '@nestjs/testing';
import { StudentService } from './student-api.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [StudentService],
    }).compile();

    service = module.get(StudentService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
