import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRepresentativePageComponent } from './company-representative-page/company-representative-page.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyRepresentativePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRepresentativeRoutingModule { }
