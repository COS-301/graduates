import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UnsuspendUserCommand } from "../impl/unsuspend-user.command";

@CommandHandler(UnsuspendUserCommand)
export class UnsuspendUserHandler implements ICommandHandler<UnsuspendUserCommand> {
    constructor(private readonly repo: PrismaService) {}

    async execute(command: UnsuspendUserCommand): Promise<unknown> {
        const {data, where} = command.arg;
        return await this.repo.user.update({
            data,
            where
        });
    }
}
