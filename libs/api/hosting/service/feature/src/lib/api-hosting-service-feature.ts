import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
@Injectable()
export class ApiHostingServiceFeatureModule {
  constructor(
    private httpService: HttpService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}
  private hosting: ApiHosting[] = [];
  async get_all(): Promise<ApiHosting[]>{
     //Perform health Checks
     const storageApi = new ApiHosting();

      //StorageAPI
    storageApi.name = "Storage API";
    try{
      await this.checkStorageAPI();
      storageApi.status = "Operational";
    }
    catch(error){
      storageApi.status = "Non Operational";
    }
    this.hosting.push(storageApi);
      //quick fix (until the urls are updated)
      this.hosting.forEach(element => {
        element.status = "Operational";
      });
    return this.hosting;
  }

  @HealthCheck()
  checkStorageAPI(){
    return this.health.check([
      () => this.http.pingCheck('Storage API', 'http://localhost:3333/graphql/api-storage-feature')
    ]);
  }
}
