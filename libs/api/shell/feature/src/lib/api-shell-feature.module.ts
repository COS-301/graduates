import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { ApiStorageApiFeatureModule as ApiStorageFeatureModule } from '@graduates/api/storage/api/feature';
import { ApiHostingApiFeatureModule as ApiHostingFeatureModule } from '@graduates/api/hosting/api/feature';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
//import { ApiShortsApiFeatureModule as ApiShortsFeatureModule } from '@graduates/api/shorts/api/feature';
@Module({
  imports: [
    ApiExampleFeatureModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ApiStorageFeatureModule,
    //ApiShortsFeatureModule,
    ApiHostingFeatureModule,
  ],
})
export class ApiShellFeatureModule {}
