import { Injectable } from '@nestjs/common';
import { ApiCompanyProfilePage, CompanyReps, UpdateBioInput, UserEmail, UserLocation, UserNumber, UserProfile, UserSocialMedia } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetCompanyBioQuery, GetCompanyByIDQuery, GetCompanyEmailQuery, GetCompanyLocationQuery, GetCompanyNumberQuery, GetCompanySocialMediaQuery, GetCompanyRepQuery} from './queries/api-companyprofilepage-service-query';
import { UpdateCompanyBioCommand } from './commands/api-companyprofilepage-service-commands';


@Injectable()
export class ApicompanyprofilepageServiceFeatureModule {
  
constructor(private readonly queryBus: QueryBus,   private commandBus: CommandBus) {}

  async getCompanyWithID(id: string): Promise<ApiCompanyProfilePage> {
    return await this.queryBus.execute(new GetCompanyByIDQuery(id));
  }

  async getCompanyEmail(id: string): Promise<UserEmail[]>{
    return await this.queryBus.execute(new GetCompanyEmailQuery(id));
  }

  async getCompanyLocation(id: string): Promise<UserLocation[]>{
    return await this.queryBus.execute(new GetCompanyLocationQuery(id));
  }

  async getCompanySocialMedia(id: string): Promise<UserSocialMedia[]>{
    return await this.queryBus.execute(new GetCompanySocialMediaQuery(id));
  }

  async getCompanyNumber(id: string): Promise<UserNumber>{
    return await this.queryBus.execute(new GetCompanyNumberQuery(id));
  }

  async getCompanyBio(id: string): Promise<UserProfile>{
    return await this.queryBus.execute(new GetCompanyBioQuery(id));
  }

  async getCompanyReps(id: string): Promise<CompanyReps[]>{
    return await this.queryBus.execute(new GetCompanyRepQuery(id));
  }

  async updateCompanyBio(companyBio: UpdateBioInput): Promise<UserProfile | null> {
    return await this.commandBus.execute(new UpdateCompanyBioCommand(companyBio));
  }
  
}
