import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentExplorePageComponent } from './student-explore-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentExplorePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentExploreRoutingModule { }
