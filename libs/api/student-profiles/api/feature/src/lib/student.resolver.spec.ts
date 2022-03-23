import { StudentProfileService } from '@graduates/api/student-profiles/service/feature';
import { Test, TestingModule } from '@nestjs/testing';
import { StudentResolver } from './student.resolver';

describe('StudentResolver', () => {
  let resolver: StudentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentResolver,StudentProfileService],
    }).compile();

    resolver = module.get<StudentResolver>(StudentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
