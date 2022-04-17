import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CompanyProfileComponent,
      },
    ]),
  ],
})
export class CompanyProfileRoutingModule {}
