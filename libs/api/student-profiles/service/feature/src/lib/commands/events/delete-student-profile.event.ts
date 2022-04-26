import { FileCategory, SocialMedia } from "@prisma/client";

export class DeleteStudentProfileNameEvent  {
    constructor(
      public readonly userId: string,
      public readonly name?: string,
    ) {}
}

export class DeleteStudentProfileDateOfBirthEvent  {
    constructor(
      public readonly userId: string,
      public readonly dateOfBirth?: string,
    ) {}
}

export class DeleteStudentProfileProfilePictureEvent  {
    constructor(
      public readonly userId: string,
      public readonly profilePicture?: string,
    ) {}
}

export class DeleteStudentProfilePhoneNumberEvent  {
    constructor(
      public readonly userId: string,
      public readonly phoneNumber?: string,
    ) {}
}

export class DeleteStudentProfileBioEvent  {
    constructor(
      public readonly userId: string,
      public readonly bio?: string,
    ) {}
}

export class DeleteStudentProfileTagsEvent  {
    constructor(
      public readonly userId: string,
      public readonly tags?: string,
    ) {}
}

export class DeleteStudentProfileSocialMediaEvent  {
    constructor(
      public readonly userId: string,
      public readonly type?: SocialMedia,
      public readonly link?: string
    ) {}
}

export class DeleteStudentProfileLocationEvent  {
    constructor(
      public readonly userId: string,
      public readonly location?: string,
    ) {}
}

export class DeleteStudentProfileEmailsEvent  {
    constructor(
      public readonly userId: string,
      public readonly email?: string,
    ) {}
}

export class DeleteStudentProfileFilesEvent  {
    constructor(
      public readonly userId: string,
      public readonly fileCategory?: FileCategory,
      public readonly filePath?: string,
      public readonly fileExtension?: string,
    ) {}
}

export class DeleteStudentProfileEmploymentStatusEvent  {
    constructor(
      public readonly userId: string,
      public readonly status?: string,
    ) {}
}
export class DeleteStudentProfileDegreeNameEvent  {
    constructor(
      public readonly userId: string,
      public readonly degreeName?: string,
    ) {}
}

