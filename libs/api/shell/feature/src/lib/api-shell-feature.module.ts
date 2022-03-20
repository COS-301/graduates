import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { ApiStorageApiFeatureModule as ApiStorageFeatureModule } from '@graduates/api/storage/api/feature';
import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [ApiExampleFeatureModule,
  GraphQLModule.forRoot({
    autoSchemaFile: true,
    driver: ApolloDriver
  }), ApiStorageFeatureModule],
})
export class ApiShellFeatureModule {}
