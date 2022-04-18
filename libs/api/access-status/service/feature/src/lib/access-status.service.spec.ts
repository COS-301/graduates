import { Test, TestingModule } from '@nestjs/testing';
import { AccessStatusService } from './access-status.service';
import { AccessStatusRepository } from "@graduates/api/access-status/repository/feature";
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

describe('AccessStatusService', () => {
  let service: AccessStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessStatusService,AccessStatusRepository,PrismaService],
    }).compile();

    service = module.get<AccessStatusService>(AccessStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*it('should be not be null', async () => {
    const call = await service.getAccessStatus("u12345678","42");
    expect(call).not.toBeNull();
  });

  it('should be equal to entity', async () => {
    const call = await service.getAccessStatus("u12345678","42");
    expect(call).toEqual([{"accessStatus": "Pending", "item": "CV"}]);
  });  

  it('should be equal to entity', async () => {
    const call = await service.getAccessStatus("u12345678","5");
    expect(call).toEqual([{"accessStatus": "Download", "item": "ACADEMIC_RECORD"}]);
  });*/

});