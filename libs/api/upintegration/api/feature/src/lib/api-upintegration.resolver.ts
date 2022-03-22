import { Query, Resolver } from "@nestjs/graphql";
import { ApiUpIntegrationServiceFeature} from '@graduates/api/upintegration/service/feature'
import{ ApiUpIntegration} from '@graduates/api/upintegration/api/shared/data-access'

@Resolver(of => ApiUpIntegration)
export class ApiUpIntegrationResolver {
   constructor(private upintegrationService:ApiUpIntegrationServiceFeature ){}

   @Query(returns=>[ApiUpIntegration])
   upintegration():Promise<ApiUpIntegration[]>{

       return this.upintegrationService.getAcademicRecord();
   }
} 