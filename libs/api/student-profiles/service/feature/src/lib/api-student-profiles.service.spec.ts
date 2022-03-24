import { Test } from '@nestjs/testing';
import { ApiStudentProfileService } from './api-student-profiles.service';

describe('ApiStudentProfileService', () => {
  let service: ApiStudentProfileService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiStudentProfileService],
    }).compile();

    service = module.get(ApiStudentProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
