import { Test, TestingModule } from '@nestjs/testing';
import { ShortsRepository } from './ApiShortsRepository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

describe('ShortsRepository', () => {
  let repository: ShortsRepository;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortsRepository, PrismaService],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    repository = module.get<ShortsRepository>(ShortsRepository);
  });
  it('should be defined', () => {
    expect(prisma).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('find all', () => {
    it('should return an array of shorts', async () => {
      const res = await repository.findAll();

      expect(Array.isArray(res)).toBe(true);
    });
  });
});
