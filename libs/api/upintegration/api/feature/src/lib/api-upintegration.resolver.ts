import { 
    Query, 
    Resolver, 
} from "@nestjs/graphql";
import { ApiUpIntegrationServiceFeatureModule} from '@graduates/api/upintegration/service/feature'
import{ StudentDetails } from '@graduates/api/upintegration/api/shared/data-access'

@Resolver(() => StudentDetails)
export class ApiUpIntegrationResolver {
   constructor(private upintegrationService:ApiUpIntegrationServiceFeatureModule ){}

   @Query(()=>[StudentDetails])
   upintegration():Promise<StudentDetails[]>{

       return this.upintegrationService.getAcademicRecord();
   }
} 