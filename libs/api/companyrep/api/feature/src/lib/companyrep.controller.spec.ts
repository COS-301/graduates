import { Test, TestingModule } from '@nestjs/testing';
import { CompanyrepController } from './companyrep.controller';

describe('CompanyrepController', () => {
  let controller: CompanyrepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyrepController],
    }).compile();

    controller = module.get<CompanyrepController>(CompanyrepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
