import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UnarchiveStroryCommand } from "../impl/unarchive-strory.command";

@CommandHandler(UnarchiveStroryCommand)
export class UnarchiveStroryHandler implements ICommandHandler<UnarchiveStroryCommand> {
    constructor(private readonly repo: PrismaService) {}

    async execute(command: UnarchiveStroryCommand) {
        const {data, where} = command.arg;
        await this.repo.short.update({
            data, 
            where
        });
    }
}
