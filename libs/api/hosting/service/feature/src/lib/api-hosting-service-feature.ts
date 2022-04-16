import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';

@Injectable()
export class ApiHostingServiceFeatureModule extends HealthIndicator {
  
  private readonly prismaService: PrismaService;
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
    this.checkDatabase();
    return this.hosting;
  }
  async checkDatabase(): Promise<HealthIndicatorResult>{
    const prisma = new ApiHosting();
    try{
      await this.prismaService.$queryRaw;   
      prisma.name = "Database";
      prisma.status = "Operational";
      this.hosting.push(prisma);
      return this.getStatus("Database", true);

    }
    catch(error){
      prisma.name = "Database";
      prisma.status = "Non Operational";
      this.hosting.push(prisma);
      return this.getStatus("Database", false);
    }
  }
}
