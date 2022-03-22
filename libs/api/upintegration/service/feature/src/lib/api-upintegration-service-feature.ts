import { ApiUpIntegration } from '@graduates/api/upintegration/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiUpIntegrationServiceFeature {
  async getAcademicRecord(): Promise<ApiUpIntegration[]>{
    const storage = new ApiUpIntegration();
    storage.stub = "This is unimplemented until permission is obtained from the varsity";

    return[storage];
}
} 