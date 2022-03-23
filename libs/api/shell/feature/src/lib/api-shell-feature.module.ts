import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { ApiStorageApiFeatureModule as ApiStorageFeatureModule } from '@graduates/api/storage/api/feature';
import { ApiHostingApiFeatureModule as ApiHostingFeatureModule } from '@graduates/api/hosting/api/feature';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CompanyrepModule as ApiCompanyRepresentativeApiFeatureModule } from '@graduates/api-CompanyRepresentative-api-feature';
//import { ApiShortsApiFeatureModule as ApiShortsFeatureModule } from '@graduates/api/shorts/api/feature';
import { ApiAccessStatusApiFeatureModule as ApiAccessStatusFeatureModule} from '@graduates/api/access-status/api/feature';
import { ApiShortsApiFeatureModule as ApiShortsFeatureModule } from '@graduates/api/shorts/api/feature';
import { ApicompanyprofilepageApiFeatureModule as ApiCompanyProfilePageFeatureModule } from '@graduates/api/companyprofilepage/api/feature';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ApiExampleFeatureModule,
    ApiCompanyRepresentativeApiFeatureModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ApiStorageFeatureModule,
    //ApiShortsFeatureModule,
    ApiHostingFeatureModule,
    ApiShortsFeatureModule,
    ApiAccessStatusFeatureModule,
    ApiCompanyProfilePageFeatureModule,
  ],
})
export class ApiShellFeatureModule {}