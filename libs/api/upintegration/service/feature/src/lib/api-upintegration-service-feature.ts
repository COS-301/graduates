import { StudentDetails } from '@graduates/api/upintegration/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiUpIntegrationServiceFeatureModule {
  async getAcademicRecord(): Promise<StudentDetails[]>{
    const integration = new StudentDetails();
    integration.userID = "u00000000";
    integration.name = "a";
    integration.surname = "b";
    integration.course = "CS";
    integration.contactNumber = "1234567890";

    return[integration];
}
} 