import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
// import { EditingPageComponent } from './editing-page/editing-page.component';

// let comp;
// let comp = CompanyProfileComponent;
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

// function setComp(c) {
//   if (c=="edit")
//   {
//     comp = "";
//     comp = EditingPageComponent;
//   }
//   else {
//     comp = CompanyProfileComponent;
//   }
// }