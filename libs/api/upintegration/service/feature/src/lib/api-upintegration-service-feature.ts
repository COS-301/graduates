import{ApiUpIntegration} from '@graduates/api/upintegration/api/shared/data-access'

export class ApiUpIntegrationServiceFeatureModule {
  async getAcademicRecord(): Promise<ApiUpIntegration[]>{
    const storage = new ApiUpIntegration();
    storage.stub = "This is unimplemented until permission is obtained from the varsity";

    return[storage];
}
} 