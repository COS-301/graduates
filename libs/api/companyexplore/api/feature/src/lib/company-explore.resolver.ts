import { Resolver, Query, Args } from '@nestjs/graphql';
import { ApiCompanyExploreEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreUserprofileEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreService } from '@graduates/api/companyexplore/service/feature';
//import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { ApiCompanyExploreUserEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreTaggedEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";

@Resolver((of) => ApiCompanyExploreEntity)
export class ApiCompanyExploreResolver {
   constructor(private companyService: ApiCompanyExploreService) {}

 /* @Query((returns) => ApiCompanyExploreEntity,{ name: 'company' })
  async getCompanyDec(@Args('companyID', { type: () => String }) id: string) {
    const companyArr = this.companyService.findOneById(id);
    const companyObj = new ApiCompanyExploreEntity();
    companyObj.companyID = (await companyArr).pop();
    companyObj.name = (await companyArr).pop();

    return companyObj;
  }*/

  @Query((returns) => ApiCompanyExploreEntity)
  async GetListOfComapnies() {
    /*const CompaniesArr = this.companyService.getDefaultCompany();
    const CompaniesObj = new ApiCompanyExploreEntity;
    const UserprofileObj = new ApiCompanyExploreUserprofileEntity;
    //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated, Userprofile ()
    CompaniesObj.id = (await CompaniesArr).pop;
    CompaniesObj.email = (await CompaniesArr).pop;
    CompaniesObj.password = (await CompaniesArr).pop;
    CompaniesObj.passwordSalt = (await CompaniesArr).pop;
    CompaniesObj.name = (await CompaniesArr).pop;
    CompaniesObj.dateOfBirth = (await CompaniesArr).pop;
    CompaniesObj.companyID = (await CompaniesArr).pop;
    CompaniesObj.created = (await CompaniesArr).pop;
    CompaniesObj.suspended = (await CompaniesArr).pop;
    CompaniesObj.validated = (await CompaniesArr).pop;
    //userId, profilePicture, bio
    UserprofileObj.userId = (await CompaniesArr).pop;
    UserprofileObj.profilePicture = (await CompaniesArr).pop;
    UserprofileObj.bio = (await CompaniesArr).pop;

    CompaniesObj.Userprofile = UserprofileObj;

    return CompaniesObj;*/
  }

  @Query((returns) => ApiCompanyExploreEntity)
  async GetCompanySearchResult(@Args('company_name', { type: () => String }) company_name: string) {
    /*const CompaniesArr = this.companyService.getSearchResults(company_name);
    const CompaniesObj = new ApiCompanyExploreEntity;
    const UserprofileObj = new ApiCompanyExploreUserprofileEntity;
    //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated, Userprofile ()
    CompaniesObj.id = (await CompaniesArr).pop;
    CompaniesObj.email = (await CompaniesArr).pop;
    CompaniesObj.password = (await CompaniesArr).pop;
    CompaniesObj.passwordSalt = (await CompaniesArr).pop;
    CompaniesObj.name = (await CompaniesArr).pop;
    CompaniesObj.dateOfBirth = (await CompaniesArr).pop;
    CompaniesObj.companyID = (await CompaniesArr).pop;
    CompaniesObj.created = (await CompaniesArr).pop;
    CompaniesObj.suspended = (await CompaniesArr).pop;
    CompaniesObj.validated = (await CompaniesArr).pop;
    //userId, profilePicture, bio
    UserprofileObj.userId = (await CompaniesArr).pop;
    UserprofileObj.profilePicture = (await CompaniesArr).pop;
    UserprofileObj.bio = (await CompaniesArr).pop;

    CompaniesObj.Userprofile = UserprofileObj;

    return CompaniesObj;*/
  }

  @Query((returns) => ApiCompanyExploreEntity)
  async GetCompanyTagged(@Args('inputTag', { type: () => String }) inputTag: string) {
    /*const CompaniesArr = this.companyService.getTaggedCompany(inputTag);
    const TaggedObj = new ApiCompanyExploreTaggedEntity;
    const UserObj = new ApiCompanyExploreUserEntity;
    //UserId, tag, user
    TaggedObj.UserId = (await CompaniesArr).pop;
    TaggedObj.tag = (await CompaniesArr).pop;
    //id, email, password, passwordSalt, name, dateOfBirth, companyID, created, suspended, validated, Userprofile ()
    UserObj.id = (await CompaniesArr).pop;
    UserObj.email = (await CompaniesArr).pop;
    UserObj.password = (await CompaniesArr).pop;
    UserObj.passwordSalt = (await CompaniesArr).pop;
    UserObj.name = (await CompaniesArr).pop;
    UserObj.dateOfBirth = (await CompaniesArr).pop;
    UserObj.companyID = (await CompaniesArr).pop;
    UserObj.created = (await CompaniesArr).pop;
    UserObj.suspended = (await CompaniesArr).pop;
    UserObj.validated = (await CompaniesArr).pop;

    TaggedObj.user = UserObj;

    return TaggedObj;*/
  }

}