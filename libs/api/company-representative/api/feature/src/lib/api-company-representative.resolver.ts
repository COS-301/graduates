import { CompanyRepresentative, CompanyRepresentativeFailedResponse} from '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
@Resolver(CompanyRepresentative)
export class ApiCompanyRepresentativeResolver {
    constructor(private apiCompanyRepresentativeService: ApiCompanyRepresentativeService) {}

  @Query((returns) => CompanyRepresentative)
  async getCompanyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative|CompanyRepresentativeFailedResponse> {
    const resp = await this.apiCompanyRepresentativeService.getCompanyRepresentative(id);
    if (!resp) {
      const data = new CompanyRepresentativeFailedResponse();
      data.response = "User does not exist";
      return data;
    }
    return resp;
  }

  @Query((returns) => CompanyRepresentative)
  async login(@Args("email") email:string, @Args("password") password:string): Promise<CompanyRepresentative | CompanyRepresentativeFailedResponse> {
    const resp = await this.apiCompanyRepresentativeService.login(email, password)
    if (!resp) {
      const data = new CompanyRepresentativeFailedResponse();
      data.response = "Invalid login";
      return data;
    }
    return resp;
  }

  @Query((returns) => CompanyRepresentative)
  async deleteCompanyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative|CompanyRepresentativeFailedResponse> {
    const resp = await this.apiCompanyRepresentativeService.deleteRepresentative(id);
    if (!resp) {
      const data = new CompanyRepresentativeFailedResponse();
      data.response = "User does not exist";
      return data;
    }
    return resp;
  }
}
