import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { StudentProfilesRepository } from "@graduates/api/student-profiles/repository/data-access";
import { GetStudentProfileBio, GetStudentProfileDegreeName, GetStudentProfileDOB, GetStudentProfileEmails, GetStudentProfileEmploymentStatus, GetStudentProfileFiles, GetStudentProfileLocation, GetStudentProfileName, GetStudentProfilePFP, GetStudentProfilePhoneNumber, GetStudentProfileSocialMedia, GetStudentProfileTags } from "../impl";

@QueryHandler(GetStudentProfileName)
export class GetStudentProfileNameHandler implements IQueryHandler<GetStudentProfileName> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileName): Promise<any> {
        const {userId} = query;
        return this.repository.getName(userId);
    }
}

@QueryHandler(GetStudentProfileDOB)
export class GetStudentProfileDOBHandler implements IQueryHandler<GetStudentProfileDOB> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileDOB): Promise<any> {
        const {userId} = query;
        return this.repository.getDoB(userId);
    }
}

@QueryHandler(GetStudentProfilePFP)
export class GetStudentProfilePFPHandler implements IQueryHandler<GetStudentProfilePFP> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfilePFP): Promise<any> {
        const {userId} = query;
        return this.repository.getPfp(userId);
    }
}

@QueryHandler(GetStudentProfileBio)
export class GetStudentProfileBioHandler implements IQueryHandler<GetStudentProfileBio> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileBio): Promise<any> {
        const {userId} = query;
        return this.repository.getBio(userId);
    }
}

@QueryHandler(GetStudentProfileTags)
export class GetStudentProfileTagsHandler implements IQueryHandler<GetStudentProfileTags> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileTags): Promise<any> {
        const {userId} = query;
        return this.repository.getTags(userId);
    }
}

@QueryHandler(GetStudentProfileSocialMedia)
export class GetStudentProfileSocialMediaHandler implements IQueryHandler<GetStudentProfileSocialMedia> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileSocialMedia): Promise<any> {
        const {userId} = query;
        return this.repository.getSocialMedia(userId);
    }
}

@QueryHandler(GetStudentProfileLocation)
export class GetStudentProfileLocationHandler implements IQueryHandler<GetStudentProfileLocation> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileLocation): Promise<any> {
        const {userId} = query;
        return this.repository.getLocation(userId);
    }
}

@QueryHandler(GetStudentProfileEmails)
export class GetStudentProfileEmailsHandler implements IQueryHandler<GetStudentProfileEmails> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileEmails): Promise<any> {
        const {userId} = query;
        return this.repository.getEmails(userId);
    }
}

@QueryHandler(GetStudentProfileFiles)
export class GetStudentProfileFilesHandler implements IQueryHandler<GetStudentProfileFiles> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileFiles): Promise<any> {
        const {userId} = query;
        return this.repository.getFiles(userId);
    }
}

@QueryHandler(GetStudentProfileEmploymentStatus)
export class GetStudentProfileEmploymentStatusHandler implements IQueryHandler<GetStudentProfileEmploymentStatus> {
    constructor(private readonly repository: StudentProfilesRepository) {}

    async execute(query: GetStudentProfileEmploymentStatus): Promise<any> {
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





