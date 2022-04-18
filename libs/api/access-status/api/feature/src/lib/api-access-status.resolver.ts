import { Resolver, Query, ID, Args } from "@nestjs/graphql";
import { ApiAccessStatusEntity } from "@graduates/api/access-status/api/shared";
import { AccessStatusService } from "@graduates/api/access-status/service/feature";

@Resolver(of => ApiAccessStatusEntity)
export class ApiAccessStatusResolver {
    constructor(private accessStatusService: AccessStatusService) {}

    @Query(returns => [ApiAccessStatusEntity], { nullable: true })
    async status(@Args('compId', { type: () => ID }) compId: string, @Args('gradId', { type: () => ID }) gradId: string): Promise<ApiAccessStatusEntity[]> {
        if (compId == "" || gradId == "") // obviously empty elements are not allowed
            return null;

        const items = ["CV", "Transcript", "Academic Record", "Certificates", "Capstone Project"];
        const enumItems = items.map((x) => x.toUpperCase().replace(" ", "_"));

        const entities = await this.accessStatusService.getAccessStatus(compId, gradId);
        
        for (const e of entities) {
            const i = enumItems.indexOf(e.item);

            e.item = items[i];
            items.splice(i, 1);
            enumItems.splice(i, 1);
        }

        for (const i of items) {
            const e = new ApiAccessStatusEntity();
            e.accessStatus = "Private";
            e.item = i;
            entities.push(e);
        }

        return entities;
    }
    @Query(() =>String) 
    pingAccessStatus(){
      return "on";
    }
}