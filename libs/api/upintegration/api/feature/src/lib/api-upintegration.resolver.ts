import { Query, Resolver } from "@nestjs/graphql";
import { ApiUpIntegrationServiceFeatureModule} from '@graduates/api/upintegration/service/feature'
import{ ApiUpIntegration} from '@graduates/api/upintegration/api/shared/data-access'

@Resolver(() => ApiUpIntegration)
export class ApiUpIntegrationResolver {
   constructor(private upintegrationService:ApiUpIntegrationServiceFeatureModule ){}

   @Query(()=>[ApiUpIntegration])
   upintegration():Promise<ApiUpIntegration[]>{

       return this.upintegrationService.getAcademicRecord();
   }
} 