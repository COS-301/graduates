import { Injectable } from '@nestjs/common';
import { ApiAccessStatusEntity } from "@graduates/api/access-status/api/feature";
@Injectable()
export class AccessStatusService {
    async getAccessStatus(companyID: string, gradID: string): Promise<ApiAccessStatusEntity[]> {
        const accessStatus = new ApiAccessStatusEntity();
        
        if (gradID == "42") {
            accessStatus.item = "CV";
            accessStatus.accessStatus = "Pending";
        } else {
            accessStatus.item = "Academic Record";
            accessStatus.accessStatus = "Rejected";
        }

        return [accessStatus];
      }
}
