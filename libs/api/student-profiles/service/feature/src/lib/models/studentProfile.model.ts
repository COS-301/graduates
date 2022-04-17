import { AggregateRoot } from "@nestjs/cqrs";
import { FileCategory } from "@prisma/client";

export class StudentProfile extends AggregateRoot {
    constructor() {
      super();
    }
    userId?: string;
    name?: string;
    dateOfBirth?: string;
    profilePicture?;
    phoneNumber?: string;
    bio?: string;
    tags?: string;
    link?: string;
    socialMedia?: string;
    location?: string;
    email?: string;
    files?: FileCategory;
    employmentStatus?: string;
    degreeName?: string;
  }