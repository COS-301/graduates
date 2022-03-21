import { Query, Resolver } from "@nestjs/graphql";
import { ApiUpIntegrationServiceFeatureModule} from '../../../../../../api/upintegration/service/feature/src/lib/api-upintegration-service-feature'
import{ApiUpIntegration} from '../../../../api/shared/data-access/src/lib/api-upintegration.entity'
@Resolver(of => ApiUpIntegration)
export class ApiUpIntegrationResolver {
   constructor(private upintegrationService:ApiUpIntegrationServiceFeatureModule ){}

   @Query(returns=>[ApiUpIntegration])
   upIntegration():Promise<ApiUpIntegration[]>{

       return this.upintegrationService.get_academicrecord();
   }
} 