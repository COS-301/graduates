import { CompanyRepresentative, CompanyRepresentativeCreate, CompanyRepresentativeFailedResponse} from '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
@Resolver(CompanyRepresentative)
export class ApiCompanyRepresentativeResolver {
    constructor(private apiCompanyRepresentativeService: ApiCompanyRepresentativeService) {}

  @Query(() => CompanyRepresentative)
  async getCompanyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative|CompanyRepresentativeFailedResponse> {
    const resp = await this.apiCompanyRepresentativeService.getCompanyRepresentative(id);
    if (!resp) {
      const data = new CompanyRepresentativeFailedResponse();
      data.response = "User does not exist";
      return data;
    }
    return resp; 
  }

  @Query(() => CompanyRepresentative)
  async getAllCompanyRepresentatives(): Promise<CompanyRepresentative|CompanyRepresentativeFailedResponse> {
    const resp = await this.apiCompanyRepresentativeService.getAllRepresentatives();
    if (!resp) {
      const data = new CompanyRepresentativeFailedResponse();
      data.response = "User does not exist";
      return data;
    }
    return resp;
  }

  @Query(() => CompanyRepresentative)
  async login(@Args("email") email:string, @Args("password") password:string): Promise<CompanyRepresentative | CompanyRepresentativeFailedResponse> {
    const resp = await this.apiCompanyRepresentativeService.login(email, password)
    if (!resp) {
      const data = new CompanyRepresentativeFailedResponse();
      data.response = "Invalid login";
      return data;
    }
    return resp;
  }

  @Mutation(() => CompanyRepresentative)
  async deleteCompanyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative|CompanyRepresentativeFailedResponse> {
    const resp = await this.apiCompanyRepresentativeService.deleteRepresentative(id);
    if (!resp) {
      const data = new CompanyRepresentativeFailedResponse();
      data.response = "User does not exist";
      return data;
    }
    return resp;
  }

  @Mutation(() => CompanyRepresentative)
  async createCompanyRepresentative(@Args('newCompanyrepresentativeData') newCompanyrepresentativeData: CompanyRepresentativeCreate): Promise<CompanyRepresentative | any> {
    const resp = await this.apiCompanyRepresentativeService.createRepresentative();
    pubSub.publish('companyRepresentativeAdded', { companyRepresentativeAdded: resp });
    return resp;
  }

  @Mutation(() => CompanyRepresentative)
  async getDefaultRepresentative(@Args('id') id : string){
    return this.apiCompanyRepresentativeService.createDefaultRepresentative();
  }
}
