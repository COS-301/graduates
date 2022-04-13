import { User } from "@prisma/client";
import { UpdateRepresentative } from "../impl/updateRepresentative.command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DataAccess } from "@graduates/api/company-representative/repository";


@CommandHandler(UpdateRepresentative)
export class UpdateRepresentativeHandler implements ICommandHandler<UpdateRepresentative>
{
    constructor(private readonly dataAccess:DataAccess)
    {}
  
    /**
     * Update we need to pass an object that has data(to update) and a where 
     * clause
     */
    async execute(command:UpdateRepresentative): Promise<User|null>{
        return this.dataAccess.updateRep(command.updates,command.where);
    }
  
}
