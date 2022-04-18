import { Resolver, Query, Args } from '@nestjs/graphql';
import { ApiCompanyExploreEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreUserprofileEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { CompanyExploreService } from '@graduates/api/companyexplore/service/feature';
import { ApiCompanyExploreUserEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreTaggedEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";

@Resolver((of) => ApiCompanyExploreEntity)
export class ApiCompanyExploreResolver {
   constructor(private companyService: CompanyExploreService) {}

  /*@Query((returns) => ApiCompanyExploreEntity,{ name: 'company' })
  async getCompany(@Args('companyID', { type: () => String }) id: string) {
    const companyArr = this.companyService.findOneById(id);
    const companyObj = new ApiCompanyExploreEntity();
    companyObj.companyID = (await companyArr).pop();
    companyObj.name = (await companyArr).pop();

    return companyObj;
  }*/

  @Query((returns) => ApiCompanyExploreEntity)
  async getCompanyById(@Args('companyID', { type: () => String }) id: string) {
    const companyArr = await this.companyService.getCompanyById(id);
    const companyObj = new ApiCompanyExploreEntity();
    const UserprofileObj = new ApiCompanyExploreUserprofileEntity();
    let profile = null;

    if (companyArr.length > 0) {
      companyObj.companyID = (await companyArr).pop();
      companyObj.name = (await companyArr).pop();
      companyObj.id = (await companyArr).pop;
      companyObj.email = (await companyArr).pop;
      companyObj.password = (await companyArr).pop;
      companyObj.passwordSalt = (await companyArr).pop;
      companyObj.name = (await companyArr).pop;
      companyObj.dateOfBirth = (await companyArr).pop;
      companyObj.companyID = (await companyArr).pop;
      companyObj.created = (await companyArr).pop;
      companyObj.suspended = (await companyArr).pop;
      companyObj.validated = (await companyArr).pop;
      
      profile = (await companyArr).pop;
      UserprofileObj.userId = (await profile).pop;
      UserprofileObj.profilePicture = (await profile).pop;
      UserprofileObj.bio = (await profile).pop;

      companyObj.Userprofile = UserprofileObj;
    }

    return companyObj;
  }

  @Query((returns) => Array<ApiCompanyExploreEntity>())
  async GetListOfComapnies() {
    const CompaniesArr = await this.companyService.getDefaultCompany();
    const arrOfCompanies = new Array<ApiCompanyExploreEntity>();
    let CompaniesObj = new ApiCompanyExploreEntity();
    let UserprofileObj = new ApiCompanyExploreUserprofileEntity();
    let company = null;
    let profile = null;
    
    while ((await CompaniesArr).length > 0) {
      company = (await CompaniesArr).pop;
      CompaniesObj = new ApiCompanyExploreEntity();
      UserprofileObj = new ApiCompanyExploreUserprofileEntity();
      //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated, Userprofile ()
      CompaniesObj.id = (await company).pop;
      CompaniesObj.email = (await company).pop;
      CompaniesObj.password = (await company).pop;
      CompaniesObj.passwordSalt = (await company).pop;
      CompaniesObj.name = (await company).pop;
      CompaniesObj.dateOfBirth = (await company).pop;
      CompaniesObj.companyID = (await company).pop;
      CompaniesObj.created = (await company).pop;
      CompaniesObj.suspended = (await company).pop;
      CompaniesObj.validated = (await company).pop;
      //userId, profilePicture, bio
      profile = (await company).pop;
      UserprofileObj.userId = (await profile).pop;
      UserprofileObj.profilePicture = (await profile).pop;
      UserprofileObj.bio = (await profile).pop;
      //add userprofile
      CompaniesObj.Userprofile = UserprofileObj;
      //add to array
      arrOfCompanies.push(CompaniesObj);
    }

    return arrOfCompanies;
  }

  @Query((returns) => Array<ApiCompanyExploreEntity>())
  async GetCompanySearchResult(@Args('company_name', { type: () => String }) company_name: string) {
    const CompaniesArr = await this.companyService.getSearchResults(company_name);
    const arrOfCompanies = new Array<ApiCompanyExploreEntity>();
    let CompaniesObj = new ApiCompanyExploreEntity();
    let UserprofileObj = new ApiCompanyExploreUserprofileEntity();
    let company = null;
    let profile = null;
    
    while ((await CompaniesArr).length > 0) {
      company = (await CompaniesArr).pop;
      CompaniesObj = new ApiCompanyExploreEntity();
      UserprofileObj = new ApiCompanyExploreUserprofileEntity();
      //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated, Userprofile ()
      CompaniesObj.id = (await company).pop;
      CompaniesObj.email = (await company).pop;
      CompaniesObj.password = (await company).pop;
      CompaniesObj.passwordSalt = (await company).pop;
      CompaniesObj.name = (await company).pop;
      CompaniesObj.dateOfBirth = (await company).pop;
      CompaniesObj.companyID = (await company).pop;
      CompaniesObj.created = (await company).pop;
      CompaniesObj.suspended = (await company).pop;
      CompaniesObj.validated = (await company).pop;
      //userId, profilePicture, bio
      profile = (await company).pop;
      UserprofileObj.userId = (await profile).pop;
      UserprofileObj.profilePicture = (await profile).pop;
      UserprofileObj.bio = (await profile).pop;
      //add userprofile
      CompaniesObj.Userprofile = UserprofileObj;
      //add to array
      arrOfCompanies.push(CompaniesObj);
    }

    return arrOfCompanies;
  }

  @Query((returns) => Array<ApiCompanyExploreTaggedEntity>())
  async GetCompanyTagged(@Args('inputTag', { type: () => String }) inputTag: string) {
    const CompaniesArr = await this.companyService.getTaggedCompany(inputTag);
    const arrOfCompanies = new Array<ApiCompanyExploreTaggedEntity>();
    let TaggedObj = new ApiCompanyExploreTaggedEntity();
    let UserObj = new ApiCompanyExploreUserEntity();
    let tagged = null;
    let user = null;

    while ((await CompaniesArr).length > 0) {
      tagged = (await CompaniesArr).pop;
      TaggedObj = new ApiCompanyExploreTaggedEntity();
      UserObj = new ApiCompanyExploreUserEntity();
      //UserId, tag, user
      TaggedObj.UserId = (await tagged).pop;
      TaggedObj.tag = (await tagged).pop;
      //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated
      user = (await tagged).pop;
      UserObj.id = (await user).pop;
      UserObj.email = (await user).pop;
      UserObj.password = (await user).pop;
      UserObj.passwordSalt = (await user).pop;
      UserObj.name = (await user).pop;
      UserObj.dateOfBirth = (await user).pop;
      UserObj.companyID = (await user).pop;
      UserObj.created = (await user).pop;
      UserObj.suspended = (await user).pop;
      UserObj.validated = (await user).pop;
      //add userprofile
      TaggedObj.user = UserObj;
      //add to array
      arrOfCompanies.push(TaggedObj);
    }

    return arrOfCompanies;
  }

}