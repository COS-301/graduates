import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteRepresentative } from "../impl/deleteRepresentative.command";
import { DataAccess } from "@graduates/api/company-representative/repository";

@CommandHandler(DeleteRepresentative)
export class DeleteRepresentativeHandler implements ICommandHandler<DeleteRepresentative>
{
    constructor(private readonly dataAccess:DataAccess){}

    async execute(command: DeleteRepresentative): Promise<any> {
        return this.dataAccess.deleteRep(command.id)
    }
}