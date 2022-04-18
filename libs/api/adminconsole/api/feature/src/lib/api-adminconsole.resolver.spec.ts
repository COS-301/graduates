/*import { ApiAdminConsoleServiceFeature} from '@graduates/api/adminconsole/service/feature';*/
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiAdminConsoleResolver } from './api-adminconsole.resolver';

describe('ApiAdminConsoleResolver', () => {
  let resolver: ApiAdminConsoleResolver;
  let queryBus: QueryBus;
 let commandBus: CommandBus;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiAdminConsoleResolver],
      providers: [PrismaService, QueryBus, CommandBus],
    }).compile();

    resolver = module.get<ApiAdminConsoleResolver>(ApiAdminConsoleResolver);
    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
  });
  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
