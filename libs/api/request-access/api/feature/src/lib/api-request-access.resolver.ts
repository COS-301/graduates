import { Mutation, Resolver } from "@nestjs/graphql";
import { ApiRequestAccessEntity } from "./api-request-access.entity";
import { ApiRequestAccessService } from "./api-request-access.service";

@Resolver(of => ApiRequestAccessEntity)
export class ApiRequestAccessResolver {
    constructor(private requestAccessService: ApiRequestAccessService) {}

    @Mutation(returns => ApiRequestAccessEntity)
    // must add paramters to request
    requestAccess(): Promise<ApiRequestAccessEntity> {
        return this.requestAccessService.makeRequest();
    }
}