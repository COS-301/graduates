import { AggregateRoot } from "@nestjs/cqrs";

export class studentInfo extends AggregateRoot {
    constructor() {
      super();
    }

    id?: string;
    title?: string;
    name?: string;
    surname?: string;
    email?: string;
    studentNo?: string;
    phoneNo?: string;
    dateOfBirth?: string;
    academicRecord?: string;
    degree?: string;
}