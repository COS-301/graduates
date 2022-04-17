import { ApicompanyprofilepageServiceFeatureModule } from '@graduates/api/companyprofilepage/service/feature';
import { Args, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { ApiCompanyProfilePage, UserEmail, UserLocation, UserNumber, UserSocialMedia } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { NotFoundException } from '@nestjs/common';


@Resolver(ApiCompanyProfilePage)
export class ApicompanyprofilepageResolver {
  constructor(
    private readonly companyprofilepageService: ApicompanyprofilepageServiceFeatureModule
  ) {}

  
  // @ResolveField()
  // async ApiCompanyProfilePage(@Root() apiCompanyProfilePage: ApiCompanyProfilePage): Promise<ApiCompanyProfilePage | null>{
  //   return this.companyprofilepageService.getCompanyWithID(apiCompanyProfilePage.company_id)
  // }

  // @ResolveField(() => [UserEmail])
  // async companyEmail(@Root() apiCompanyProfilePage: ApiCompanyProfilePage): Promise<UserEmail[]>{
  //   return await this.companyprofilepageService.getCompanyEmail(apiCompanyProfilePage.company_id);
  // }

  // @ResolveField(() => [UserLocation])
  // async companyLocation(@Root() apiCompanyProfilePage: ApiCompanyProfilePage): Promise<UserLocation[]>{
  //   return await this.companyprofilepageService.getCompanyLocation(apiCompanyProfilePage.company_id);
  // }

  // @ResolveField(() => [UserNumber])
  // async companyNumber(@Root() apiCompanyProfilePage: ApiCompanyProfilePage): Promise<UserNumber[]>{
  //   return await this.companyprofilepageService.getCompanyNumber(apiCompanyProfilePage.company_id);
  // }

  // @ResolveField(() => [UserSocialMedia])
  // async companySocialMedia(@Root() apiCompanyProfilePage: ApiCompanyProfilePage): Promise<UserSocialMedia[]>{
  //   return await this.companyprofilepageService.getCompanySocialMedia(apiCompanyProfilePage.company_id);
  //}
  

  //fetch a company based on ID
  @Query((returns) => ApiCompanyProfilePage)
  async getCompanyByID(@Args('company_id') company_id: string): Promise<ApiCompanyProfilePage | null> {
    const resp = await this.companyprofilepageService.getCompanyWithID(company_id);
    if(!resp){
      throw new NotFoundException('Company not found');
    }
    return resp;
  }


  //fetch company emails from company id
  @Query((returns) => [UserEmail])
  async getCompanyEmail(@Args('company_id') company_id: string): Promise<UserEmail[] | null>{
    const resp = await this.companyprofilepageService.getCompanyEmail(company_id);
    if(!resp){
      throw new NotFoundException('Company not found');
    }
    return resp;
  }

  //fetch company locations from company id
  @Query((returns) => [UserLocation])
  async getCompanyLocation(@Args('company_id') company_id: string): Promise<UserLocation[] | null>{
    const resp = await this.companyprofilepageService.getCompanyLocation(company_id);
    if(!resp){
      throw new NotFoundException('Company not found');
    }
    return resp;
  }


  //fetch company social media from company id
  @Query((returns) => [UserSocialMedia])
  async getCompanySocialMedia(@Args('company_id') company_id: string): Promise<UserSocialMedia[] | null>{
    const resp = await this.companyprofilepageService.getCompanySocialMedia(company_id);
    if(!resp){
      throw new NotFoundException('Company not found');
    }
    return resp;
  }


  //fetch company number from company id
  @Query((returns) => UserNumber)
  async getCompanyNumber(@Args('company_id') company_id: string): Promise<UserNumber | null>{
    return await this.companyprofilepageService.getCompanyNumber(company_id);

  }

  @Query(() =>String) 
  pingCompanyProfile(){
    return "on";
  }
  

  
}