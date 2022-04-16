import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyRepresentativePageComponent } from './company-representative-page/company-representative-page.component';
import { CompanyRepresentativeMockLoginPageComponent } from './company-representative-mock-login-page/company-representative-mock-login-page.component';
// import * as path from 'path';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: CompanyRepresentativeMockLoginPageComponent,
      },
      {
        path: 'home-page',
        component: CompanyRepresentativePageComponent,
      },
    ]),
  ],
})
export class CompanyRepresentativeRoutingModule { }
