import { Resolver, Query, ID, Args } from "@nestjs/graphql";
import { ApiAccessStatusEntity } from "./api-access-status.entity";
import { ApiAccessStatusService } from "./api-access-status.service";

@Resolver(of => ApiAccessStatusEntity)
export class ApiAccessStatusResolver {
    constructor(private accessStatusService: ApiAccessStatusService) {}

    @Query(returns => [ApiAccessStatusEntity])
    async status(@Args('compID', { type: () => ID }) compId: string, @Args('gradID', { type: () => ID }) gradId: string): Promise<ApiAccessStatusEntity[]> {
        return this.accessStatusService.getAll(compId, gradId);
    }
}