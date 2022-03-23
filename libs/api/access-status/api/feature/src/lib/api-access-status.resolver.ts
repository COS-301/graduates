import { Resolver, Query } from "@nestjs/graphql";
import { ApiAccessStatusEntity } from "./api-access-status.entity";
import { ApiAccessStatusService } from "./api-access-status.service";

@Resolver(of => ApiAccessStatusEntity)
export class ApiAccessStatusResolver {
    constructor(private accessStatusService: ApiAccessStatusService) {}

    @Query(returns => [ApiAccessStatusEntity])
    status(): Promise<ApiAccessStatusEntity[]> {
        return this.accessStatusService.getAll();
    }
}