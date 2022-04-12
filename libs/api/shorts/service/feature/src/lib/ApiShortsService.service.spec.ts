import { Test, TestingModule } from '@nestjs/testing';
import { ShortsService } from './ApiShortsService.service';

describe('ShortsService', () => {
  let service: ShortsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ShortsService],
      providers: [ShortsService],
    }).compile();

    service = module.get<ShortsService>(ShortsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();  
  });

  describe('find all', () => {
    it('should return an array of shorts', async () => {
      const res = await service.findAllShorts();
  
      expect(Array.isArray(res)).toBe(true);
    });
  })  
});