import { StudentDetails } from '@graduates/api/upintegration/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiUpIntegrationServiceFeatureModule {
  async getAcademicRecord(): Promise<StudentDetails[]>{
    const integration = new StudentDetails();
    integration.studentNumber = "u00000000";
    integration.name = "a";
    integration.surname = "b";
    integration.course = "CS";
    integration.contactNumber = "1234567890";
    integration.degree = "d";
    integration.record = "r";

    return[integration];
}
} 