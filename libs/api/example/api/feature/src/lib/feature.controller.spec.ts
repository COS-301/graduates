import { Test, TestingModule } from '@nestjs/testing';
import { FeatureController } from './feature.controller';

describe('FeatureController', () => {
  let controller: FeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeatureController],
    }).compile();

    controller = module.get<FeatureController>(FeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
