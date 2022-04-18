import { Resolver, Query, Args } from '@nestjs/graphql';
import { ApiCompanyExploreEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreUserprofileEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { CompanyExploreService } from '@graduates/api/companyexplore/service/feature';
import { ApiCompanyExploreUserEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { ApiCompanyExploreTaggedEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";

@Resolver((of) => ApiCompanyExploreEntity)
export class ApiCompanyExploreResolver {
   constructor(private companyService: CompanyExploreService) {
   }

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

    /*if (companyArr.length > 0) {
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
    }*/

    if (companyArr.length > 0) {
      const companyObj = new ApiCompanyExploreEntity();
      const UserprofileObj = new ApiCompanyExploreUserprofileEntity();
      companyObj.Userprofile = UserprofileObj;

      companyObj.id = companyArr.id;
      companyObj.email = companyArr.email;
      companyObj.password = companyArr.password;
      companyObj.passwordSalt = companyArr.passwordSalt;
      companyObj.name = companyArr.name;
      companyObj.dateOfBirth = companyArr.dateOfBirth;
      companyObj.companyID = companyArr.companyID;
      companyObj.created = companyArr.created;
      companyObj.suspended = companyArr.suspended;
      companyObj.validated = companyArr.validated;
      companyObj.Userprofile.userId = companyArr.Userprofile.userId;
      companyObj.Userprofile.profilePicture = companyArr.Userprofile.profilePicture;
      companyObj.Userprofile.bio = companyArr.Userprofile.bio;
      
      return companyObj;
    }

    return null;
  }

  @Query((returns) => [ApiCompanyExploreEntity], { nullable: true })
  async GetListOfCompanies() {
    /*const CompaniesArr = await this.companyService.getDefaultCompany();
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

    return arrOfCompanies;*/

    const CompaniesArr = await this.companyService.getDefaultCompany();

    if (CompaniesArr.length > 0) {
      const arrOfCompanies = new Array<ApiCompanyExploreEntity>();

      for (let index = 0; index < CompaniesArr.length; index++) {
        const company = CompaniesArr[index];

        const CompaniesObj = new ApiCompanyExploreEntity();
        CompaniesObj.Userprofile = new ApiCompanyExploreUserprofileEntity();
  
        CompaniesObj.id = company.id;
        CompaniesObj.email = company.email;
        CompaniesObj.password = company.password;
        CompaniesObj.passwordSalt = company.passwordSalt;
        CompaniesObj.name = company.name;
        CompaniesObj.dateOfBirth = company.dateOfBirth;
        CompaniesObj.companyID = company.companyID;
        CompaniesObj.created = company.created;
        CompaniesObj.suspended = company.suspended;
        CompaniesObj.validated = company.validated;
        
        CompaniesObj.Userprofile.userId = company.Userprofile.userId;
        CompaniesObj.Userprofile.profilePicture = company.Userprofile.profilePicture;
        CompaniesObj.Userprofile.bio = company.Userprofile.bio;

        arrOfCompanies.push(CompaniesObj);
      }
      
      return arrOfCompanies;
    }
//REMOVE IF API IS RUNNING
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const dummy = new Array<ApiCompanyExploreEntity>();
    for(let i=0;i<20;i++)
    {
      const companyObj = new ApiCompanyExploreEntity();
      const UserprofileObj = new ApiCompanyExploreUserprofileEntity();
      companyObj.Userprofile = UserprofileObj;


      companyObj.id = "dsadcvvnmnadasd";
      companyObj.email = "notimportant";
      companyObj.password = "dsfdsf";
      companyObj.passwordSalt = "dsfdsf";
      companyObj.name = "company "+i;
      companyObj.dateOfBirth = null;
      companyObj.companyID ="dsadcvvnmnadasd";
      companyObj.created = null;
      companyObj.suspended = true;
      companyObj.validated = false;
      companyObj.Userprofile.userId = "Company";
      companyObj.Userprofile.profilePicture ="https://cdn.pixabay.com/photo/2022/02/09/20/52/labrador-retriever-7004193_960_720.jpg";
      companyObj.Userprofile.bio = "issa nice,very nice";
      
      dummy.push(companyObj)
    }
    return dummy;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!return null    
  }

  @Query((returns) => [ApiCompanyExploreEntity], { nullable: true })
  async GetCompanySearchResult(@Args('company_name', { type: () => String }) company_name: string) {
    /*const CompaniesArr = await this.companyService.getSearchResults(company_name);
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

    return arrOfCompanies;*/

    const CompaniesArr = await this.companyService.getSearchResults(company_name);

    if (CompaniesArr.length > 0) {
      const arrOfCompanies = new Array<ApiCompanyExploreEntity>();

      for (let index = 0; index < CompaniesArr.length; index++) {
        const company = CompaniesArr[index];

        const CompaniesObj = new ApiCompanyExploreEntity();
        CompaniesObj.Userprofile = new ApiCompanyExploreUserprofileEntity();
  
        CompaniesObj.id = company.id;
        CompaniesObj.email = company.email;
        CompaniesObj.password = company.password;
        CompaniesObj.passwordSalt = company.passwordSalt;
        CompaniesObj.name = company.name;
        CompaniesObj.dateOfBirth = company.dateOfBirth;
        CompaniesObj.companyID = company.companyID;
        CompaniesObj.created = company.created;
        CompaniesObj.suspended = company.suspended;
        CompaniesObj.validated = company.validated;

        CompaniesObj.Userprofile.userId = company.Userprofile.userId;
        CompaniesObj.Userprofile.profilePicture = company.Userprofile.profilePicture;
        CompaniesObj.Userprofile.bio = company.Userprofile.bio;

        arrOfCompanies.push(CompaniesObj);
      }
      
      return arrOfCompanies;
    }
//REMOVE IF API IS RUNNING
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const dummy = new Array<ApiCompanyExploreEntity>();
    for(let i=0;i<20;i++)
    {
      const companyObj = new ApiCompanyExploreEntity();
      const UserprofileObj = new ApiCompanyExploreUserprofileEntity();
      companyObj.Userprofile = UserprofileObj;


      companyObj.id = "dsadcvvnmnadasd";
      companyObj.email = "notimportant";
      companyObj.password = "dsfdsf";
      companyObj.passwordSalt = "dsfdsf";
      companyObj.name = "search "+i;
      companyObj.dateOfBirth = null;
      companyObj.companyID ="dsadcvvnmnadasd";
      companyObj.created = null;
      companyObj.suspended = true;
      companyObj.validated = false;
      companyObj.Userprofile.userId = "Company";
      companyObj.Userprofile.profilePicture ="https://cdn.pixabay.com/photo/2014/04/05/12/24/kitten-316995_960_720.jpg";
      companyObj.Userprofile.bio = "issa nice,very nice";
      
      dummy.push(companyObj)
    }
    return dummy;
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!return null
  }

  @Query((returns) =>  [ApiCompanyExploreEntity], { nullable: true })
  async GetCompanyTagged(@Args('inputTag', { type: () => String }) inputTag: string) {
    /*const CompaniesArr = await this.companyService.getTaggedCompany(inputTag);
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

    return arrOfCompanies;*/

    const CompaniesArr = await this.companyService.getTaggedCompany(inputTag);

    if (CompaniesArr.length > 0) {
      const arrOfCompanies = new Array<ApiCompanyExploreTaggedEntity>();

      for (let index = 0; index < CompaniesArr.length; index++) {
        const tagged = CompaniesArr[index];

        const TaggedObj = new ApiCompanyExploreTaggedEntity();
        TaggedObj.user = new ApiCompanyExploreUserEntity();

        TaggedObj.userId = tagged.userId;
        TaggedObj.tag = tagged.tag;

        TaggedObj.user.id = tagged.user.id;
        TaggedObj.user.email = tagged.user.email;
        TaggedObj.user.password = tagged.user.password;
        TaggedObj.user.passwordSalt = tagged.user.passwordSalt;
        TaggedObj.user.name = tagged.user.name;
        TaggedObj.user.dateOfBirth = tagged.user.dateOfBirth;
        TaggedObj.user.companyID = tagged.user.companyID;
        TaggedObj.user.created = tagged.user.created;
        TaggedObj.user.suspended = tagged.user.suspended;
        TaggedObj.user.validated = tagged.user.validated;
        
        arrOfCompanies.push(TaggedObj);
      }
      
      return arrOfCompanies;
    }
//REMOVE IF API IS RUNNING
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const dummy = new Array<ApiCompanyExploreEntity>();
    for(let i=0;i<20;i++)
    {
      const companyObj = new ApiCompanyExploreEntity();
      const UserprofileObj = new ApiCompanyExploreUserprofileEntity();
      companyObj.Userprofile = UserprofileObj;


      companyObj.id = "dsadcvvnmnadasd";
      companyObj.email = "notimportant";
      companyObj.password = "dsfdsf";
      companyObj.passwordSalt = "dsfdsf";
      companyObj.name = "filter "+i;
      companyObj.dateOfBirth = null;
      companyObj.companyID ="dsadcvvnmnadasd";
      companyObj.created = null;
      companyObj.suspended = true;
      companyObj.validated = false;
      companyObj.Userprofile.userId = "Company";
      companyObj.Userprofile.profilePicture ="https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_960_720.jpg";
      companyObj.Userprofile.bio = "issa nice,very nice";
      
      dummy.push(companyObj)
    }
    return dummy;
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!return null
  }
  @Query(()=> String)
  pingCompanyExplore(){
      return "on";
  }

}