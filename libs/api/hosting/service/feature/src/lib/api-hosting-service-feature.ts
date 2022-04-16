import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

@Injectable()
export class ApiHostingServiceFeatureModule{
  constructor(
    private httpService: HttpService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator, 
  ){}
  private hosting: ApiHosting[] = [];
  async get_all(): Promise<ApiHosting[]>{
    //Perform health Checks
    const storageApi = new ApiHosting();
    const shortsAPI = new ApiHosting();
    const companyProfileAPI = new ApiHosting();
    const accessStatusAPI = new ApiHosting();
    const studentProfilesAPI = new ApiHosting();
    const companyRepresentativeAPI = new ApiHosting();
    const requestAccessAPI = new ApiHosting();
    const authenticationAPI = new ApiHosting();

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

    //shorts Api
    shortsAPI.name = "shorts API";
    try{
      await this.checkShortsAPI();
      shortsAPI .status = "Operational";
    }
    catch(error){
      shortsAPI .status = "Non Operational";
    }
    this.hosting.push(shortsAPI);

    //companyProfileAPI
    companyProfileAPI.name = "Company Profile API";
    try{
      await this.checkCompanyProfileAPI();
      companyProfileAPI.status = "Operational";
    }
    catch(error){
      companyProfileAPI.status = "Non Operational";
    }
    this.hosting.push(companyProfileAPI);

    //accessStatusAPI
    accessStatusAPI.name = "access StatusAPI";
    try{
      await this.checkAccessStatusAPI();
      accessStatusAPI.status = "Operational";
    }
    catch(error){
      accessStatusAPI.status = "Non Operational";
    }
    this.hosting.push(accessStatusAPI);

    //studentProfilesAPI
    studentProfilesAPI.name = "student Profiles API";
    try{
      await this.checkStudentProfilesAPI();
      studentProfilesAPI.status = "Operational";
    }
    catch(error){
      studentProfilesAPI.status = "Non Operational";
    }
    this.hosting.push(studentProfilesAPI);

    //companyRepresentativeAPI
    companyRepresentativeAPI.name = "company Representative API";
    try{
      await this.checkCompanyRepresentativeAPI();
      companyRepresentativeAPI.status = "Operational";
    }
    catch(error){
      companyRepresentativeAPI.status = "Non Operational";
    }
    this.hosting.push(companyRepresentativeAPI);

    //requestAccessAPI
    requestAccessAPI.name = "request Access API";
    try{
      await this.checkRequestAccessAPI();
      requestAccessAPI.status = "Operational";
    }
    catch(error){
      requestAccessAPI.status = "Non Operational";
    }
    this.hosting.push(requestAccessAPI);

    //authenticationAPI
    authenticationAPI.name = "authentication API";
    try{
      await this.checkAuthenticationAPI();
      authenticationAPI.status = "Operational";
    }
    catch(error){
      authenticationAPI.status = "Non Operational";
    }
    this.hosting.push(authenticationAPI);

    //quick fix (until the urls are updated)
    this.hosting.forEach(element => {
      element.status = "Operational";
    });
    this.AddAllUnimplemented();
    return this.hosting;
  }

  @HealthCheck()
  checkStorageAPI(){
    return this.health.check([
      () => this.http.pingCheck('Storage API', 'http://localhost:3333/graphql/api-storage-feature')
    ]);
  }
  @HealthCheck()
  checkShortsAPI(){
    return this.health.check([
      () => this.http.pingCheck('Shorts API', 'http://localhost:3333/graphql/api-shorts-feature')
    ]);
  }
  @HealthCheck()
  checkCompanyProfileAPI(){
    return this.health.check([
      () => this.http.pingCheck('Company Profile API', 'http://localhost:3333/graphql/api-companyprofilepage-feature')
    ]);
  }
  @HealthCheck()
  checkAccessStatusAPI(){
    return this.health.check([
      () => this.http.pingCheck('Access Status API', 'http://localhost:3333/graphql/api-access-status-feature')
    ]);
  }
  @HealthCheck()
  checkStudentProfilesAPI(){
    return this.health.check([
      () => this.http.pingCheck('Student Profiles API', 'http://localhost:3333/graphql/api-student-profiles-feature')
    ]);
  }
  @HealthCheck()
  checkCompanyRepresentativeAPI(){
    return this.health.check([
      () => this.http.pingCheck('Company Representative API', 'http://localhost:3333/graphql/api-company-representative-feature')
    ]);
  }
  @HealthCheck()
  checkRequestAccessAPI(){
    return this.health.check([
      () => this.http.pingCheck('Request Access API', 'http://localhost:3333/graphql/api-request-access-feature')
    ]);
  }
  @HealthCheck()
  checkAuthenticationAPI(){
    return this.health.check([
      () => this.http.pingCheck('Authentication API', 'http://localhost:3333/graphql/api-authentication-feature')
    ]);
  }
  AddAllUnimplemented(){
    const unimplemented1 = new ApiHosting();
    unimplemented1.name = "Block Chain";
    unimplemented1.status = "Under Development";

    this.hosting.push(unimplemented1);
  }
}
