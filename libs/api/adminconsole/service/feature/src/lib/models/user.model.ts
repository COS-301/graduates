import { AggregateRoot } from "@nestjs/cqrs";

export class UserModel extends AggregateRoot {
    constructor() {
        super();
    }
}
