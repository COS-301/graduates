import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryExploreComponent } from './story-explore/story-explore.component';

const routes: Routes = [
  {
    path: '',
    component: StoryExploreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortsRoutingModule { }
