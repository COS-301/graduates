import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveRoleCommand } from "../impl/remove-role.command";

@CommandHandler(RemoveRoleCommand)
export class RemoveRoleHandler implements ICommandHandler<RemoveRoleCommand> {
    constructor(private readonly repo: PrismaService) {}

    async execute(command: RemoveRoleCommand): Promise<unknown> {
        const where = command.permission.where;
        return await this.repo.userRole.delete({where});
    }
}
