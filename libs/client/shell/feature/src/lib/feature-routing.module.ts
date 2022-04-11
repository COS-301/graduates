import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('@graduates/client/example/feature').then(
            (m) => m.FeatureModule
          ),
      },
      {
        path: 'student-profile',
        pathMatch: 'full',
        loadChildren: () =>
          import('@graduates/client/student-profile/feature').then(
            (m) => m.StudentProfileModule
          ),
      }
    ]),
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
