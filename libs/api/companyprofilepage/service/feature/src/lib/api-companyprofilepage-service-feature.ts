import { ApiCompanyProfilePage } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { Injectable } from '@nestjs/common';
import { CompanyProfilePage } from '@graduates/api/companyprofilepage/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class ApicompanyprofilepageServiceFeatureModule {


  // async getAll(): Promise<ApiCompanyProfilePage[]> {
  //   const companyprofilepage = new ApiCompanyProfilePage();
  //   companyprofilepage.company_id = '1';
  //   companyprofilepage.company_name = 'Google';
  //   companyprofilepage.company_logo =
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_XptDKwX5MbOjDs5YDFBIqOAq9Lt50PBW87ZwvsaJeBizLQ_2g6ilEjU4fpCV95ID30&usqp=CAU';
  //   companyprofilepage.company_office_location =
  //     '1600 Amphitheatre Parkway Mountain View, CA 94043, USA';
  //   companyprofilepage.company_contact_details = '(650) 253-0000';
  //   companyprofilepage.company_website = 'jobs@google.com';
  //   companyprofilepage.company_filter = '';
  //   companyprofilepage.company_bio =
  //     'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include a search engine, online advertising technologies, cloud computing, software, and hardware. It is considered one of the Big Five American information technology companies, alongside Amazon, Apple, Meta and Microsoft.';
  //   return [companyprofilepage];
  // }

  async getCompanyByID(company_id: string) : Promise<ApiCompanyProfilePage>{
    const newCompany = new CompanyProfilePage(new PrismaService);
    const companyprofilepage = new ApiCompanyProfilePage();
    companyprofilepage.company_id = (await newCompany.getCompanyById(company_id)).id;
    companyprofilepage.company_name = (await newCompany.getCompanyById(company_id)).name;
    companyprofilepage.company_bio = (await newCompany.getCompanyProfile(company_id)).bio;
    companyprofilepage.company_email = (await newCompany.getCompanyEmail(company_id));
    companyprofilepage.company_contact_details = (await newCompany.getCompanyContactNumber(company_id));
    companyprofilepage.company_office_location = (await newCompany.getCompanyLocations(company_id));
    companyprofilepage.company_social_media = (await newCompany.getCompanySocialMedia(company_id));
    return companyprofilepage;
  }


  // async updateCompany(company_ID: string, company_name: string, company_logo: string, company_office_location:string, company_contact_details: string, company_website: string, company_filter: string, company_bio: string): Promise<ApiCompanyProfilePage>{
  //   const companyprofilepage = new ApiCompanyProfilePage();
  //   companyprofilepage.company_id = company_ID;
  //   companyprofilepage.company_name = company_name;
  //   companyprofilepage.company_logo = company_logo;
  //   companyprofilepage.company_office_location = company_office_location;
  //   companyprofilepage.company_contact_details = company_contact_details;
  //   companyprofilepage.company_website = company_website;
  //   companyprofilepage.company_filter = company_filter;
  //   companyprofilepage.company_bio = company_bio;
  //   return companyprofilepage;
  // }
}