import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ApiCompanyRepresentativeResolver {
    constructor(private companyRepresentativeService: ApiCompanyRepresentativeService) {}

  @Query((returns) => CompanyRepresentative)
  async getCompanyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative> {
    return await this.companyRepresentativeService.getCompanyRepresentative(id);
  }

  @Query((returns) => CompanyRepresentative) 
  async login(@Args("email") email: string, @Args("password") password: string) : Promise<CompanyRepresentative> {
    return await this.companyRepresentativeService.login(email, password);
  }

}
