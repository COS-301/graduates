import { CompanyRepresentativeRepository } from '@graduates/api/company-representative/repository/data-access'
import { CommandHandler, ICommandHandler} from '@nestjs/cqrs'
import { DeleteRepresentativeCommand } from '../impl/deleteRepresentative.command'

@CommandHandler(DeleteRepresentativeCommand)
export class DeleteRepresentativeHandler implements ICommandHandler<DeleteRepresentativeCommand> {
    constructor(private repository: CompanyRepresentativeRepository){}

    async execute(command: DeleteRepresentativeCommand) {
        return this.repository.deleteRepresentative(command.repID);
    }

}