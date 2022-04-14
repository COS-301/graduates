import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsesTabComponent } from './responses-tab/responses-tab.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsesTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentResponsesRoutingModule { }