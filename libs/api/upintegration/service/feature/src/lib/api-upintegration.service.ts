//TODO: create Student model on service layer
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { getStudentInfoDOBQuery, getStudentInfoEmailsQuery, getStudentInfoFilesQuery, getStudentInfoNameQuery } from './queries/impl';
  
@Injectable()
export class ApiupintegrationService {

  constructor(private commandBus: CommandBus) {}

  async get_name(userid : string) {
    return await this.commandBus.execute( new getStudentInfoNameQuery(userid))
  }

  async getDoB(userid : string) {
    return await this.commandBus.execute( new getStudentInfoDOBQuery(userid))
  }
  
  async get_emails(userid : string) {
    return await this.commandBus.execute( new getStudentInfoEmailsQuery(userid))
  }
  
  async get_files(userid : string) {
    return await this.commandBus.execute( new getStudentInfoFilesQuery(userid))
  }
}