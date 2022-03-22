import { Injectable } from "@nestjs/common";
import { ApiAccessStatusEntity } from "./api-access-status.entity";

@Injectable()
export class ApiAccessStatusService {
    async getAll(): Promise<ApiAccessStatusEntity[]> {
        const accessStatus = new ApiAccessStatusEntity();
        accessStatus.UserID = "u04515146";
        accessStatus.item = "CV";
        accessStatus.accessStatus = "Pending"

        return [accessStatus];
    }
}