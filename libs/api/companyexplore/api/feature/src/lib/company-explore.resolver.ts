import { Resolver, Query, Args } from '@nestjs/graphql';
import { ApiCompanyExploreEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreUserprofileEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
//import { ApiCompanyExploreService } from '@graduates/api/companyexplore/service/feature';
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { ApiCompanyExploreUserEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreTaggedEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";

@Resolver((of) => ApiCompanyExploreEntity)
export class ApiCompanyExploreResolver {
   constructor(private companyRepository: CompanyExploreRepository) {}

  /*@Query((returns) => ApiCompanyExploreEntity,{ name: 'company' })
  async getCompanyDec(@Args('companyID', { type: () => String }) id: string) {
    const companyArr = this.companyService.findOneById(id);
    const companyObj = new ApiCompanyExploreEntity();
    companyObj.companyID = (await companyArr).pop();
    companyObj.name = (await companyArr).pop();

    return companyObj;
  }*/

  @Query((returns) => ApiCompanyExploreEntity)
  async GetListOfComapnies() {
    const CompaniesArr = this.companyRepository.getDefaultCompany();
    const arrOfCompanies = new Array<ApiCompanyExploreEntity>();
    let CompaniesObj = new ApiCompanyExploreEntity;
    let UserprofileObj = new ApiCompanyExploreUserprofileEntity;
    let company = null;
    let profile = null;
    
    while ((await CompaniesArr).length > 0) {
      company = (await CompaniesArr).pop;
      CompaniesObj = new ApiCompanyExploreEntity;
      UserprofileObj = new ApiCompanyExploreUserprofileEntity;
      //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated, Userprofile ()
      CompaniesObj.id = company.pop;
      CompaniesObj.email = company.pop;
      CompaniesObj.password = company.pop;
      CompaniesObj.passwordSalt = company.pop;
      CompaniesObj.name = company.pop;
      CompaniesObj.dateOfBirth = company.pop;
      CompaniesObj.companyID = company.pop;
      CompaniesObj.created = company.pop;
      CompaniesObj.suspended = company.pop;
      CompaniesObj.validated = company.pop;
      //userId, profilePicture, bio
      profile = company.pop;
      UserprofileObj.userId = profile.pop;
      UserprofileObj.profilePicture = profile.pop;
      UserprofileObj.bio = profile.pop;
      //add userprofile
      CompaniesObj.Userprofile = UserprofileObj;
      //add tp array
      arrOfCompanies.push(CompaniesObj);
    }

    return arrOfCompanies;
  }

  @Query((returns) => ApiCompanyExploreEntity)
  async GetCompanySearchResult(@Args('company_name', { type: () => String }) company_name: string) {
    const CompaniesArr = this.companyRepository.getSearchResults(company_name);
    const arrOfCompanies = new Array<ApiCompanyExploreEntity>();
    let CompaniesObj = new ApiCompanyExploreEntity;
    let UserprofileObj = new ApiCompanyExploreUserprofileEntity;
    let company = null;
    let profile = null;
    
    while ((await CompaniesArr).length > 0) {
      company = (await CompaniesArr).pop;
      CompaniesObj = new ApiCompanyExploreEntity;
      UserprofileObj = new ApiCompanyExploreUserprofileEntity;
      //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated, Userprofile ()
      CompaniesObj.id = company.pop;
      CompaniesObj.email = company.pop;
      CompaniesObj.password = company.pop;
      CompaniesObj.passwordSalt = company.pop;
      CompaniesObj.name = company.pop;
      CompaniesObj.dateOfBirth = company.pop;
      CompaniesObj.companyID = company.pop;
      CompaniesObj.created = company.pop;
      CompaniesObj.suspended = company.pop;
      CompaniesObj.validated = company.pop;
      //userId, profilePicture, bio
      profile = company.pop;
      UserprofileObj.userId = profile.pop;
      UserprofileObj.profilePicture = profile.pop;
      UserprofileObj.bio = profile.pop;
      //add userprofile
      CompaniesObj.Userprofile = UserprofileObj;
      //add tp array
      arrOfCompanies.push(CompaniesObj);
    }

    return arrOfCompanies;
  }

  @Query((returns) => ApiCompanyExploreEntity)
  async GetCompanyTagged(@Args('inputTag', { type: () => String }) inputTag: string) {
    const CompaniesArr = this.companyRepository.getTaggedCompany(inputTag);
    const arrOfCompanies = new Array<ApiCompanyExploreTaggedEntity>();
    let TaggedObj = new ApiCompanyExploreTaggedEntity;
    let UserObj = new ApiCompanyExploreUserEntity;
    let tagged = null;
    let user = null;

    while ((await CompaniesArr).length > 0) {
      tagged = (await CompaniesArr).pop;
      TaggedObj = new ApiCompanyExploreTaggedEntity;
      UserObj = new ApiCompanyExploreUserEntity;
      //UserId, tag, user
      TaggedObj.UserId = tagged.pop;
      TaggedObj.tag = tagged.pop;
      //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated
      user = tagged.pop;
      UserObj.id = user.pop;
      UserObj.email = user.pop;
      UserObj.password = user.pop;
      UserObj.passwordSalt = user.pop;
      UserObj.name = user.pop;
      UserObj.dateOfBirth = user.pop;
      UserObj.companyID = user.pop;
      UserObj.created = user.pop;
      UserObj.suspended = user.pop;
      UserObj.validated = user.pop;
      //add userprofile
      TaggedObj.user = UserObj;
      //add tp array
      arrOfCompanies.push(TaggedObj);
    }

    return arrOfCompanies;
  }

}