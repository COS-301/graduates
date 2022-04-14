import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryExploreComponent } from './story-explore/story-explore.component';
import { StoryUploadComponent } from './story-upload/story-upload.component';

const routes: Routes = [
  {
    path: '',
    component: StoryExploreComponent
  },
  {
    path: 'upload',
    component: StoryUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortsRoutingModule { }
