// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemovePermissionCommand } from "../impl/remove-permission.command";

@CommandHandler(RemovePermissionCommand)
export class RemovePermissionHandler implements ICommandHandler<RemovePermissionCommand> {
    constructor(private readonly repo: Adminauthorization) {}

    async execute(command: RemovePermissionCommand): Promise<unknown> {
        return await this.repo.deleteUniquePermission(command.userID, command.where);
    }
}
