import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { StudentProfilesRepository } from "@graduates/api/student-profiles/repository/data-access";
import {GetStudentProfileBioQuery,GetStudentProfileDOBQuery,GetStudentProfileDegreeNameQuery,GetStudentProfileEmailsQuery,GetStudentProfileEmploymentStatusQuery,GetStudentProfileLocationQuery,GetStudentProfileSocialMediaQuery,GetStudentProfilePhoneNumberQuery,GetStudentProfileTagsQuery,GetStudentProfileNameQuery,GetStudentProfileFilesQuery,GetStudentProfilePFPQuery } from "../impl";

@QueryHandler(GetStudentProfileNameQuery)
export class GetStudentProfileNameHandler implements IQueryHandler<GetStudentProfileNameQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileNameQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getName(userId);
    }
}

@QueryHandler(GetStudentProfileDOBQuery)
export class GetStudentProfileDOBHandler implements IQueryHandler<GetStudentProfileDOBQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileDOBQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getDoB(userId);
    }
}

@QueryHandler(GetStudentProfilePFPQuery)
export class GetStudentProfilePFPHandler implements IQueryHandler<GetStudentProfilePFPQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfilePFPQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getPfp(userId);
    }
}

@QueryHandler(GetStudentProfileBioQuery)
export class GetStudentProfileBioHandler implements IQueryHandler<GetStudentProfileBioQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileBioQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getBio(userId);
    }
}

@QueryHandler(GetStudentProfileTagsQuery)
export class GetStudentProfileTagsHandler implements IQueryHandler<GetStudentProfileTagsQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileTagsQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getTags(userId);
    }
}

@QueryHandler(GetStudentProfileSocialMediaQuery)
export class GetStudentProfileSocialMediaHandler implements IQueryHandler<GetStudentProfileSocialMediaQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileSocialMediaQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getSocialMedia(userId);
    }
}

@QueryHandler(GetStudentProfileLocationQuery)
export class GetStudentProfileLocationHandler implements IQueryHandler<GetStudentProfileLocationQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileLocationQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getLocation(userId);
    }
}

@QueryHandler(GetStudentProfileEmailsQuery)
export class GetStudentProfileEmailsHandler implements IQueryHandler<GetStudentProfileEmailsQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileEmailsQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getEmails(userId);
    }
}

@QueryHandler(GetStudentProfileFilesQuery)
export class GetStudentProfileFilesHandler implements IQueryHandler<GetStudentProfileFilesQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileFilesQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getFiles(userId);
    }
}

@QueryHandler(GetStudentProfileEmploymentStatusQuery)
export class GetStudentProfileEmploymentStatusHandler implements IQueryHandler<GetStudentProfileEmploymentStatusQuery> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileEmploymentStatusQuery): Promise<any> {
        const {userId} = query;
        return this.repository.getEmploymentStatus(userId);
    }
}


// @QueryHandler(GetStudentProfilePhoneNumber)
// export class GetStudentProfilePhoneNumberHandler implements IQueryHandler<GetStudentProfilePhoneNumber> {
//     constructor(private readonly repository: StudentProfilesRepository) {}

//     async execute(query: GetStudentProfilePhoneNumber): Promise<any> {
//         const {userId} = query;
//         return this.repository.getPhoneNumber(userId);
//     }
// }


// @QueryHandler(GetStudentProfileDegreeName)
// export class GetStudentProfileDegreeNameHandler implements IQueryHandler<GetStudentProfileDegreeName> {
//     constructor(private readonly repository: StudentProfilesRepository) {}

//     async execute(query: GetStudentProfileDegreeName): Promise<any> {
//         const {userId} = query;
//         return this.repository.getDegreeName(userId);
//     }
// }





