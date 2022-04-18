import { Prisma} from "@prisma/client";

export class EditUserCommand {
    constructor(
        public readonly arg: {
            where: Prisma.UserWhereUniqueInput;
            data: Prisma.UserUpdateInput
        }
    ) {}
}
