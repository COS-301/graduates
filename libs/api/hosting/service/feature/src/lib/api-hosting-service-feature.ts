import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
<<<<<<< HEAD
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
=======
import { HttpService } from '@nestjs/axios';
import { Injectable, Query } from '@nestjs/common';
import { HealthCheck, HealthCheckResult, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef

type HealthCheckParameters = {
  title: string,
  path: string,
  query: string,
};
@Injectable()
<<<<<<< HEAD
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
=======
export class ApiHostingServiceFeatureModule{
  constructor(
    private httpService: HttpService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator, 
  ){}
  // private hosting: ApiHosting[] = [];
  async get_all(): Promise<ApiHosting[]>{
    const hosting: ApiHosting[] = [];
    //clear the hosting object
    // this.hosting = [];
    const commonPath = 'http://localhost:3333/graphql';
    const checks: HealthCheckParameters[] = [
      {title: 'Storage API', path: commonPath,  query: '{pingStorage}'},
      {title: 'Shorts API', path: commonPath,  query: '{pingShorts}'},
      {title: 'Company Profile API', path: commonPath,  query: '{pingCompanyProfile}'},
      {title: 'Access Status API', path: commonPath,  query: '{pingAccessStatus}'},
      {title: 'Studen Profiles API', path: commonPath,  query: '{pingStudentProfile}'},
      {title: 'Company Representative API', path: commonPath,  query: '{pingCompanyRepresentative}'},
      {title: 'Request Access API', path: commonPath,  query: '{pingRequestAccess}'},
      {title: 'Authentication API', path: commonPath,  query: '{pingAuthentication}'},
      {title: 'Student Explore API', path: commonPath,  query: '{pingStudentExplore}'},
      {title: 'Adminconsole API', path: commonPath,  query: '{pingAdminconsole}'},
      {title: 'UP Integration API', path: commonPath,  query: '{pingUpintegration}'},
    ]

    // in future, explore use of Promise.all([...]) for efficiency and concurrent checks
    checks.forEach( async (check) => {
      const hostingObj = new ApiHosting();
      hostingObj.name = check.title
      try {
        await this.checkApiHealth(check);
        hostingObj.status = "Operational";
      } catch {
        hostingObj.status = "Non Operational";
      }
      // this.hosting.push(hostingObj);
      hosting.push(hostingObj);
    });

    hosting.push(this.AddAllUnimplemented());
    return hosting;
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
  }
  async checkDatabase(): Promise<HealthIndicatorResult>{
    const prisma = new ApiHosting();
    try{
      await this.prismaService.$queryRaw;   
      prisma.name = "Database";
      prisma.status = "Operational";
      this.hosting.push(prisma);
      return this.getStatus("Database", true);

<<<<<<< HEAD
    }
    catch(error){
      prisma.name = "Database";
      prisma.status = "Non Operational";
      this.hosting.push(prisma);
      return this.getStatus("Database", false);
    }
=======
  @HealthCheck()
  checkApiHealth(params: HealthCheckParameters): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck(params.title, `${params.path}?query=${encodeURI(params.query)}`) // encode URI automatically
    ])
  }

  AddAllUnimplemented(){
    const unimplemented1 = new ApiHosting();
    unimplemented1.name = "Block Chain";
    unimplemented1.status = "Under Development";

    // this.hosting.push(unimplemented1);
    return unimplemented1;
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
  }
 
}
