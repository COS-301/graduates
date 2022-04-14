import { ApiStudentProfileService } from '@graduates/api/student-profiles/service/feature';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiStudentProfileResolver } from './api-student-profiles.resolver';
import { CommandBus } from '@nestjs/cqrs';

describe('ApiStudentProfileResolver', () => {
  let resolver: ApiStudentProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiStudentProfileResolver,ApiStudentProfileService,CommandBus],
    }).compile();

    resolver = module.get<ApiStudentProfileResolver>(ApiStudentProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
