import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './api-authentication-api-feature.controller';
import { AppService } from './api-authentication-api-feature.service';
import { UsersModule } from './users/users.module';
import { UsersResolver } from './users/users.resolver';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersResolver],
})


export class ApiAuthenticationApiFeatureModule {}
