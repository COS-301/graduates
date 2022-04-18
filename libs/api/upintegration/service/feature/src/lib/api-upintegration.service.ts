//TODO: create Student model on service layer
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { 
  GetStudentInfoNameQuery, 
  GetStudentInfoEmailQuery, 
  GetStudentInfoPhoneNumberQuery, 
  GetStudentInfoDegreeQuery,
  GetStudentInfoIDQuery,
} from './queries/api-upintegration-getStudentInfo.query';
  
@Injectable()
export class ApiUpIntegrationService {

  constructor(
    private readonly queryBus: QueryBus,
  ) {}

  async get_name(userid : string): Promise<string | null> {
    return await this.queryBus.execute( new GetStudentInfoNameQuery(userid))
  }

  async get_ID(studentNum : string): Promise<string | null> {
    return await this.queryBus.execute( new GetStudentInfoIDQuery(studentNum))
  }
  
  async get_email(userid : string): Promise<string | null> {
    return await this.queryBus.execute( new GetStudentInfoEmailQuery(userid))
  }
  
  async get_Degree(userid : string): Promise<string | null> {
    return await this.queryBus.execute( new GetStudentInfoDegreeQuery(userid))
  }

  async get_PhoneNumber(userid : string): Promise<string | null> {
    return await this.queryBus.execute( new GetStudentInfoPhoneNumberQuery(userid))
  }
}