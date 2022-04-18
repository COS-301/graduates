import { CompanyReps, UserNumber, UserProfile } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { CompanyProfilePage } from '@graduates/api/companyprofilepage/repository/data-access'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User, UserEmail, UserLocation, UserSocialMedia } from '@prisma/client';
import { GetCompanyByIDQuery , GetCompanyEmailQuery, GetCompanyLocationQuery, GetCompanyNumberQuery, GetCompanySocialMediaQuery, GetCompanyBioQuery, GetCompanyRepQuery } from './api-companyprofilepage-service-query';


@QueryHandler(GetCompanyByIDQuery)
export class GetCompanyByIDHander implements IQueryHandler<GetCompanyByIDQuery> {
  constructor(private readonly repository: CompanyProfilePage) {}

  async execute(query: GetCompanyByIDQuery): Promise<User | null> {
    const { id }  = query;
    return this.repository.getCompanyById(id);
  }
}

@QueryHandler(GetCompanyNumberQuery)
export class GetCompanyNumberHander implements IQueryHandler<GetCompanyNumberQuery> {
  constructor(private readonly repository: CompanyProfilePage) {}

  async execute(query: GetCompanyNumberQuery): Promise<UserNumber | null> {
    const { id }  = query;
    return this.repository.getCompanyContactNumber(id);
  }
}

@QueryHandler(GetCompanyEmailQuery)
export class GetCompanyEmailHandler implements IQueryHandler<GetCompanyEmailQuery> {
  constructor(private readonly repository: CompanyProfilePage) {}

  async execute(query: GetCompanyNumberQuery): Promise<UserEmail[] | null> {
    const { id }  = query;
    return this.repository.getCompanyEmail(id);
  }
}

@QueryHandler(GetCompanyLocationQuery)
export class GetCompanyLocationHandler implements IQueryHandler<GetCompanyLocationQuery> {
  constructor(private readonly repository: CompanyProfilePage) {}

  async execute(query: GetCompanyLocationQuery): Promise<UserLocation[] | null> {
    const { id }  = query;
    return this.repository.getCompanyLocations(id);
  }
}


@QueryHandler(GetCompanySocialMediaQuery)
export class GetCompanySocialMediaHandler implements IQueryHandler<GetCompanySocialMediaQuery> {
  constructor(private readonly repository: CompanyProfilePage) {}

  async execute(query: GetCompanySocialMediaQuery): Promise<UserSocialMedia[] | null> {
    const { id }  = query;
    return this.repository.getCompanySocialMedia(id);
  }
}

@QueryHandler(GetCompanyBioQuery)
export class GetCompanyBioHandler implements IQueryHandler<GetCompanyBioQuery> {
  constructor(private readonly repository: CompanyProfilePage) {}

  async execute(query: GetCompanyBioQuery): Promise<UserProfile | null> {
    const { id }  = query;
    return this.repository.getCompanyProfile(id);
  }
}

@QueryHandler(GetCompanyRepQuery)
export class GetCompanyRepHandler implements IQueryHandler<GetCompanyRepQuery> {
  constructor(private readonly repository: CompanyProfilePage) {}

  async execute(query: GetCompanyRepQuery): Promise<User[] | null> {
    const { id }  = query;
    return this.repository.getCompanyRepById(id);
  }
}


