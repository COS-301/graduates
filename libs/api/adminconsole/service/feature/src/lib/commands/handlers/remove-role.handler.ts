// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveRoleCommand } from "../impl/remove-role.command";

@CommandHandler(RemoveRoleCommand)
export class RemoveRoleHandler implements ICommandHandler<RemoveRoleCommand> {
    constructor(private readonly repo: Adminauthorization) {}

    async execute(command: RemoveRoleCommand): Promise<unknown> {
        return await this.repo.deleteUserRole(command.userID, command.permission)
    }
}
