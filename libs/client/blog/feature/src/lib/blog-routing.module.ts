import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogExploreComponent } from './blog-explore/blog-explore.component';

const routes: Routes = [
  {
    path: '',
    component: BlogExploreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }