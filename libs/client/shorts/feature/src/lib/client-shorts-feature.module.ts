//Material Modules
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryExploreComponent } from './story-explore/story-explore.component';
import { StoryUploadComponent } from './story-upload/story-upload.component';

import { ShortsRoutingModule } from './shorts-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {Apollo, gql} from 'apollo-angular';

import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';

@NgModule({

  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    ShortsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    FooterModule,
    HeaderModule,
  ],
  declarations: [
    StoryExploreComponent,
    StoryUploadComponent,
  ],
  providers: [
    FormBuilder, Apollo,
  ],
  exports: [StoryExploreComponent]
})
export class ClientShortsFeatureModule {}
