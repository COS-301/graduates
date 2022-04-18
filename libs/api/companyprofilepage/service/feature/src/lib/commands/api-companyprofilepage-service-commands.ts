import { UpdateBioInput } from "@graduates/api/companyprofilepage/api/shared/data-access";

export class UpdateCompanyBioCommand {
    constructor(public readonly companyBio: UpdateBioInput) {}
  }