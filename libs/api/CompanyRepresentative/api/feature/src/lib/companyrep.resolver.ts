/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CompanyRepresentative } from '@graduates/api-CompanyRepresentative-api-shared-data-access';
import { CreateCompanyRepresentative } from '@graduates/api-CompanyRepresentative-api-shared-data-access';
import { CompanyrepService } from '@graduates/api-CompanyRepresentative-service';


const pubSub = new PubSub();

@Resolver((of: any) => CompanyRepresentative)
export class CompanyrepResolver {
  constructor(private readonly companyrepService: CompanyrepService) {}

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
    @Args('newCompanyrepData') newCompanyrepData: CreateCompanyRepresentative
  ): Promise<CompanyRepresentative> {
    const resp = await this.companyrepService.create(newCompanyrepData);
    pubSub.publish('companyrepAdded', { companyrepAdded: resp });
    return resp;
  }
}
