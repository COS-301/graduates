export class getStudentInfoEvent {
    constructor(
      public readonly id: string,
      public readonly studentNo?: string,
      public readonly title?: string,
      public readonly name?: string,
      public readonly surname?: string,
      public readonly email?: string,
      public readonly phoneNo?: string,
      public readonly dateOfBirth?: string,
      public readonly academicRecord?: string,
      public readonly degree?: string,
    ) {}
  }