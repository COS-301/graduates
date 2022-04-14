import { Test, TestingModule } from '@nestjs/testing';
import {
  ShortReportInput,
  ShortReport,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsService } from '../shorts/api-shorts-service.service';
import { ShortsReportsService } from './api-shorts-reports-service.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const reportsMock: jest.Mocked<ShortReport> = new ShortReport() as ShortReport;

jest.mock('@graduates/api/shorts/api/shared/entities/data-access');
const reportCreateMock: jest.Mocked<ShortReportInput> =
  new ShortReportInput() as ShortReportInput;

// Run `yarn test api-shorts-api-feature`
describe('ShortsReportsService', () => {
  let service: ShortsReportsService;
  let shortsService: ShortsService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortsReportsService, ShortsService, QueryBus, CommandBus],
    }).compile();

    await module.init();

    service = module.get<ShortsReportsService>(ShortsReportsService);
    shortsService = module.get<ShortsService>(ShortsService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(shortsService).toBeDefined();
    expect(queryBus).toBeDefined();
    expect(commandBus).toBeDefined();
  });

  /**
   * Test the getAllReports method
   */
  describe('getAllReports', () => {
    const result = [reportsMock];
    it('should return an array of ShortReports', async () => {
      jest
        .spyOn(service, 'getAllReports')
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

      expect(await service.getAllReports()).toBe(result);
    });
  });

  /**
   * Test the getReportsByUser method
   */
  describe('getReportsByUser', () => {
    const result = [reportsMock];
    it('should return an array of ShortReports', async () => {
      jest
        .spyOn(service, 'getReportsByUser')
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

      expect(await service.getReportsByUser('1')).toBe(result);
    });
  });

  /**
   * Test the getReportsForShort method
   */
  describe('getReportsForShort', () => {
    const result = [reportsMock];
    it('should return an array of ShortReports', async () => {
      jest
        .spyOn(service, 'getReportsForShort')
        .mockImplementation(
          (): Promise<ShortReport[]> => Promise.resolve(result)
        );

      expect(await service.getReportsForShort('1')).toBe(result);
    });
  });

  /**
   * Test the getReport method
   */
  describe('getReport', () => {
    it('should return a ShortReport', async () => {
      jest
        .spyOn(service, 'getReport')
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(reportsMock)
        );

      expect(await service.getReport('1', '2')).toBe(reportsMock);
    });
  });

  /**
   * Test the reportShort method
   */
  describe('reportShort', () => {
    it('should return a ShortReport', async () => {
      jest
        .spyOn(service, 'reportShort')
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(reportsMock)
        );

      expect(await service.reportShort(reportCreateMock, '1')).toBe(
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
        .spyOn(service, 'deleteReport')
        .mockImplementation(
          (): Promise<ShortReport> => Promise.resolve(reportsMock)
        );

      expect(await service.deleteReport('1', '2')).toBe(reportsMock);
    });
  });
});
