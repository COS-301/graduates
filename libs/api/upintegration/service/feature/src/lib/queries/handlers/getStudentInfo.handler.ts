import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UpIntegrationRepository  } from "@graduates/libs/api/upintegration/repository/data-access";
import {getStudentInfoDOBQuery,getStudentInfoEmailsQuery,getStudentInfoPhoneNumberQuery,getStudentInfoNameQuery,getStudentInfoFilesQuery } from "../impl";

@QueryHandler(getStudentInfoNameQuery)
export class getStudentInfoNameHandler implements IQueryHandler<getStudentInfoNameQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: getStudentInfoNameQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getName(userId);
    }
}

@QueryHandler(getStudentInfoDOBQuery)
export class getStudentInfoDOBHandler implements IQueryHandler<getStudentInfoDOBQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: getStudentInfoDOBQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getDoB(userId);
    }
}

@QueryHandler(getStudentInfoEmailsQuery)
export class getStudentInfoEmailsHandler implements IQueryHandler<getStudentInfoEmailsQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: getStudentInfoEmailsQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getEmails(userId);
    }
}

@QueryHandler(getStudentInfoFilesQuery)
export class getStudentInfoFilesHandler implements IQueryHandler<getStudentInfoFilesQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: getStudentInfoFilesQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getFiles(userId);
    }
}



// @QueryHandler(getStudentInfoPhoneNumber)
// export class getStudentInfoPhoneNumberHandler implements IQueryHandler<getStudentInfoPhoneNumber> {
//     constructor(private readonly repository: UpIntegrationRepository) {}

//     async execute(query: getStudentInfoPhoneNumber): Promise<any> {
//         const {userId} = query;
//         return this.repository.getPhoneNumber(userId);
//     }
// }






