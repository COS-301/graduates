import { CompanyRepresentative, CompanyRepresentativeCreate } from '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
@Resolver()
export class ApiCompanyRepresentativeResolver {
    constructor(private companyrepService: ApiCompanyRepresentativeService) {}

  @Query((returns) => CompanyRepresentative)
  async companyrep(@Args('id') id: string): Promise<CompanyRepresentative> {
    const resp = await this.companyrepService.findOneById(id);
    if (!resp) {
      throw new NotFoundException(id);
    }
    return resp;
  }

  // @Mutation((returns) => CompanyRepresentative)
  // async addCompanyrep(
  //   @Args('newCompanyrepData') newCompanyrepData: CompanyRepresentativeCreate
  // ): Promise<CompanyRepresentativeCreate> {
    // const resp = await this.companyrepService.create(newCompanyrepData);
    // pubSub.publish('companyrepAdded', { companyrepAdded: resp });
    // return resp;
  // }
}
