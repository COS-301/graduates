import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemovePermissionCommand } from "../impl/remove-permission.command";

@CommandHandler(RemovePermissionCommand)
export class RemovePermissionHandler implements ICommandHandler<RemovePermissionCommand> {
    constructor(private readonly repo: PrismaService) {}

    async execute(command: RemovePermissionCommand): Promise<unknown> {
        const where = command.permission.where;
        return await this.repo.userPermissions.delete({where});
    }
}
