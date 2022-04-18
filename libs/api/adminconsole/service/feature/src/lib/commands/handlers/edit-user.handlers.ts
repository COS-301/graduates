import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { EditUserCommand } from "../impl/edit-user.command";

@CommandHandler(EditUserCommand)
export class EditUserHandlers implements ICommandHandler<EditUserCommand>{
    constructor(private readonly repo: PrismaService) {}

    async execute(command: EditUserCommand): Promise<unknown> {
        const {data, where} = command.arg;
       return await this.repo.user.update({
           data,
           where
       });
    }
}
