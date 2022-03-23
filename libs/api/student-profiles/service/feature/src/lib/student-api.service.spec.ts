import { Test } from '@nestjs/testing';
import { StudentProfileService } from './student-api.service';

describe('StudentProfileService', () => {
  let service: StudentProfileService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [StudentProfileService],
    }).compile();

    service = module.get(StudentProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
