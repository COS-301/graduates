import { ApiRequestAccessEntity } from "../../../../api/feature/src/lib/api-request-access.entity";
import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestAccessService {
    async getAccessEntity(companyID: string, userID: string, item: string): Promise<ApiRequestAccessEntity> {
        const entity = {
          companyID: companyID,
          userID: userID,
          item: item,
        };
    
        return entity;
      }
}
