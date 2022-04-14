/**
 * Class representing a GetAllReports query
 */
export class GetAllReportsQuery {}

/**
 * Class representing a GetReportsByUser query
 * @param {string} id The id of the user to find the reports by
 */
export class GetReportsByUserQuery {
  constructor(public readonly userId: string) {}
}

/**
 * Class representing a getReportsForShort query
 * @param {string} id The id of the short to find the reports by
 */
export class GetReportsForShortQuery {
  constructor(public readonly shortId: string) {}
}

/**
 * Class representing a getReport query
 * @param {string} shortId The id of the short to find the reports by
 * @param {string} userID The id of the user to find the reports by
 */
export class GetReportQuery {
  constructor(
    public readonly shortId: string,
    public readonly userId: string
  ) {}
}
