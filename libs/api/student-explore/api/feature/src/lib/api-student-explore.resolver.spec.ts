import { Test, TestingModule } from '@nestjs/testing';
import { ApiStudentExploreResolver } from './api-student-explore.resolver';

describe('LibResolver', () => {
  let resolver: ApiStudentExploreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiStudentExploreResolver],
    }).compile();

    resolver = module.get<ApiStudentExploreResolver>(ApiStudentExploreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
