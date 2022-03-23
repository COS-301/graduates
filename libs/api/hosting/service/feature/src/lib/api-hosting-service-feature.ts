import { Injectable } from '@nestjs/common';
import{Apihosting} from '../../../../api/shared/data-access/src/lib/api-hosting.entity'

@Injectable()
export class ApihostingServiceFeatureModule {
  async get_all(): Promise<Apihosting[]>{
      const hosting = new Apihosting();
      hosting.name = "Status API";
      hosting.status = "Operational";
      return[hosting];
  }
}
