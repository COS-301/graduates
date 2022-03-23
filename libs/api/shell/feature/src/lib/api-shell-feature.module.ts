import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { ApiStorageApiFeatureModule as ApiStorageFeatureModule } from '@graduates/api/storage/api/feature';
import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {ApicompanyprofilepageApiFeatureModule as ApiCompanyProfilePageFeatureModule} from '@graduates/api/companyprofilepage/api/feature';


@Module({
  imports: [ApiExampleFeatureModule,
  GraphQLModule.forRoot({
    autoSchemaFile: true,
    driver: ApolloDriver
  }), ApiStorageFeatureModule, ApiCompanyProfilePageFeatureModule],
})
export class ApiShellFeatureModule {}
