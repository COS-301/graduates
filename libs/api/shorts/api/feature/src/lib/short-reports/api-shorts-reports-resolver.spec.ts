import { Test, TestingModule } from '@nestjs/testing';
import {
  ShortReportInput,
  ShortReport,
  Short,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsReportsResolver } from './api-shorts-reports-resolver.resolver';
import {
  ShortsReportsService,
  ShortsService,
} from '@graduates/api/shorts/service/feature';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const reportsMock: jest.Mocked<ShortReport> = new ShortReport() as ShortReport;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const reportCreateMock: jest.Mocked<ShortReportInput> =
  new ShortReportInput() as ShortReportInput;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const shortMock: jest.Mocked<Short> = new Short() as Short;

jest.mock('@graduates/api/authentication/api/shared/interfaces/data-access');
const userMock: jest.Mocked<User> = new User() as User;

// Run `yarn test api-shorts-api-feature`
describe('ShortsReportsResolver', () => {
  let resolver: ShortsReportsResolver;
  let service: ShortsReportsService;
  let shortsService: ShortsService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShortsReportsResolver,
        ShortsReportsService,
        ShortsService,
        QueryBus,
        CommandBus,
      ],
    }).compile();

    await module.init();

    resolver = module.get<ShortsReportsResolver>(ShortsReportsResolver);
    service = module.get<ShortsReportsService>(ShortsReportsService);
    shortsService = module.get<ShortsService>(ShortsService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
    expect(shortsService).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
  });

  /**
   * Test the user field resolver method
   */
  describe('user', () => {
    it('should return a user', async () => {
      jest
        .spyOn(resolver, 'user')
        .mockImplementation((): Promise<User> => Promise.resolve(userMock));

      expect(await resolver.user(reportsMock)).toMatchObject(userMock);
    });
  });

  /**
   * Test the short field resolver method
   */
  describe('short', () => {
    it('should return a Short', async () => {
      jest
        .spyOn(resolver, 'short')
        .mockImplementation((): Promise<Short> => Promise.resolve(shortMock));

      expect(await resolver.short(reportsMock)).toMatchObject(shortMock);
    });
  });

  /**
   * Test the getAllReports method
   */
  describe('getAllReports', () => {
    const result = [reportsMock];
    it('should return an array of ShortReports', async () => {
      jest
        .spyOn(resolver, 'getAllReports')
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

      expect(await resolver.getAllReports()).toBe(result);
    });
  });

  /**
   * Test the getReportsByUser method
   */
  describe('getReportsByUser', () => {
    const result = [reportsMock];
    it('should return an array of ShortReports', async () => {
      jest
        .spyOn(resolver, 'getReportsByUser')
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

      expect(await resolver.getReportsByUser('1')).toBe(result);
    });
  });

  /**
   * Test the getReportsForShort method
   */
  describe('getReportsForShort', () => {
    const result = [reportsMock];
    it('should return an array of ShortReports', async () => {
      jest
        .spyOn(resolver, 'getReportsForShort')
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

      expect(await resolver.getReportsForShort('1')).toBe(result);
    });
  });

  /**
   * Test the getReport method
   */
  describe('getReport', () => {
    it('should return a ShortReport', async () => {
      jest
        .spyOn(resolver, 'getReport')
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(reportsMock)
        );

      expect(await resolver.getReport('1', '2')).toBe(reportsMock);
    });
  });

  /**
   * Test the reportShort method
   */
  describe('reportShort', () => {
    it('should return a ShortReport', async () => {
      jest
        .spyOn(resolver, 'reportShort')
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(reportsMock)
        );

      expect(await resolver.reportShort(reportCreateMock, '1')).toBe(
        reportsMock
      );
    });
  });

  /**
   * Test the deleteReport method
   */
  describe('deleteReport', () => {
    it('should return a ShortReport', async () => {
      jest
        .spyOn(resolver, 'deleteReport')
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(reportsMock)
        );

      expect(await resolver.deleteReport('1', '2')).toBe(reportsMock);
    });
  });
});
