import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './api-authentication-api-feature.service';
import { UsersModule } from './users/users.module';
import { UsersResolver } from './users/users.resolver';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    UsersModule],
  controllers: [],
  providers: [AppService, UsersResolver],
})


export class ApiAuthenticationApiFeatureModule {}
