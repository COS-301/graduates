import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { HttpService } from '@nestjs/axios';
import { Injectable, Query } from '@nestjs/common';
import { HealthCheck, HealthCheckResult, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

type HealthCheckParameters = {
  title: string,
  path: string,
  query: string,
};
@Injectable()
export class ApiHostingServiceFeatureModule{
  constructor(
    private httpService: HttpService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator, 
  ){}
  private hosting: ApiHosting[] = [];
  async get_all(): Promise<ApiHosting[]>{
    //clear the hosting object
    this.hosting = [];
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
      this.hosting.push(hostingObj);
    });

    this.AddAllUnimplemented();
    return this.hosting;
  }

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

    this.hosting.push(unimplemented1);
  }
 
}
