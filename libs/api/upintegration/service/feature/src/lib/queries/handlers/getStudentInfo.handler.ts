import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UpIntegrationRepository  } from "@graduates/api/upintegration/repository/data-access";
import {getStudentInfoEmailsQuery,getStudentInfoNameQuery,getStudentInfoFilesQuery } from "../impl";

@QueryHandler(getStudentInfoNameQuery)
export class getStudentInfoNameHandler implements IQueryHandler<getStudentInfoNameQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: getStudentInfoNameQuery): Promise<any> {
        const {userId} = query;
        return this.repository.get_name(userId);
    }
}

@QueryHandler(getStudentInfoEmailsQuery)
export class getStudentInfoEmailsHandler implements IQueryHandler<getStudentInfoEmailsQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: getStudentInfoEmailsQuery): Promise<any> {
        const {userId} = query;
        return this.repository.get_emails(userId);
    }
}

@QueryHandler(getStudentInfoFilesQuery)
export class getStudentInfoFilesHandler implements IQueryHandler<getStudentInfoFilesQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: getStudentInfoFilesQuery): Promise<any> {
        const {userId} = query;
        return this.repository.get_files(userId);
    }
}










