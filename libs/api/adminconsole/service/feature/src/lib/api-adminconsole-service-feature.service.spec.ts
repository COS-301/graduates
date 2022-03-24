import { Test } from '@nestjs/testing';
import { ApiAdminconsoleServiceFeatureService } from './api-adminconsole-service-feature.service';

describe('ApiAdminconsoleServiceFeatureService', () => {
  let service: ApiAdminconsoleServiceFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiAdminconsoleServiceFeatureService],
    }).compile();

    service = module.get(ApiAdminconsoleServiceFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
