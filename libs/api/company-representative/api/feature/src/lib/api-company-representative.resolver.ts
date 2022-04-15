import { CompanyRepresentative, CompanyRepresentativeCreate, LoggerInformation} from '@graduates/api/company-representative/api/shared/data-access';
import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { User as authenticatedUser} from '@graduates/api/authentication/api/shared/interfaces/data-access';

const pubSub = new PubSub();
@Resolver(CompanyRepresentative)
export class ApiCompanyRepresentativeResolver {
    constructor(private companyrepService: ApiCompanyRepresentativeService) {}

  @Query((returns) => CompanyRepresentative)
  async companeyRepresentative(@Args('id') id: string): Promise<CompanyRepresentative|any> {
    const resp = await this.companyrepService.findOneById(id);
    if (!resp) {
      const data = {
        "id" :id,
        "response" : "User does not exist"
      };
      return data;
    }
    return resp;
  }

  @Query((returns) => CompanyRepresentative)
  async companeyRepresentatives(): Promise<CompanyRepresentative|any> {
    const resp = await this.companyrepService.getAllReps();
    if (!resp) {
      const data = {
        "response" : "fatal error, could not get users"
      };
      return data;
    }
    return resp;
  }

  @Mutation((returns) => CompanyRepresentative)
  async createCompanyrep(@Args('newCompanyrepresentativeData') newCompanyrepresentativeData: CompanyRepresentativeCreate): Promise<CompanyRepresentative | any> {
    const resp = await this.companyrepService.createRep(null);
    pubSub.publish('companyrepAdded', { companyrepAdded: resp });
    return resp;
  }

  @Mutation((returns) => String)
  async login(@Args('loggerInformation') loggerInformation : LoggerInformation): Promise<string> {
    
    //use the service function

    return "";
  }
}
