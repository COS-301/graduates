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

@Resolver(Short)
export class ShortsReportsResolver {
  constructor(
    private readonly service: ShortsReportsService,
    private readonly shortsService: ShortsService
  ) {}

  @ResolveField()
  user(@Root() shortReport: ShortReport): Promise<User> {
    return this.shortsService.findUserById(shortReport.userId);
  }

  @ResolveField(() => Short)
  async short(@Root() shortReport: ShortReport): Promise<Short> {
    return await this.shortsService.findShortById(shortReport.shortId);
  }

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
