import { Injectable } from '@nestjs/common';
import { AccessStatusRepository } from "@graduates/api/access-status/repository/feature";
import { Item } from '@prisma/client';
import { ApiAccessStatusEntity } from '@graduates/api/access-status/api/shared';

@Injectable()
export class AccessStatusService {
    constructor(
        private readonly repository: AccessStatusRepository
      ) {}

    async getAccessStatus(companyID: string, gradID: string): Promise<ApiAccessStatusEntity[]> {
        const result = await this.repository.findRequestByStudIdCompId(gradID, companyID);
        const arrAccessEntities = [];         
            
        for(let i = 0; i < result.length ; i++)
        {
            const accessStatus = new ApiAccessStatusEntity();

            accessStatus.item =  result[i].ItemId;
            if(result[i].Accepted === false)
              accessStatus.accessStatus = "Pending";
            else
              accessStatus.accessStatus = "Download";

            arrAccessEntities.push(accessStatus);
        }
    
        return arrAccessEntities;
      }
}