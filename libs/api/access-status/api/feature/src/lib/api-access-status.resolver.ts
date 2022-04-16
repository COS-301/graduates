import { Resolver, Query, ID, Args } from "@nestjs/graphql";
import { ApiAccessStatusEntity } from "./api-access-status.entity";
import { ApiAccessStatusService } from "./api-access-status.service";

@Resolver(of => ApiAccessStatusEntity)
export class ApiAccessStatusResolver {
    constructor(private accessStatusService: ApiAccessStatusService) {}

    @Query(returns => [ApiAccessStatusEntity], { nullable: true })
    async status(@Args('compId', { type: () => ID }) compId: string, @Args('gradId', { type: () => ID }) gradId: string): Promise<ApiAccessStatusEntity[]> {
        if (compId == "" || gradId == "") // obviously empty elements are not allowed
            return null;

        const enum Items { // if new items become available add here
            CV = "CV",
            Transcript = "Transcript",
            Academic = "Academic Record",
            Certificates = "Certificates",
            Capstone = "Capstone Project"
        };
        const items = [Items.CV.valueOf(), Items.Transcript.valueOf(), Items.Academic.valueOf(), Items.Certificates.valueOf(), Items.Capstone.valueOf()];

        const entities = await this.accessStatusService.getAll(compId, gradId);

        for (const e of entities) {
            const i = items.indexOf(e.item);

            if (i > -1)
                items.splice(i, 1);
        }

        for (const i of items) {
            const e = new ApiAccessStatusEntity();
            e.accessStatus = "Private";
            e.item = i;
            entities.push(e);
        }

        return entities;
    }
}