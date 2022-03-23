import { Injectable } from '@nestjs/common';
import{ApiCompanyProfilePage} from '../../../../api/shared/data-access/src/lib/api-companyprofilepage.entity'

@Injectable()
export class ApicompanyprofilepageServiceFeatureModule {
  async getAll(): Promise<ApiCompanyProfilePage[]>{
    const companyprofilepage = new ApiCompanyProfilePage();
    companyprofilepage.id = '1'
    companyprofilepage.name = 'Google';
    companyprofilepage.logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_XptDKwX5MbOjDs5YDFBIqOAq9Lt50PBW87ZwvsaJeBizLQ_2g6ilEjU4fpCV95ID30&usqp=CAU";
    companyprofilepage.address = "1600 Amphitheatre Parkway Mountain View, CA 94043, USA";
    companyprofilepage.phoneNumber = "(650) 253-0000";
    companyprofilepage.emailAddress = "jobs@google.com";
    companyprofilepage.websiteLink = "https://about.google/intl/ALL_us/";
    companyprofilepage.companyBio = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include a search engine, online advertising technologies, cloud computing, software, and hardware. It is considered one of the Big Five American information technology companies, alongside Amazon, Apple, Meta and Microsoft.";
    companyprofilepage.industryAndServices = "";
    return[companyprofilepage];

}

}

