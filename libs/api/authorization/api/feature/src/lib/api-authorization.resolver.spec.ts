import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../shared/src/lib/api-authorization.entity';
import { QueryBus } from '@nestjs/cqrs';
const MockApiImpl : jest.Mocked<ApiAuthorization> = new ApiAuthorization() as ApiAuthorization;
describe('ApiAuthorizationResolver', () => {
  let resolver: ApiAuthorizationResolver;
  //let queryBus: QueryBus;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiAuthorizationResolver,
        ApiAuthorizationService,
        ApiAuthorization,
        QueryBus,
      ],
    }).compile();
    //queryBus = module.get<QueryBus>(QueryBus);
    resolver = module.get<ApiAuthorizationResolver>(ApiAuthorizationResolver);
  });

  it('Should equal data', async () => {
    jest
      .spyOn(resolver, 'authorization')
      .mockImplementation(
        (): Promise<ApiAuthorization> =>
          Promise.resolve(MockApiImpl)
      );

    expect(await resolver.authorization("cl23d8krj0000lcv8o1qwxph3")).toEqual(MockApiImpl);
  });
  it('Should be null', async () => {
    jest
      .spyOn(resolver, 'authorization')
      .mockImplementation(
        (): Promise<ApiAuthorization> =>
          Promise.resolve(MockApiImpl)
      );

    expect(await resolver.authorization("hskjamdjnamnlks")).toEqual(MockApiImpl);
  });
});
