import { ApicompanyprofilepageServiceFeatureModule } from '@graduates/api/companyprofilepage/service/feature';
import { Args, Mutation, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { ApiCompanyProfilePage, UserEmail, UserLocation, UserNumber, UserSocialMedia, UserProfile, CompanyReps, UpdateBioInput } from '@graduates/api/companyprofilepage/api/shared/data-access';
import { NotFoundException } from '@nestjs/common';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';


@Resolver(ApiCompanyProfilePage)
export class ApicompanyprofilepageResolver {
  constructor(
    private readonly companyprofilepageService: ApicompanyprofilepageServiceFeatureModule
  ) {}

  

  //fetch a company based on ID
  @Query((returns) => ApiCompanyProfilePage)
  async getCompanyByID(@Args('company_id') company_id: string): Promise<ApiCompanyProfilePage | null> {
    const resp = await this.companyprofilepageService.getCompanyWithID(company_id);
    if(!resp){
      throw new NotFoundException('Company not found');
    }
    return resp;
  }


  //fetch company emails with company id
  @Query((returns) => [UserEmail])
  async getCompanyEmail(@Args('company_id') company_id: string): Promise<UserEmail[] | null>{
    const resp = await this.companyprofilepageService.getCompanyEmail(company_id);
    if(!resp){
      throw new NotFoundException('Company not found');
    }
    return resp;
  }

  //fetch company locations with company id
  @Query((returns) => [UserLocation])
  async getCompanyLocation(@Args('company_id') company_id: string): Promise<UserLocation[] | null>{
    const resp = await this.companyprofilepageService.getCompanyLocation(company_id);
    if(!resp){
      throw new NotFoundException('Company not found');
    }
    return resp;
  }


  //fetch company social media with company id
  @Query((returns) => [UserSocialMedia])
  async getCompanySocialMedia(@Args('company_id') company_id: string): Promise<UserSocialMedia[] | null>{
    const resp = await this.companyprofilepageService.getCompanySocialMedia(company_id);
    if(!resp){
      throw new NotFoundException('Company not found');
    }
    return resp;
  }


  //fetch company number with company id
  @Query((returns) => UserNumber)
  async getCompanyNumber(@Args('company_id') company_id: string): Promise<UserNumber | null>{
    return await this.companyprofilepageService.getCompanyNumber(company_id);

  }

  //fetch company bio with company id
  @Query((returns) => UserProfile)
  async getCompanyBio(@Args('company_id') company_id: string): Promise<UserProfile | null>{
    return await this.companyprofilepageService.getCompanyBio(company_id);
  }


  //fetch company rep with company id
  @Query((returns) => [CompanyReps])
  async getCompanyReps(@Args('company_id') company_id: string): Promise<CompanyReps[] | null>{
    return await this.companyprofilepageService.getCompanyReps(company_id);
  }

  //update company bio
  @Mutation(() => UserProfile)
  async updateCompanyBio(@Args('bio') companyBio: UpdateBioInput): Promise<UserProfile | null> {
    return await this.companyprofilepageService.updateCompanyBio(companyBio);
  }

  @Query(() =>String) 
  pingCompanyProfile(){
    return "on";
  }

}