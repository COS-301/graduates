import { CompanyRepresentativeRepository } from "@graduates/api/company-representative/repository/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateRepresentative } from "../impl/updateRepresentative.command";

@CommandHandler(UpdateRepresentative)
export class UpdateRepresentativeHandler implements ICommandHandler<UpdateRepresentative>
{
    constructor(private repository:CompanyRepresentativeRepository){}

    execute(command: UpdateRepresentative){

        if(command.type=="bio")
            return this.repository.updateRepBio(command.id,command.newData);
        else if(command.type=="number")
            return this.repository.updateRepContactNumber(command.id,command.newData);
        else if(command.type=="expirience")
            return this.repository.updateRepExprience(command.id,command.newData);
        else if(command.type=="location")
            return this.repository.updateRepLocation(command.id,command.newData); 
        else if(command.type=="name")
            return this.repository.updateRepName(command.id,command.newData);
        else 
            return null;
    }   
}