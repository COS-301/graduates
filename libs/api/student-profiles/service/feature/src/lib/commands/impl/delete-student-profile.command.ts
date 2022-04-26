import { FileCategory, SocialMedia } from "@prisma/client";

export class DeleteStudentProfileNameCommand {
    constructor(
      public readonly id?: string,
      public readonly name?: string,
    ) {}
}

export class DeleteStudentProfileProfilePictureCommand {
    constructor(
      public readonly id?: string,
      public readonly pfp?: string,
    ) {}
}

export class DeleteStudentProfileBioCommand {
    constructor(
      public readonly id?: string,
      public readonly bio?: string,
    ) {}
}

export class DeleteStudentProfileTagsCommand {
    constructor(
      public readonly id?: string,
      public readonly tags?: string,
    ) {}
}

export class DeleteStudentProfileSocialMediaCommand {
    constructor(
      public readonly id: string,
      public readonly type?: SocialMedia,
    ) {}
}

export class DeleteStudentProfileLocationCommand {
    constructor(
      public readonly id?: string,
      public readonly location?: string,
    ) {}
}

export class DeleteStudentProfileEmailCommand {
    constructor(
      public readonly id?: string,
      public readonly email?: string,
    ) {}
}

export class DeleteStudentProfileFilesCommand {
    constructor(
      public readonly id?: string,
      public readonly fileCategory?: FileCategory,
      public readonly filePath?: string,
      public readonly fileExtension?: string,
    ) {}
}

export class DeleteStudentProfileEmploymentStatusCommand {
    constructor(
      public readonly id?: string,
      public readonly status?: string,
    ) {}
}

export class DeleteStudentProfilePhoneNumberCommand {
    constructor(
      public readonly id?: string,
      public readonly phoneNumber?: string,
    ) {}
}

export class DeleteStudentProfileDegreeNameCommand {
    constructor(
      public readonly id?: string,
      public readonly degreeName?: string,
    ) {}
}

