import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ApiCompanyRepresentativeResolver {
    constructor(private companyRepresentativeService: ApiCompanyRepresentativeService) {}

  @Query(() => CompanyRepresentative)
  async getCompanyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative> {
    return await this.companyRepresentativeService.getCompanyRepresentative(id);
  }

  @Query(() => CompanyRepresentative) 
  async login(@Args("email") email: string, @Args("password") password: string) : Promise<CompanyRepresentative> {
    return await this.companyRepresentativeService.login(email, password);
  }

  @Query((returns)=>CompanyRepresentative)
  async getAllRepresentatives():Promise<CompanyRepresentative>{
    return await this.companyRepresentativeService.getAllRepresentatives();
  }

  @Mutation((returns) => CompanyRepresentative)
  async deleteCompanyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative> {
    return await this.companyRepresentativeService.deleteRepresentative(id);
  }
}
