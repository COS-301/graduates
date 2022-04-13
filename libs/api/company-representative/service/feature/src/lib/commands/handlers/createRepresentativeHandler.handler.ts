import { CommandHandler,ICommandHandler } from "@nestjs/cqrs";
import { CreateCompanyRepresentative } from "../impl";
import { User } from "@prisma/client";
import { DataAccess } from "@graduates/api/company-representative/repository";

@CommandHandler(CreateCompanyRepresentative)
export class CreateRepresentativeHandler implements ICommandHandler<CreateCompanyRepresentative>
{
    constructor(private readonly dataAccess:DataAccess){}

    async execute(command:CreateCompanyRepresentative): Promise<User|null>{
        
        return this.dataAccess.createRep(command);
    }
}

