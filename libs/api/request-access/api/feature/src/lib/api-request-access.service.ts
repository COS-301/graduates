import { Injectable } from "@nestjs/common";
import { ApiRequestAccessEntity } from "./api-request-access.entity";

@Injectable()
export class ApiRequestAccessService {
    async makeRequest(): Promise<ApiRequestAccessEntity> {
        const accessRequest = new ApiRequestAccessEntity();
        accessRequest.userID = "u00000000";
        accessRequest.companyID = "000000000"
        accessRequest.item = "CV";

        return accessRequest;
    }
}