import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportMenuComponent } from './report-menu/report-menu.component';
import { StorySelectedComponent } from './story-selected/story-selected.component';
import { StoryExploreComponent } from './story-explore/story-explore.component';
import { StoryUploadComponent } from './story-upload/story-upload.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    ReportMenuComponent,
    StorySelectedComponent,
    StoryExploreComponent,
    StoryUploadComponent
  ],

})
export class ClientShortsFeatureModule {}
