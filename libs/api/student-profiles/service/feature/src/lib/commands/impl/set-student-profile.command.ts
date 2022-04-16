import { FileCategory, SocialMedia } from "@prisma/client";

export class SetStudentProfileNameCommand {
    constructor(
      public readonly id?: string,
      public readonly name?: string,
    ) {}
}

export class SetStudentProfileProfilePictureCommand {
    constructor(
      public readonly id?: string,
      public readonly pfp?: string,
    ) {}
}

export class SetStudentProfileBioCommand {
    constructor(
      public readonly id?: string,
      public readonly bio?: string,
    ) {}
}

export class SetStudentProfileTagsCommand {
    constructor(
      public readonly id?: string,
      public readonly tags?: string,
    ) {}
}

export class SetStudentProfileSocialMediaCommand {
    constructor(
      public readonly id: string,
      public readonly type: SocialMedia,
      public readonly link: string,

    ) {}
}

export class SetStudentProfileLocationCommand {
    constructor(
      public readonly id?: string,
      public readonly location?: string,
    ) {}
}

export class SetStudentProfileEmailCommand {
    constructor(
      public readonly id?: string,
      public readonly email?: string,
    ) {}
}

export class SetStudentProfileFilesCommand {
    constructor(
      public readonly id?: string,
      public readonly fileCategory?: FileCategory,
      public readonly filePath?: string,
      public readonly fileExtension?: string,
    ) {}
}

export class SetStudentProfileEmploymentStatusCommand {
    constructor(
      public readonly id?: string,
      public readonly status?: string,
    ) {}
}

export class SetStudentProfilePhoneNumberCommand {
    constructor(
      public readonly id?: string,
      public readonly phoneNumber?: string,
    ) {}
}

export class SetStudentProfileDegreeNameCommand {
    constructor(
      public readonly id?: string,
      public readonly degreeName?: string,
    ) {}
}

