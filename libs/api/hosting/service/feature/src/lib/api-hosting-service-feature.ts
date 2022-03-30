import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiHostingServiceFeatureModule {
  async get_all(): Promise<ApiHosting[]>{
      const hosting = new ApiHosting();
      hosting.name = "Status API";
      hosting.status = "Operational";
      return[hosting];
  }
}
