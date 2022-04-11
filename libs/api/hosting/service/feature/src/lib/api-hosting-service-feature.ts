import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiHostingServiceFeatureModule {
  async get_all(): Promise<ApiHosting[]>{
    const storageAPI = new ApiHosting();
      const statusAPI = new ApiHosting();
      const companyProfileAPI = new ApiHosting();
      const shortsAPI = new ApiHosting();
      const accessStatusAPI = new ApiHosting();
      const companyProfilePageAPI = new ApiHosting();
      const studentProfilesAPI = new ApiHosting();
      const companyRepresentativeAPI = new ApiHosting();
      const requestAccessAPI = new ApiHosting();
      const authenticationAPI = new ApiHosting();

      storageAPI.name = "Storage API";
      storageAPI.status = "Operational";

      statusAPI.name = "Status API";
      statusAPI.status = "Operational";

      companyProfileAPI.name = "Company Profile API";
      companyProfileAPI.status = "Operational";
      
      shortsAPI.name = "Shorts API";
      shortsAPI.status = "Operational";

      accessStatusAPI.name = "Access Status API";
      accessStatusAPI.status = "Operational";

      companyProfilePageAPI.name = "company Profile Page API";
      companyProfilePageAPI.status = "Operational";

      studentProfilesAPI.name = "student Profiles API";
      studentProfilesAPI.status = "Operational";

      companyRepresentativeAPI.name = "company Representative API";
      companyRepresentativeAPI.status = "Operational";

      requestAccessAPI.name = "request Access API";
      requestAccessAPI.status = "Operational";

      authenticationAPI.name = "authentication API";
      authenticationAPI.status = "Operational";
      return[
        storageAPI
        ,statusAPI
        ,companyProfileAPI
        ,shortsAPI
        ,accessStatusAPI
        ,companyProfilePageAPI
        ,studentProfilesAPI
        ,companyRepresentativeAPI
        ,requestAccessAPI
        ,authenticationAPI];
  }
}
