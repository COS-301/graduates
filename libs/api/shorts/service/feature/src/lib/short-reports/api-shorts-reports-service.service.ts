import {
  ShortReport,
  ShortReportInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { Injectable } from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import {
  CreateReportCommand,
  DeleteReportCommand,
} from './commands/api-short-report-command.command';
import {
  GetAllReportsQuery,
  GetReportQuery,
  GetReportsByUserQuery,
  GetReportsForShortQuery,
} from './queries/api-short-report-query.query';

@Injectable()
export class ShortsReportsService {
  /**
   * Constructor - injects QueryBus and CommandBus
   * @param {QueryBus} queryBus The query bus
   * @param {CommandBus} commandBus The command bus
   */
  constructor(
    private readonly queryBus: QueryBus,
    private commandBus: CommandBus
  ) {}

  /**
   * Get all reports
   * @return {Promise<ShortReport>}
   */
  async getAllReports(): Promise<ShortReport[]> {
    return await this.queryBus.execute(new GetAllReportsQuery());
  }

  /**
   * Get all reports by user
   * @param {string} userId The id of the user to get the reports for
   * @return {Promise<ShortReport[]>}
   */
  async getReportsByUser(userId: string): Promise<ShortReport[]> {
    return await this.queryBus.execute(new GetReportsByUserQuery(userId));
  }

  /**
   * Get all reports for short
   * @param {string} shortId The id of the short to get the reports for
   * @return {Promise<ShortReport[]>}
   */
  async getReportsForShort(shortId: string): Promise<ShortReport[]> {
    return await this.queryBus.execute(new GetReportsForShortQuery(shortId));
  }

  /**
   * Get a single report
   * @param {string} shortId The id of the short to get the reports for
   * @param {string} userId The id of the user to get the reports for
   * @return {Promise<ShortReport>}
   */
  async getReport(
    shortId: string,
    userId: string
  ): Promise<ShortReport | null> {
    return await this.queryBus.execute(new GetReportQuery(shortId, userId));
  }

  /**
   * Create a new report
   * @param {ShortReportInput} report The id of the short to get the reports for
   * @param {string} userId The id of the user to get the reports for
   * @return {Promise<ShortReport>}
   */
  async reportShort(
    report: ShortReportInput,
    userId: string
  ): Promise<ShortReport | null> {
    return await this.commandBus.execute(
      new CreateReportCommand(report, userId)
    );
  }

  /**
   * Delete a report
   * @param {shortId} report The id of the short to get the reports for
   * @param {string} userId The id of the user to get the reports for
   * @return {Promise<ShortReport>}
   */
  async deleteReport(
    shortId: string,
    userId: string
  ): Promise<ShortReport | null> {
    return await this.commandBus.execute(
      new DeleteReportCommand(shortId, userId)
    );
  }
}
