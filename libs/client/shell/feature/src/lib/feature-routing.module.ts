import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { ClientCompanyRepresentativeFeatureModule } from '@graduates/client/company-representative/feature';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
