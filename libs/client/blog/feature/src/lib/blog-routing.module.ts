import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogExploreComponent } from './blog-explore/blog-explore.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

const routes: Routes = [
  {
    path: '',
    component: BlogExploreComponent
  },
  {
    path: 'create',
    component: BlogCreateComponent
  },
  {
    path: 'view',
    // path: 'view?blogID=',
    component: BlogViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }