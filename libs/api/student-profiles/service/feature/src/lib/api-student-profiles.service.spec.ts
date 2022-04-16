import { Test } from '@nestjs/testing';
import { ApiStudentProfileService } from './api-student-profiles.service';
import { CommandBus } from '@nestjs/cqrs';

describe('ApiStudentProfileService', () => {
  let service: ApiStudentProfileService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiStudentProfileService,CommandBus],
    }).compile();

    service = module.get(ApiStudentProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
