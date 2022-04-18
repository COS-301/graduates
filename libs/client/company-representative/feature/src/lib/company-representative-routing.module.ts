import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyRepresentativePageComponent } from './company-representative-page/company-representative-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CompanyRepresentativePageComponent,
      },
    ]),
  ],
})
export class CompanyRepresentativeRoutingModule { }
