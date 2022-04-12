import { Test, TestingModule } from '@nestjs/testing';
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import {
  GetAllShortsHandler,
  GetShortByIdHandler,
  GetShortByUserHandler,
  GetShortByTagHandler,
} from './ApiShortsQueryHandler.handler';
import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import {
  GetShortByIdQuery,
  GetShortByUserQuery,
  GetShortByTagQuery,
} from './ApiShortsQuery.query';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortMock: jest.Mocked<Short> = new Short() as Short;

jest.mock('./ApiShortsQuery.query');
const idQueryMock: jest.Mocked<GetShortByIdQuery> = new GetShortByIdQuery(
  '1'
) as GetShortByIdQuery;

jest.mock('./ApiShortsQuery.query');
const userQueryMock: jest.Mocked<GetShortByUserQuery> = new GetShortByUserQuery(
  '1'
) as GetShortByUserQuery;

jest.mock('./ApiShortsQuery.query');
const tagQueryMock: jest.Mocked<GetShortByTagQuery> = new GetShortByTagQuery(
  '1'
) as GetShortByTagQuery;

describe('ShortsQueryHandlers', () => {
  let findAllHandler: GetAllShortsHandler;
  let findByIdHandler: GetShortByIdHandler;
  let findByUserHandler: GetShortByUserHandler;
  let findByTagHandler: GetShortByTagHandler;

  let queryBus: QueryBus;
  let commandBus: CommandBus;
  let repository: ShortsRepository;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllShortsHandler,
        GetShortByIdHandler,
        GetShortByUserHandler,
        GetShortByTagHandler,
        QueryBus,
        CommandBus,
        ShortsRepository,
        PrismaService,
      ],
    }).compile();

    await module.init();

    findAllHandler = module.get<GetAllShortsHandler>(GetAllShortsHandler);
    findByIdHandler = module.get<GetShortByIdHandler>(GetShortByIdHandler);
    findByUserHandler = module.get<GetShortByUserHandler>(
      GetShortByUserHandler
    );
    findByTagHandler = module.get<GetShortByTagHandler>(GetShortByTagHandler);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
    repository = module.get<ShortsRepository>(ShortsRepository);
    prisma = module.get<PrismaService>(PrismaService);
  });
  it('should be defined', () => {
    expect(findAllHandler).toBeDefined();
    expect(findByIdHandler).toBeDefined();
    expect(findByUserHandler).toBeDefined();
    expect(findByTagHandler).toBeDefined();
    expect(prisma).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('findAll', () => {
    const result = [shortMock];
    it('should return an array of shorts', async () => {
      jest
        .spyOn(findAllHandler, 'execute')
        .mockImplementation((): Promise<Short[]> => Promise.resolve(result));

      expect(await findAllHandler.execute()).toEqual(
        expect.arrayContaining(result)
      );
    });

    it('should return an empty array', async () => {
      expect(await findAllHandler.execute()).toEqual([]);
    });
  });

  describe('findById', () => {
    it('should return a short', async () => {
      jest
        .spyOn(findByIdHandler, 'execute')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await findByIdHandler.execute(idQueryMock)).toMatchObject(
        shortMock
      );
    });
  });

  describe('findByUser', () => {
    it('should return null', async () => {
      expect(await findByUserHandler.execute(userQueryMock)).toEqual(null);
    });
  });

  describe('findByTag', () => {
    it('should return null', async () => {
      expect(await findByTagHandler.execute(tagQueryMock)).toEqual(null);
    });
  });
});
