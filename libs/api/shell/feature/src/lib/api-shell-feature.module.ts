import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CompanyrepModule as ApiFeatureModule} from 'libs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ApiExampleFeatureModule, 
    ApiFeatureModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true
    }),
  ],
})
export class ApiShellFeatureModule {}
