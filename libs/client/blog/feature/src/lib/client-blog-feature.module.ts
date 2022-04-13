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
import { FlexLayoutModule} from '@angular/flex-layout';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogExploreComponent } from './blog-explore/blog-explore.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogExploreCardComponent } from './blog-explore/blog-explore-card/blog-explore-card.component';
import { HeaderComponent } from './../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/header/header.component';
import { FooterComponent } from './../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/footer/footer.component';
import { CardsComponent } from './../../../../shared/components/cards/ui/src/lib/cards/cards.component';
import { BlogExploreFilterComponent } from './blog-explore/blog-explore-filter/blog-explore-filter.component';

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
    BlogRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    BlogViewComponent,
    BlogExploreComponent,
    BlogCreateComponent,
    BlogExploreCardComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    BlogExploreFilterComponent
  ],
  exports: [BlogExploreComponent]
})
export class ClientBlogFeatureModule {}