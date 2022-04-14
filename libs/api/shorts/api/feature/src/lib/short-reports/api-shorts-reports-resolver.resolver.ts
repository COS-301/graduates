import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {
  Short,
  ShortReport,
  ShortReportInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsReportsService } from '@graduates/api/shorts/service/feature';

@Resolver(Short)
export class ShortsReportsResolver {
  constructor(private readonly service: ShortsReportsService) {}

  @Query(() => [ShortReport])
  async getAllReports(): Promise<ShortReport[]> {
    return await this.service.getAllReports();
  }

  @Query(() => [ShortReport])
  async getReportsByUser(
    @Args('userId') userId: string
  ): Promise<ShortReport[]> {
    return await this.service.getReportsByUser(userId);
  }

  @Query(() => [ShortReport])
  async getReportsForShort(
    @Args('shortId') shortId: string
  ): Promise<ShortReport[]> {
    return await this.service.getReportsForShort(shortId);
  }

  @Query(() => ShortReport)
  async getReport(
    @Args('shortId') shortId: string,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.getReport(shortId, userId);
  }

  @Mutation(() => ShortReport)
  async reportShort(
    @Args('report') report: ShortReportInput,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.reportShort(report, userId);
  }

  @Mutation(() => ShortReport)
  async deleteReport(
    @Args('shortId') shortId: string,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.deleteReport(shortId, userId);
  }
}
