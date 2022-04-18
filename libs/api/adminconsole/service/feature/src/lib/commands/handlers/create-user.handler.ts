import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { User } from "@prisma/client";
import { CreateUserCommand } from "../impl/create-user.command";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(private readonly repository: PrismaService) {}

    async execute(command: CreateUserCommand): Promise<User> {
        const data = command.data
        return this.repository.user.create({data,});
    }
}
