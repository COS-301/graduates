import { CompanyRepresentativeRepository } from '@graduates/api/company-representative/repository/data-access'
import { CommandHandler, ICommandHandler} from '@nestjs/cqrs'
import { GetDefaultRepresentativeCommand } from '../impl/getDefaultRepresentative.command';

@CommandHandler(GetDefaultRepresentativeCommand)
export class GetDefaultRepresentativeHandler implements ICommandHandler<GetDefaultRepresentativeCommand> {
    constructor(private repository: CompanyRepresentativeRepository){}

    async execute() {
        return this.repository.createDefaultRep();
    }

}