import { CompanyRepresentative, CompanyRepresentativeCreate } from '@graduates/api/company-representative/api/shared/data-access';
import { Injectable } from '@nestjs/common';
import { QueryBus,CommandBus } from '@nestjs/cqrs';
import { User ,Prisma, Role, PermissionType, PermissionCategory, PermissionTenant, SocialMedia} from '@prisma/client';
import { GetAllRepresentatives } from './queries/impl/getAllRepresentatives.query';
import { GetOneRepresentativeQuery } from './queries/impl/getOneRepresentative.query';
import { CreateCompanyRepresentative } from './commands/impl';
import { UpdateRepresentative } from './commands/impl/updateRepresentative.command';
import { DeleteRepresentative } from './commands/impl/deleteRepresentative.command';

@Injectable()
export class ApiCompanyRepresentativeService {

  constructor(private readonly queryBus:QueryBus,private readonly commandBus:CommandBus){}
    async create(
        data: CompanyRepresentative
      ): Promise<CompanyRepresentativeCreate> {
        return data as any;
      }
    
      async findOneById(id: string): Promise<CompanyRepresentative> {
        const data = {
          id: id,
          name: 'Austin Smith',
          Occupation: 'Software Engineer',
          experience: 'Worked both frontend and backend develop.',
          about_me: 'Very Chilled',
          email: 'austinsmith@gmail.com',
          phone_no: '071 654 987',
          website: 'austin.com',
          connection: ['Amanda CEO', 'Chris Founder'],
        };
    
        return data;
      }
    
      async findAll(): Promise<CompanyRepresentative[]> {
        return [] as CompanyRepresentative[];
      }
    
      async remove(id: number): Promise<boolean> {
        return true;
      }

  async getAll():Promise<User|null>{
    return this.queryBus.execute(new GetAllRepresentatives());
  }

  async getOne(id:string):Promise<User|null>{
    return this.queryBus.execute(new GetOneRepresentativeQuery(id));
  }

  /***
   * Re: You have to execute the command/query handler using the original commmand/query
   * 
   * supply dates in the following format: 2018-12-10 13:45:00.000
   * This is the dateTime format in the schema
   */

  async createRep(id:string,email:string,password:string,passwordSalt:string,name:string,dateOfBirth:string,companyId:string,created:string,suspended:boolean,validated:boolean,userIdScout:string,date:string,role:Role,permissionCategory:PermissionCategory,permissionType:PermissionType,permissionTenant:PermissionTenant,number:string,experience:string,type:SocialMedia,link:string):Promise<User|null> 
  {
    return this.commandBus.execute(new CreateCompanyRepresentative(id,email,password,passwordSalt,name,dateOfBirth,companyId,created,suspended,validated,userIdScout,date,role,permissionType,permissionCategory,permissionTenant,number,experience,type,link));
  }

  /***
   * Send in a json object with the changes the user wishes to make. the changes
   * must map directly to the schema e.g I want to update my email and have an Id of 77
   * 
   * data={"email":"vb@gmail.com"} id="77"
   * 
   * This solution is elegent, as creating a class my make nulls in the schema.
  */

  async updateRep(data:Prisma.UserUpdateInput,id:Prisma.UserWhereUniqueInput):Promise<User|null>
  {
    return this.commandBus.execute(new UpdateRepresentative(data,id))
  }

  /***
   * Deletes rep entity via id. Returns the deleted object
   * Don't worry about the type,simply pass a string
   */

  async deleteRep(id:Prisma.UserWhereUniqueInput):Promise<User|null>
  {
    return this.commandBus.execute(new DeleteRepresentative(id));
  }

  
}
