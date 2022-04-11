import { Injectable } from "@nestjs/common";
import { ApiAccessStatusEntity } from "./api-access-status.entity";

@Injectable()
export class ApiAccessStatusService {
    async getAll(compId: string, gradId): Promise<ApiAccessStatusEntity[]> {

        const accessStatus = new ApiAccessStatusEntity();
        if (gradId == "42") {
            accessStatus.userID = "u00000000";
            accessStatus.item = "CV";
            accessStatus.accessStatus = "Pending";
        } else {
            accessStatus.userID = "u00000001";
            accessStatus.item = "Academic Record";
            accessStatus.accessStatus = "Rejected";
        }

        return [accessStatus];
    }
}