import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access';
import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { QueryBus } from '@nestjs/cqrs';
import { GetCompanyRepresentativeQuery } from './queries/impl/getCompanyRepresentative.query';
import { GetCompanyRepresentativeLoginQuery } from './queries/impl/getCompanyRepresentativeLogin.query';

=======
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateRepresentative } from './commands/impl/createRepresentative.command';
import { DeleteRepresentativeCommand } from './commands/impl/deleteRepresentative.command';
import { GetAllRepresentatives } from './queries/impl/getAllRepresentatives.query';
import { GetCompanyRepresentativeQuery } from './queries/impl/getRepresentative.query';
import { GetCompanyRepresentativeLoginQuery } from './queries/impl/getRepresentativeLoginID.query';
import { UpdateRepresentative } from './commands/impl/updateRepresentative.command';
import { GetDefaultRepresentativeCommand } from './commands/impl/getDefaultRepresentative.command';
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
@Injectable()
export class ApiCompanyRepresentativeService {

  constructor(private readonly queryBus: QueryBus){}

  async getCompanyRepresentative(id: string) : Promise<CompanyRepresentative> {
    return this.queryBus.execute(new GetCompanyRepresentativeQuery(id));
  }  

  async login(email: string, password: string) : Promise<CompanyRepresentative> {
    return this.queryBus.execute(new GetCompanyRepresentativeLoginQuery(email, password));
  }  
<<<<<<< HEAD
=======

  /***
   * 
   * This function deletes a user by accepting a representative Id
   */

  async deleteRepresentative(repId: string) {
    return this.commandBus.execute(new DeleteRepresentativeCommand(repId));
  }

  /***
   * This function is used to get All representatives from the datbase
   */
  async getAllRepresentatives(){
    return this.queryBus.execute(new GetAllRepresentatives());
  }

  /***
   * This function is used to create a new Representative
   * *WORK IN PROGRESS!*
   */

  async createRepresentative(){
    return this.commandBus.execute(new CreateRepresentative);
  }

  /***
   * Update the attributes of the dataBase accoring to these types of updates:
   * bio
   * name
   * number
   * expirience
   * loaction
   */

  async UpdateRepresentative(id:string,newData:string,type:string)
  {
    return this.commandBus.execute(new UpdateRepresentative(id,newData,type));
  }

  async createDefaultRepresentative(){
    return this.commandBus.execute(new GetDefaultRepresentativeCommand("c1234"));
  }
  
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
}
