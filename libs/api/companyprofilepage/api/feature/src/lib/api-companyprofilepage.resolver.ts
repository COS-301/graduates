import { ApicompanyprofilepageServiceFeatureModule } from "@graduates/api/companyprofilepage/service/feature";
import { Query, Resolver } from "@nestjs/graphql";
import { ApiCompanyProfilePage } from "@graduates/api/companyprofilepage/api/shared/data-access";


@Resolver(of => ApiCompanyProfilePage)
export class ApicompanyprofilepageResolver {
   constructor(private companyprofilepageService:ApicompanyprofilepageServiceFeatureModule ){}
   
   @Query(returns => [ApiCompanyProfilePage])
   companyprofilepage():Promise<ApiCompanyProfilePage[]>{

       return this.companyprofilepageService.getAll();
   }

    


}