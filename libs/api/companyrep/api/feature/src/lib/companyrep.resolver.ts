/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NotFoundException} from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Companyrep } from '../../../shared/data-access/src/lib/companyrep.model';
import { NewCompanyrepInput } from '../../../shared/data-access/src/lib/new-companyrep.input';
import {CompanyrepService} from '../../../../service/feature/src/lib/companyrep.service';

const pubSub = new PubSub();

@Resolver((of: any) => Companyrep)
export class CompanyrepResolver {
    constructor(private readonly companyrepService : CompanyrepService) {}

    @Query(returns => Companyrep)
    async companyrep(@Args('id') id : string): Promise<Companyrep>{
        const example = await this.companyrepService.findOneById(id);
        if(!example){
            throw new NotFoundException(id);
        }
        return  example;
    } 

    @Mutation(returns => Companyrep)
    async addCompanyrep(@Args('newCompanyrepData') newCompanyrepData: NewCompanyrepInput,): Promise<Companyrep> {
        const resp = await this.companyrepService.create(newCompanyrepData);
        pubSub.publish('companyrepAdded', { companyrepAdded: resp });
        return resp;
    }
}
