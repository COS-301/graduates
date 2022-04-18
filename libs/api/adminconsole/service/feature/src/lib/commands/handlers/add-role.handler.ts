// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddRoleCommand } from "../impl/add-role.command";

@CommandHandler(AddRoleCommand)
export class AddRoleHandler implements ICommandHandler<AddRoleCommand> {
    constructor(private readonly repo: Adminauthorization) {}

    async execute(command: AddRoleCommand) {
        await this.repo.addUserRole(command.users.id, command.data)
    }
}
