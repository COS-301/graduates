import { FileCategory, SocialMedia } from "@prisma/client";

export class SetStudentProfileNameEvent  {
    constructor(
      public readonly userId: string,
      public readonly name: string,
    ) {}
}

export class SetStudentProfileDateOfBirthEvent  {
    constructor(
      public readonly userId: string,
      public readonly dateOfBirth: string,
    ) {}
}

export class SetStudentProfileProfilePictureEvent  {
    constructor(
      public readonly userId: string,
      public readonly profilePicture: string,
    ) {}
}

export class SetStudentProfilePhoneNumberEvent  {
    constructor(
      public readonly userId: string,
      public readonly phoneNumber: string,
    ) {}
}

export class SetStudentProfileBioEvent  {
    constructor(
      public readonly userId: string,
      public readonly bio: string,
    ) {}
}

export class SetStudentProfileTagsEvent  {
    constructor(
      public readonly userId: string,
      public readonly tags: string,
    ) {}
}

export class SetStudentProfileSocialMediaEvent  {
    constructor(
      public readonly userId: string,
      public readonly type: SocialMedia,
      public readonly link: string
    ) {}
}

export class SetStudentProfileLocationEvent  {
    constructor(
      public readonly userId: string,
      public readonly location: string,
    ) {}
}

export class SetStudentProfileEmailsEvent  {
    constructor(
      public readonly userId: string,
      public readonly email: string,
    ) {}
}

export class SetStudentProfileFilesEvent  {
    constructor(
      public readonly userId: string,
      public readonly fileCategory?: FileCategory,
      public readonly filePath?: string,
      public readonly fileExtension?: string,
    ) {}
}

export class SetStudentProfileEmploymentStatusEvent  {
    constructor(
      public readonly userId: string,
      public readonly status: string,
    ) {}
}
export class SetStudentProfileDegreeNameEvent  {
    constructor(
      public readonly userId: string,
      public readonly degreeName: string,
    ) {}
}

