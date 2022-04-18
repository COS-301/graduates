import { RequestAccessService } from "@graduates/api/request-access/service/feature";
import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Resolver, Query } from "@nestjs/graphql";
import { ApiRequestAccessEntity } from "./api-request-access.entity";
// import { JwtAuthGuard } from "@graduates/api/auth"

@Resolver(of => ApiRequestAccessEntity)
export class ApiRequestAccessResolver {
    constructor(private requestAccessService: RequestAccessService) {}
    @Query(() =>String) 
    pingRequestAccess(){
      return "on";
    }
    @Mutation(returns => ApiRequestAccessEntity, { nullable: true })
    // @UseGuards(JwtAuthGuard)
    // must add paramters to request
    async requestAccess(@Args('compId', { type: () => ID }) compId: string, @Args('gradId', { type: () => ID }) gradId: string, @Args('item') item: string): Promise<ApiRequestAccessEntity> {
        enum Items { // if new items become available add here
            CV,
            TRANSCRIPT,
            ACADEMIC_RECORD,
            CERTIFICATES,
            CAPSTONE_PROJECT
        };

        if (compId == "" || gradId == "" || item == "") // obviously empty elements are not allowed
            return null;

        if (!(item in Items)) // if an invalid item has been requested
            return null;

        return this.requestAccessService.getAccessEntity(compId, gradId, item);
    }
}