import { ApicompanyprofilepageServiceFeatureModule } from '@graduates/api/companyprofilepage/service/feature';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ApiCompanyProfilePage } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { NotFoundException } from '@nestjs/common';

@Resolver(of => ApiCompanyProfilePage)
export class ApicompanyprofilepageResolver {
  constructor(
    private companyprofilepageService: ApicompanyprofilepageServiceFeatureModule
  ) {}

  //return array or all companies
  // @Query((returns) => [ApiCompanyProfilePage])
  // async companyprofilepage(): Promise<ApiCompanyProfilePage[]> {
  //   return this.companyprofilepageService.getAll();
  // }
  

  //fetch a company based on ID
  @Query((returns) => ApiCompanyProfilePage)
  async getCompanyByID(@Args('company_id') company_id: string): Promise<ApiCompanyProfilePage> {
    const resp = await this.companyprofilepageService.getCompanyByID(company_id)
    return resp;
  }


  //Update a company with what they enter
  // @Mutation((returns) => ApiCompanyProfilePage)
  // async updateCompany(
  //   @Args("company_ID")company_ID:string,
  //   @Args("company_name")company_name:string,
  //   @Args("company_logo")company_logo:string,
  //   @Args("company_office_location")company_office_location:string,
  //   @Args("company_contact_details")company_contact_details:string,
  //   @Args("company_website")company_website:string,
  //   @Args("company_filter")company_filter:string,
  //   @Args("company_bio")company_bio:string,
  // ): Promise<ApiCompanyProfilePage> {
  //   return this.companyprofilepageService.updateCompany(company_ID, company_name, company_logo, company_office_location, company_contact_details, company_website, company_filter, company_bio);
  // }
}