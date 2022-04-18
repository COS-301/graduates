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
  private commonPath = 'http://localhost:3333/graphql';
  private checks: HealthCheckParameters[] = [
    {title: 'Storage API', path: this.commonPath,  query: '{pingStorage}'},
    {title: 'Shorts API', path: this.commonPath,  query: '{pingShorts}'},
    {title: 'Notification API', path: this.commonPath,  query: '{pingNotification}'},
    {title: 'Company Profile API', path: this.commonPath,  query: '{pingCompanyProfile}'},
    {title: 'Access Status API', path: this.commonPath,  query: '{pingAccessStatus}'},
    {title: 'Student Profiles API', path: this.commonPath,  query: '{pingStudentProfiles}'},
    {title: 'Company Representative API', path: this.commonPath,  query: '{ pingCompanyRepresentative}'},
    {title: 'Request Access API', path: this.commonPath,  query: '{pingRequestAccess}'},
    {title: 'Authentication API', path: this.commonPath,  query: '{pingAuthentication}'},
    {title: 'Student Explore API', path: this.commonPath,  query: '{pingStudentExplore}'},
    {title: 'Adminconsole API', path: this.commonPath,  query: '{pingAdminconsole}'},
    {title: 'UP Integration API', path: this.commonPath,  query: '{pingUpintegration}'},
    {title: 'Blog API', path: this.commonPath,  query: '{pingBlog}'},
    {title: 'Company Explore API', path: this.commonPath,  query: '{pingCompanyExplore}'},
    {title: 'Authorization API', path: this.commonPath,  query: '{pingAuthorization}'} , 
    
  ]
  constructor(
    private httpService: HttpService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator, 
  ){}
  // private hosting: ApiHosting[] = [];
  async get_all(): Promise<ApiHosting[]>{
    let hosting: ApiHosting[] = [];
    //clear the hosting object
    // this.hosting = [];

    // in future, explore use of Promise.all([...]) for efficiency and concurrent checks
    for (const check of this.checks) {      
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
    }
    hosting = hosting.concat(this.AddAllUnimplemented());
    return hosting;
  }

  @HealthCheck()
  checkApiHealth(params: HealthCheckParameters): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck(params.title, `${params.path}?query=${encodeURI(params.query)}`) // encode URI automatically
    ])
  }

  AddAllUnimplemented(): ApiHosting[]{
    const unimplemented1 = new ApiHosting();
    unimplemented1.name = "Block Chain";
    unimplemented1.status = "Under Development";
    const retArr: ApiHosting[] = []; 
    retArr.push(unimplemented1)
    return retArr;
  }
 
  getChecksLength(): number {
    return this.checks.length;
  }

}
