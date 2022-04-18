import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UpIntegrationRepository  } from "@graduates/api/upintegration/repository/data-access";
import {
    GetStudentInfoEmailQuery,
    GetStudentInfoNameQuery,
    GetStudentInfoDegreeQuery,
    GetStudentInfoIDQuery,
    GetStudentInfoPhoneNumberQuery 
} from "./api-upintegration-getStudentInfo.query";

@QueryHandler(GetStudentInfoNameQuery)
export class GetStudentInfoNameHandler implements IQueryHandler<GetStudentInfoNameQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: GetStudentInfoNameQuery): Promise<string | null> {
        const {userId} = query;
        return this.repository.get_name(userId);
    }
}

@QueryHandler(GetStudentInfoEmailQuery)
export class GetStudentInfoEmailHandler implements IQueryHandler<GetStudentInfoEmailQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: GetStudentInfoEmailQuery): Promise<string | null> {
        const {userId} = query;
        return this.repository.get_email(userId);
    }
}

@QueryHandler(GetStudentInfoDegreeQuery)
export class GetStudentInfoDegreeHandler implements IQueryHandler<GetStudentInfoDegreeQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: GetStudentInfoDegreeQuery): Promise<string | null> {
        const {userId} = query;
        return this.repository.get_course(userId);
    }
}

@QueryHandler(GetStudentInfoIDQuery)
export class GetStudentInfoIDHandler implements IQueryHandler<GetStudentInfoIDQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: GetStudentInfoIDQuery): Promise<string | null> {
        const {userId} = query;
        return this.repository.get_UserID(userId);
    }
}

@QueryHandler(GetStudentInfoPhoneNumberQuery)
export class GetStudentInfoPhoneNumberHandler implements IQueryHandler<GetStudentInfoPhoneNumberQuery> {
    constructor(private readonly repository: UpIntegrationRepository) {}

    async execute(query: GetStudentInfoPhoneNumberQuery): Promise<string | null> {
        const {userId} = query;
        return this.repository.get_contact(userId);
    }
}