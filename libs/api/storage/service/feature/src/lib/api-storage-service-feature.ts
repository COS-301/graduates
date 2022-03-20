import { Injectable } from '@nestjs/common';
import{ApiStorage} from '../../../../api/shared/data-access/src/lib/api-storage.entity'

@Injectable()
export class ApiStorageServiceFeatureModule {
  async get_all(): Promise<ApiStorage[]>{
    const storage = new ApiStorage();
    storage.id = "u20469366";
    storage.Transcript= false;
    storage.CV = true;
    return[storage];


}

}
