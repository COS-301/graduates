import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsTabComponent } from './requests-tab/requests-tab.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRequestsRoutingModule { }