import { Injectable } from '@nestjs/common';
import { ApiCompanyProfilePage, UserEmail, UserLocation, UserNumber, UserSocialMedia } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { QueryBus } from '@nestjs/cqrs';
import { GetCompanyByIDQuery, GetCompanyEmailQuery, GetCompanyLocationQuery, GetCompanyNumberQuery, GetCompanySocialMediaQuery } from './queries/api-companyprofilepage-service-query';

@Injectable()
export class ApicompanyprofilepageServiceFeatureModule {
  constructor(private readonly queryBus: QueryBus) {}

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

}
