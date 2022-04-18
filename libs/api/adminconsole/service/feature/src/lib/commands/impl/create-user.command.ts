import { Prisma } from "@prisma/client";

export class CreateUserCommand {
    constructor(
        public readonly data: Prisma.UserCreateInput
    ) {}
}
