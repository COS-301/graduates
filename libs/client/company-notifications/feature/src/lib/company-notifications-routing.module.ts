import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyNotificationsComponent } from './company-notifications/company-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyNotificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyNotificationsRoutingModule { }