import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiHostingServiceFeatureModule{
  private hosting: ApiHosting[] = [
   {name: 'Storage API' , status: 'Operational'},
   {name: 'Shorts API', status: 'Operational'},
   {name: 'Company Profile API', status: 'Operational'},
   {name: 'Shorts API', status: 'Operational'},
   {name: 'Access Status API', status: 'Operational'},
   {name: 'Student Profiles API', status: 'Operational'},
   {name: 'Company Representative API', status: 'Operational'},
   {name: 'Request Access API', status: 'Operational'},
   {name: 'authentication API', status: 'Operational'},
   {name: 'Block Chain', status: 'Under Development'}
  ];
  async get_all(): Promise<ApiHosting[]>{
    //heatlth checks
    return this.hosting;
  }
}
