import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access';
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateRepresentative } from './commands/impl/createRepresentative.command';
import { DeleteRepresentativeCommand } from './commands/impl/deleteRepresentative.command';
import { GetAllRepresentatives } from './queries/impl/getAllRepresentatives.query';
import { GetCompanyRepresentativeQuery } from './queries/impl/getRepresentative.query';
import { GetCompanyRepresentativeLoginQuery } from './queries/impl/getRepresentativeLoginID.query';

@Injectable()
export class ApiCompanyRepresentativeService {

  constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus){}

  async getCompanyRepresentative(id: string) : Promise<CompanyRepresentative> {
    return this.queryBus.execute(new GetCompanyRepresentativeQuery(id));
  }  

  async login(email: string, password: string) : Promise<CompanyRepresentative> {
    return this.queryBus.execute(new GetCompanyRepresentativeLoginQuery(email, password));
  }  

  async deleteRepresentative(repId: string) {
    return this.commandBus.execute(new DeleteRepresentativeCommand(repId));
  }

  async getAllRepresentatives(){
    return this.queryBus.execute(new GetAllRepresentatives());
  }

  async createRepresentative(){
    return this.commandBus.execute(new CreateRepresentative)
  }

  
}
