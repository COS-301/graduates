import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddPermissionCommand } from "../impl/add-permission.command";

@CommandHandler(AddPermissionCommand)
export class AddPermissionHandler implements ICommandHandler<AddPermissionCommand> {
    constructor(private readonly repo: PrismaService) {}

    async execute(command: AddPermissionCommand): Promise<unknown> {
        const data = command.data;
        return await this.repo.userPermissions.create({data});
    }
}
