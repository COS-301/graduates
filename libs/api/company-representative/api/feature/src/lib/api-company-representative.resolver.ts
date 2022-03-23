import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
@Resolver()
export class ApiCompanyRepresentativeResolver {
    constructor(private readonly companyrepService: ApiCompanyRepresentativeService) {}

  @Query((returns) => CompanyRepresentative)
  async companyrep(@Args('id') id: string): Promise<CompanyRepresentative> {
    const example = await this.companyrepService.findOneById(id);
    if (!example) {
      throw new NotFoundException(id);
    }
    return example;
  }

  @Mutation((returns) => CompanyRepresentative)
  async addCompanyrep(
    @Args('newCompanyrepData') newCompanyrepData: CompanyRepresentative
  ): Promise<CompanyRepresentative> {
    const resp = await this.companyrepService.create(newCompanyrepData);
    pubSub.publish('companyrepAdded', { companyrepAdded: resp });
    return resp;
  }
}
