export class CreateStudentProfileCommand {
    constructor(
      public readonly id: string,
      public readonly studentNum: string,
      public readonly firstName: string,
      public readonly lastName: string,
      public readonly title: string,
      public readonly email: string,
      public readonly phoneNum: string,
      public readonly dateOfBirth: string,
      public readonly nameOfDegree: string,
      public readonly bio: string,
      public readonly tags: string[],
      public readonly preferredLocation: string,
      public readonly employmentStatus: string,
      public readonly notableAchievements: string,
      public readonly links: string[],
      public readonly academicRecod: string,
      public readonly cv: string,
      public readonly capstoneProject: string
    ) {}
  }