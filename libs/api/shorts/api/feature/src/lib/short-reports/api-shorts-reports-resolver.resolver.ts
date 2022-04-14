import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import {
  Short,
  ShortReport,
  ShortReportInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import {
  ShortsReportsService,
  ShortsService,
} from '@graduates/api/shorts/service/feature';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';

@Resolver(ShortReport)
export class ShortsReportsResolver {
  constructor(
    private readonly service: ShortsReportsService,
    private readonly shortsService: ShortsService
  ) {}

  /**
   * Field resolver for a user
   * @param {ShortReport} shortReport The short report to resolve
   * @returns {User} The user that reported the short
   */
  @ResolveField()
  user(@Root() shortReport: ShortReport): Promise<User> {
    return this.shortsService.findUserById(shortReport.userId);
  }

  /**
   * Field resolver for a short
   * @param {ShortReport} shortReport The short report to resolve
   * @returns {Short} The short that was reported
   */
  @ResolveField()
  short(@Root() shortReport: ShortReport): Promise<Short> {
    return this.shortsService.findShortById(shortReport.shortId);
  }

  // CREATE //
  /**
   * Mutation to report a short
   * @param {ShortReportInput} report The report to create
   * @param {string} userId The id of the user reporting the short
   * @returns {Promise<ShortReport | null>}
   */
  @Mutation(() => ShortReport)
  async reportShort(
    @Args('report') report: ShortReportInput,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.reportShort(report, userId);
  }

  // READ //
  /**
   * Query to get all reports
   * @returns {Promise<ShortReport[]>}
   */
  @Query(() => [ShortReport])
  async getAllReports(): Promise<ShortReport[]> {
    return await this.service.getAllReports();
  }

  /**
   * Query to get all reports by user
   * @param {string} userId The id of the user to find the reports by
   * @returns {Promise<ShortReport[]>}
   */
  @Query(() => [ShortReport])
  async getReportsByUser(
    @Args('userId') userId: string
  ): Promise<ShortReport[]> {
    return await this.service.getReportsByUser(userId);
  }

  /**
   * Query to get all reports for a short
   * @param {string} shortId The id of the short to find the reports for
   * @returns {Promise<ShortReport[]>}
   */
  @Query(() => [ShortReport])
  async getReportsForShort(
    @Args('shortId') shortId: string
  ): Promise<ShortReport[]> {
    return await this.service.getReportsForShort(shortId);
  }

  /**
   * Query to get a single report
   * @param {string} shortId The id of the short to find the reports for
   * @param {string} userId The id of the user to find the reports by
   * @returns {Promise<ShortReport>}
   */
  @Query(() => ShortReport)
  async getReport(
    @Args('shortId') shortId: string,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.getReport(shortId, userId);
  }

  // DELETE //
  /**
   * Mutation to delete a report
   * @param {string} shortId The id of the short to delete the report for
   * @param {string} userId The id of the user to delete the report for
   * @returns {Promise<ShortReport | null>}
   */
  @Mutation(() => ShortReport)
  async deleteReport(
    @Args('shortId') shortId: string,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.deleteReport(shortId, userId);
  }
}
