import { Resolver,Query, Args } from '@nestjs/graphql';
import { ApiAuthorization } from '@graduates/api/authorization/api/shared';
import { ApiAuthorizationService, ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { NotFoundException } from '@nestjs/common';


@Resolver(() => ApiAuthorization)
export class ApiAuthorizationResolver {
    constructor(private authourizationService: ApiAuthorizationService){}

    @Query((returns) => ApiAuthorization)
    async authorization(@Args('id') id:string): Promise<ApiAuthorization>{
        const respond = await this.authourizationService.findOneById(id);
        if(!respond)
        {
            throw new NotFoundException(id);
        }
        return respond;
    }
   
}
