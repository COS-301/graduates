import { Query, Resolver } from "@nestjs/graphql";
import { ApihostingServiceFeatureModule} from '../../../../../../api/hosting/service/feature/src/lib/api-hosting-service-feature'
import{Apihosting} from '../../../../api/shared/data-access/src/lib/api-hosting.entity'

@Resolver(of => Apihosting)
export class ApihostingResolver{
   constructor(private hostingService:ApihostingServiceFeatureModule ){}
   @Query(returns=>[Apihosting])
   hosting():Promise<Apihosting[]>{
       return this.hostingService.get_all();
   }
}