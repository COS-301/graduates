import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { ApiStorageApiFeatureModule as ApiStorageFeatureModule } from '@graduates/api/storage/api/feature';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CompanyrepModule as ApiCompanyRepresentativeApiFeatureModule } from '@graduates/api-CompanyRepresentative-api-feature';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ApiExampleFeatureModule,
    ApiCompanyRepresentativeApiFeatureModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
      installSubscriptionHandlers: true,
    }),
    ApiStorageFeatureModule,
  ],
})
export class ApiShellFeatureModule {}
