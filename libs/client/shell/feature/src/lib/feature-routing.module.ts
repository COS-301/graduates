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
    ]),
  ],
})
export class FeatureRoutingModule {}
