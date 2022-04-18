import { CompanyRepresentative, CompanyRepresentativeCreate } from '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
<<<<<<< HEAD
import { Args, Query, Resolver } from '@nestjs/graphql';
=======
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef

const pubSub = new PubSub();
@Resolver(CompanyRepresentative)
export class ApiCompanyRepresentativeResolver {
    constructor(private apiCompanyRepresentativeService: ApiCompanyRepresentativeService) {}

<<<<<<< HEAD
  @Query((returns) => CompanyRepresentative)
  async getCompanyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative> {
    return await this.companyRepresentativeService.getCompanyRepresentative(id);
  }

  @Query((returns) => CompanyRepresentative) 
  async login(@Args("email") email: string, @Args("password") password: string) : Promise<CompanyRepresentative> {
    return await this.companyRepresentativeService.login(email, password);
  }

=======
  @Query(() => CompanyRepresentative)
  async getCompanyRepresentative(@Args('id') id: string) {
    const resp = await this.apiCompanyRepresentativeService.getCompanyRepresentative(id);
    return resp; 
  }

  @Query(() => CompanyRepresentative)
  async getAllCompanyRepresentatives() {
    const resp = await this.apiCompanyRepresentativeService.getAllRepresentatives();
    return resp;
  }

  @Query(() => CompanyRepresentative)
  async login(@Args("email") email:string, @Args("password") password:string){
    const resp = await this.apiCompanyRepresentativeService.login(email, password)
    return resp;
  }
  @Query(() =>String) 
  pingCompanyRepresentative(){
    return "on";
  }
  

  @Mutation(() => CompanyRepresentative)
  async deleteCompanyRepresentative(@Args('id') id: string) {
    return await this.apiCompanyRepresentativeService.deleteRepresentative(id);
  }

  @Mutation(() => CompanyRepresentative)
  async createCompanyRepresentative(@Args('newCompanyrepresentativeData') newCompanyrepresentativeData: CompanyRepresentativeCreate) {
    const resp = await this.apiCompanyRepresentativeService.createRepresentative();
    pubSub.publish('companyRepresentativeAdded', { companyRepresentativeAdded: resp });
    return resp;
  }

  @Mutation(() => CompanyRepresentative)
  async getDefaultRepresentative(@Args('id') id : string){
    return this.apiCompanyRepresentativeService.createDefaultRepresentative();
  }
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
}
