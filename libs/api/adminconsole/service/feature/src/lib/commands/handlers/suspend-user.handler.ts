import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { SuspendUserCommand } from "../impl/suspend-user.command";

@CommandHandler(SuspendUserCommand)
export class SuspendUserHandler implements ICommandHandler<SuspendUserCommand> {
    constructor(private readonly repo: PrismaService) {}

    async execute(command: SuspendUserCommand): Promise<unknown> {
        const {data, where} = command.arg;
        return await this.repo.user.update({
            data,
            where
        });
    }
}
