import { ApiRequestAccessEntity } from "../../../../api/feature/src/lib/api-request-access.entity";
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAccessEntitiesQuery } from './queries/impl/get-access-entities.query';

@Injectable()
export class RequestAccessService {

  constructor(
    private readonly queryBus: QueryBus
  ) {}

  async getAccessEntity(companyID: string, userID: string, itemID: string): Promise<ApiRequestAccessEntity> {
      // return this.queryBus.execute(
      //   new GetAccessEntitiesQuery(companyID, userID, itemID)
      // )
      const entity = {
        companyID: companyID,
        userID: userID,
        item: itemID,
      };
  
      return entity;
    }
}
