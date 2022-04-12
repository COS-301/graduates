import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportMenuComponent } from './report-menu/report-menu.component';
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
  },
  {
    path: 'report/:id',
    component: ReportMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortsRoutingModule { }
