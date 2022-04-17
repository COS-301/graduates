import { CompanyRepresentativeRepository } from "@graduates/api/company-representative/repository/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateRepresentative } from "../impl/createRepresentative.command";


@CommandHandler(CreateRepresentative)
export class CreateRepresentativeHandler implements ICommandHandler<CreateRepresentative>
{
    constructor(private repository:CompanyRepresentativeRepository){}

    execute(command: CreateRepresentative){
        return null; //insert command from repository layer here
    }
}