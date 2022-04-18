import { CompanyProfilePage } from "@graduates/api/companyprofilepage/repository/data-access";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserProfile } from "@prisma/client";
import { UpdateCompanyBioCommand } from "./api-companyprofilepage-service-commands";



@CommandHandler(UpdateCompanyBioCommand)
export class UpdateCompanyBioHandler implements ICommandHandler<UpdateCompanyBioCommand> {
  constructor(private readonly repository: CompanyProfilePage) {}

  async execute(command: UpdateCompanyBioCommand): Promise<UserProfile | null> {
    const { companyBio } = command;

    return this.repository.editCompanyProfile(companyBio);
  }
}