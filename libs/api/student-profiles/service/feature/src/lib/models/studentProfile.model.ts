import { AggregateRoot } from "@nestjs/cqrs";

export class StudentProfile extends AggregateRoot {
    constructor() {
      super();
    }

    id?: string;
    studentNum?: string;
    firstName?: string;
    lastName?: string;
    title?: string;
    email?: string;
    phoneNum?: string;
    dateOfBirth?: string;
    nameOfDegree?: string;
    bio?: string;
    tags?: string[];
    preferredLocation?: string;
    employmentStatus?: string;
    notableAchievements?: string;
    links?: string[];
    academicRecod?: string;
    cv?: string;
    capstoneProject?: string;

  }