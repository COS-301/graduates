import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ShortReport } from '@prisma/client';
import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import {
  GetAllReportsQuery,
  GetReportsByUserQuery,
  GetReportsForShortQuery,
  GetReportQuery,
} from './api-short-report-query.query';

/**
 * Class to implement the getAllReports query for the ShortsService
 * @param {GetAllReportsQuery} query The query containing the id to search by
 * @return {Promise<ShortReport[]>}
 */
@QueryHandler(GetAllReportsQuery)
export class GetAllReportsHandler implements IQueryHandler<GetAllReportsQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(): Promise<ShortReport[]> {
    return this.repository.getAllReports();
  }
}

/**
 * Class to implement the getReportsByUser query for the ShortsService
 * @param {GetReportsByUserQuery} query The query containing the id to search by
 * @return {Promise<ShortReport[]>}
 */
@QueryHandler(GetReportsByUserQuery)
export class GetReportsByUserHandler
  implements IQueryHandler<GetReportsByUserQuery>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetReportsByUserQuery): Promise<ShortReport[]> {
    const { userId } = query;

    return this.repository.getReportsByUser(userId);
  }
}

/**
 * Class to implement the getReportsForShort query for the ShortsService
 * @param {GetReportsForShortQuery} query The query containing the id to search by
 * @return {Promise<ShortReport[]>}
 */
@QueryHandler(GetReportsForShortQuery)
export class GetReportsForShortHandler
  implements IQueryHandler<GetReportsForShortQuery>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetReportsForShortQuery): Promise<ShortReport[]> {
    const { shortId } = query;

    return this.repository.getReportsForShort(shortId);
  }
}

/**
 * Class to implement the getReportsForShort query for the ShortsService
 * @param {GetReportQuery} query The query containing the id to search by
 * @return {Promise<ShortReport>}
 */
@QueryHandler(GetReportQuery)
export class GetReportHandler implements IQueryHandler<GetReportQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetReportQuery): Promise<ShortReport | null> {
    const { shortId, userId } = query;

    return this.repository.getReport(shortId, userId);
  }
}
