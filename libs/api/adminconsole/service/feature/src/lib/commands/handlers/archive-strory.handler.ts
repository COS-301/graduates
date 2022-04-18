import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ArchiveStroryCommand } from "../impl/archive-strory.command";

@CommandHandler(ArchiveStroryCommand)
export class ArchiveStroryHandler implements ICommandHandler<ArchiveStroryCommand> {
    constructor(private readonly repo: PrismaService) {}

    async execute(command: ArchiveStroryCommand) {
        const {data, where} = command.arg;
        await this.repo.short.update({
            data, 
            where
        });
    }
}
