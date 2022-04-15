import { CompanyRepresentative, CompanyRepresentativeCreate } from '@graduates/api/company-representative/api/shared/data-access';
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { User,Prisma, SocialMedia } from '@prisma/client';
import { CreateCompanyRepresentative } from './commands/impl/createRepresentative.command';
import { GetAllRepresentatives } from './queries/impl/getAllRepresentatives.query';
import { GetOneRepresentative } from './queries/impl/getOneRepresentative.query';

@Injectable()
export class ApiCompanyRepresentativeService {

  constructor(private readonly queryBus:QueryBus, private readonly commandBus:CommandBus){}

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
  ///////////////////////////////////////////////////////////////////////////////

  /***
   * This function simply returns all representatives without taking an argument
   */

  async getAllReps():Promise<User|null>
  {
    return this.queryBus.execute(new GetAllRepresentatives());
  }

  /***
   * @returns User|null
   * 
   * @param id
   * 
   * It takes a string id as an argument the string Id will be used to return the unique user
   * supply dates in the following format:1940-12-10T13:45:00.000Z
   */

  async getOneRep(id:string):Promise<User|null>
  {
   
    //this.createRep('000','000','000','0000','0000','000','0000','0000',true,false,'0000','000','0000','0000','000','0000')
    return this.queryBus.execute(new GetOneRepresentative({id}));
  }

  /***
   * @returns User|null
   * @params user details relevant to the company representative
   * 
   */

   async createRep(id:string,email:string,password:string,passwordSalt:string,name:string,dateOfBirth:string,companyId:string,created:string,suspended:boolean,validated:boolean,userScout:Prisma.UserCreateNestedOneWithoutUserScoutInput, date:string,number:string, experience:string,type:SocialMedia,link:string,bio:string):Promise<User|null> 
  {
    return this.commandBus.execute(new CreateCompanyRepresentative(id,email,password,passwordSalt,name,dateOfBirth,companyId,created,suspended,validated,userScout,date,number,experience,type,link,bio));
  }

  
}
