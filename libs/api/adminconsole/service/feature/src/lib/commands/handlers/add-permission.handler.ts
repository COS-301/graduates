// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddPermissionCommand } from "../impl/add-permission.command";

@CommandHandler(AddPermissionCommand)
export class AddPermissionHandler implements ICommandHandler<AddPermissionCommand> {
    constructor(private readonly repo: Adminauthorization) {}

    async execute(command: AddPermissionCommand) {
        await this.repo.addUniquePermission(command.users.id, command.data)
    }
}
