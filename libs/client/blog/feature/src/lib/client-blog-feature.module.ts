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
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogExploreComponent } from './blog-explore/blog-explore.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogExploreCardComponent } from './blog-explore/blog-explore-card/blog-explore-card.component';

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
    BlogRoutingModule
  ],
  declarations: [
    BlogViewComponent,
    BlogExploreComponent,
    BlogCreateComponent,
    BlogExploreCardComponent
  ],
  exports: [BlogExploreComponent]
})
export class ClientBlogFeatureModule {}