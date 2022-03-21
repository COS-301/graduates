import { Injectable } from '@nestjs/common';
import{ApiUpIntegration} from '../../../../api/shared/data-access/src/lib/api-upintegration.entity'

@Injectable()
export class ApiUpIntegrationServiceFeatureModule {
  async get_academicrecord(): Promise<ApiUpIntegration[]>{
    const storage = new ApiUpIntegration();
    storage.stub = "This is unimplemented until permission is obtained from the varsity";

    return[storage];
}
}