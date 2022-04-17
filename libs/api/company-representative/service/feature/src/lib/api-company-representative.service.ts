import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access';
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetCompanyRepresentativeQuery } from './queries/impl/getCompanyRepresentative.query';
import { GetCompanyRepresentativeLoginQuery } from './queries/impl/getCompanyRepresentativeLogin.query';

@Injectable()
export class ApiCompanyRepresentativeService {

  constructor(private readonly queryBus: QueryBus){}

  async getCompanyRepresentative(id: string) : Promise<CompanyRepresentative> {
    return this.queryBus.execute(new GetCompanyRepresentativeQuery(id));
  }  

  async login(email: string, password: string) : Promise<CompanyRepresentative> {
    return this.queryBus.execute(new GetCompanyRepresentativeLoginQuery(email, password));
  }  
}
