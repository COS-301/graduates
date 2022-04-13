import { Injectable } from "@nestjs/common";
import { ApiAccessStatusEntity } from "./api-access-status.entity";

@Injectable()
export class ApiAccessStatusService {
    async getAll(compId: string, gradId: string): Promise<ApiAccessStatusEntity[]> {

        const accessStatus = new ApiAccessStatusEntity();
        if (gradId == "42") {
            accessStatus.item = "CV";
            accessStatus.accessStatus = "Pending";
        } else {
            accessStatus.item = "Academic Record";
            accessStatus.accessStatus = "Rejected";
        }

        return [accessStatus];
    }
}