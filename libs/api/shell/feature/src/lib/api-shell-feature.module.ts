import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { ApiStorageApiFeatureModule as ApiStorageFeatureModule } from '@graduates/api/storage/api/feature';
import { ApiStudentProfilesModule as ApiStudentProfilesModule } from '@graduates/api/student-profiles/api/feature';
import { ApiHostingApiFeatureModule as ApiHostingFeatureModule } from '@graduates/api/hosting/api/feature';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApiAccessStatusApiFeatureModule as ApiAccessStatusFeatureModule} from '@graduates/api/access-status/api/feature';
import { ApiShortsApiFeatureModule as ApiShortsFeatureModule } from '@graduates/api/shorts/api/feature';
import { ApicompanyprofilepageApiFeatureModule as ApiCompanyProfilePageFeatureModule } from '@graduates/api/companyprofilepage/api/feature';
import { ApiCompanyRepresentativeApiFeatureModule } from '@graduates/api/company-representative/api/feature';
import { ApiRequestAccessApiFeatureModule as ApiRequestAccessFeatureModule } from '@graduates/api/request-access/api/feature';
import { ApiAuthenticationApiFeatureModule } from '@graduates/api/authentication/api/feature'
import { ApiNotificationsApiFeatureModule } from '@graduates/api/notifications/api/feature'
import { ApiAuthorizationApiFeatureModule as ApiAuthorizationFeatureModule } from '@graduates/api/authorization/api/feature';
import { ApiStudentExploreApiFeatureModule as ApiStudentExploreApiFeatureModule } from '@graduates/api/student-explore/api/feature';
import { ApiAdminConsoleApiFeatureModule  as ApiAdminconsoleApiFeatureModule } from '@graduates/api/adminconsole/api/feature';  

@Module({
  imports: [
    ApiExampleFeatureModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ApiStorageFeatureModule,
    ApiHostingFeatureModule,
    ApiShortsFeatureModule,
    ApiNotificationsApiFeatureModule,
    ApiAccessStatusFeatureModule,
    ApiCompanyProfilePageFeatureModule,
    ApiStudentProfilesModule,
    ApiCompanyRepresentativeApiFeatureModule,
    ApiRequestAccessFeatureModule,
    ApiAuthenticationApiFeatureModule,
    ApiAuthorizationFeatureModule,
    ApiStudentExploreApiFeatureModule,
    ApiAdminconsoleApiFeatureModule

  ],
})
export class ApiShellFeatureModule {}
