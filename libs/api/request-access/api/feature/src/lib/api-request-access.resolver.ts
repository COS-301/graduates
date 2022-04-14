import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { ApiRequestAccessEntity } from "./api-request-access.entity";
import { ApiRequestAccessService } from "./api-request-access.service";

@Resolver(of => ApiRequestAccessEntity)
export class ApiRequestAccessResolver {
    constructor(private requestAccessService: ApiRequestAccessService) {}

    @Mutation(returns => ApiRequestAccessEntity, { nullable: true })
    // must add paramters to request
    async requestAccess(@Args('compId', { type: () => ID }) compId: string, @Args('gradId', { type: () => ID }) gradId: string, @Args('item') item: string): Promise<ApiRequestAccessEntity> {
        if (compId == "" || gradId == "" || item == "") // obviously empty elements are not allowed
            return null;

        // if new items become available add here
        if (!["CV", "Transcript", "Academic", "Certificates", "Capstone"].includes(item)) // if a valid item has been requested
            return null;

        return this.requestAccessService.makeRequest();
    }
}