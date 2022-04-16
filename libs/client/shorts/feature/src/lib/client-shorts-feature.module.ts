//Material Modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

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
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
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
