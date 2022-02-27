import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: FeatureComponent,
      },
    ]),
  ],
})
export class FeatureRoutingModule {}
