import { ApiUpIntegration } from '@graduates/api/upintegration/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiUpIntegrationServiceFeatureModule {
  async getAcademicRecord(): Promise<ApiUpIntegration[]>{
    const integration = new ApiUpIntegration();
    integration.stub = "This is unimplemented until permission is obtained from the varsity";

    return[integration];
}
} 