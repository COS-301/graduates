import { Query, Resolver } from "@nestjs/graphql";
import { ApiStorageServiceFeatureModule} from '../../../../../../api/storage/service/feature/src/lib/api-storage-service-feature'
import{ApiStorage} from '../../../shared/interfaces/data-access/src/lib/api-storage.entity'
@Resolver(of => ApiStorage)
export class ApiStorageResolver {
   constructor(private storageService:ApiStorageServiceFeatureModule ){}
   
   @Query(returns=>[ApiStorage])
   storage():Promise<ApiStorage[]>{

       return this.storageService.getAll();
   }

    


}