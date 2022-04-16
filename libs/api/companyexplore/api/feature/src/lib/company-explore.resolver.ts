import { Resolver, Query, Args } from '@nestjs/graphql';
import { ApiCompanyExploreEntity } from "@graduates/api/companyexplore/api/shared/interfaces/data-access";
import { CompanyExploreService } from '@graduates/api/companyexplore/service/feature';

@Resolver(() => ApiCompanyExploreEntity)
export class ApiCompanyExploreResolver {
  constructor(private companyService: CompanyExploreService) {}

  @Query(() => ApiCompanyExploreEntity, { name: 'company' })
  async getCompanyDec(@Args('companyID', { type: () => String }) id: string) {

    // const companyArr = this.companyService.getCompanyById(id);
    // const companyObj = new ApiCompanyExploreEntity();

    // const companyObj = (await companyArr).pop();

    // companyObj.companyID = (await companyArr).pop();
    // companyObj.name = (await companyArr).pop();

    return this.companyService.getCompanyById(id);
  }
}