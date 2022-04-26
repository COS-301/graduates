import { CompanyRepresentativeRepository } from "@graduates/api/company-representative/repository/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateRepresentative } from "../impl/updateRepresentative.command";

@CommandHandler(UpdateRepresentative)
export class UpdateRepresentativeHandler implements ICommandHandler<UpdateRepresentative>
{
    constructor(private repository:CompanyRepresentativeRepository){}

    execute(command: UpdateRepresentative){
        this.repository.updateRepName(command.representative.id, command.representative.repName);
        this.repository.updateRepExprience(command.representative.id, command.representative.repExperience);
        this.repository.updateRepContactNumber(command.representative.id, command.representative.phoneNumber);
        this.repository.updateRepLocation(command.representative.id, command.representative.location);
        this.repository.updateRepEmail(command.representative.id, command.representative.email);
        this.repository.updateSocial(command.representative.id, "LINKEDIN", command.representative.linkedIn);
        this.repository.updateSocial(command.representative.id, "TWITTER", command.representative.twitter);
        this.repository.updateSocial(command.representative.id, "INSTAGRAM", command.representative.instagram);
        this.repository.updateSocial(command.representative.id, "FACEBOOK", command.representative.facebook);
        this.repository.updateSocial(command.representative.id, "SNAPCHAT", command.representative.snapChat);
        this.repository.updateSocial(command.representative.id, "GITHUB", command.representative.gitHub);
        return this.repository.getRepresentativeUser(command.representative.id);
    }   
}