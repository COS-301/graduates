import { NotFoundException} from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Companyrep } from '../companyrep.model';
import { NewCompanyrepInput } from '../new-companyrep.input';
import {CompanyrepService} from './companyrep.service'

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
        return  example
    } 

    @Mutation(returns => Companyrep)
    async addRecipe(@Args('newRecipeData') newRecipeData: NewCompanyrepInput,): Promise<Companyrep> {
        const recipe = await this.companyrepService.create(newRecipeData);
        pubSub.publish('recipeAdded', { recipeAdded: recipe });
        return recipe;
    }
}
