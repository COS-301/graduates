import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddRoleCommand } from "../impl/add-role.command";

@CommandHandler(AddRoleCommand)
export class AddRoleHandler implements ICommandHandler<AddRoleCommand> {
    constructor(private readonly repo: PrismaService) {}

    async execute(command: AddRoleCommand): Promise<unknown> {
        const data = command.data;
        return await this.repo.userRole.create({data});
    }
}
