import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin-console',
    loadChildren: () =>
      import('@graduates/client/adminconsole/feature').then(
        (x) => x.ClientAdminconsoleFeatureModule
      ),
  },
  {
    path: 'example',
    loadChildren: () =>
      import('@graduates/client/example/feature').then((x) => x.FeatureModule),
  },
  {
    path: 'company-explore',
    loadChildren: () =>
      import('@graduates/client/company-explore/feature').then(
        (x) => x.ClientCompanyExploreFeatureModule
      ),
  },
  {
    path: 'student-explore',
    loadChildren: () =>
      import('@graduates/client-student-explore-feature').then(
        (x) => x.ClientStudentExploreModule
      ),
  },
  {
    path: 'company-representative',
    loadChildren: () =>
      import('@graduates/client/company-representative/feature').then(
        (x) => x.ClientCompanyRepresentativeFeatureModule
      ),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('@graduates/client/notifications/feature').then(
        (x) => x.ClientNotificationsFeatureModule
      ),
  },
  {
    path: 'company-notifications',
    loadChildren: () =>
      import('@graduates/client/company-notifications/feature').then(
        (x) => x.ClientCompanyNotificationsFeatureModule
      ),
  },
  {
    path: 'student-requests',
    loadChildren: () =>
      import('@graduates/client/student-requests/feature').then(
        (x) => x.ClientStudentRequestsFeatureModule
      ),
  },
  {
    path: 'student-responses',
    loadChildren: () =>
      import('@graduates/client/student-responses/feature').then(
        (x) => x.ClientStudentResponsesFeatureModule
      ),
  },
  {
    path: 'shorts',
    loadChildren: () =>
      import('@graduates/client/shorts/feature').then(
        (x) => x.ClientShortsFeatureModule
      ),
  },
  {
    path: 'student-profile',
    loadChildren: () =>
      import('@graduates/client/student-profile/feature').then(
        (x) => x.ClientStudentProfileFeatureModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('@graduates/client/blog/feature').then(
        (x) => x.ClientBlogFeatureModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@graduates/client/company-representative/feature').then(
        (x) => x.ClientCompanyRepresentativeFeatureModule
      ),
  },
  {
    path: 'storage',
    loadChildren: () =>
      import('@graduates/client/storage/feature').then(
        (x) => x.ClientStorageFeatureModule
      ),
  },
  {
    path: 'status-api',
    loadChildren: () =>
      import('@graduates/client/status-page/feature').then(
        (x) => x.ClientStatusPageFeatureModule
      ),
  },
  {
    path: 'company-profile',
    loadChildren: () =>
      import('@graduates/client/company-profile/feature').then(
        (x) => x.ClientCompanyProfileFeatureModule
      ),
  },
  {
    path: 'upintegration',
    loadChildren: () =>
      import('@graduates/client/upintegration/feature').then(
        (x) => x.ClientUpintegrationFeatureModule
        ),
  },
  {
    path: 'Authorization',
    loadChildren:()=>
      import('@graduates/client/authorization/feature').then(
        (x)=>x.ClientAuthorizationFeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
