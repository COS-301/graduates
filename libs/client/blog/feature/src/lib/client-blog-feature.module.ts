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
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogExploreComponent } from './blog-explore/blog-explore.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HeaderModule } from './../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from './../../../../shared/components/footer/src/lib/footer.module';
import { UiComponentNavbarModule } from './../../../../shared/components/navigationbar/ui/navbar/src/lib/ui-component-navbar.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
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
    FlexLayoutModule,
    HeaderModule,
    FooterModule,
    UiComponentNavbarModule
  ],
  declarations: [
    BlogViewComponent,
    BlogExploreComponent,
    BlogCreateComponent,
  ],
  exports: [BlogExploreComponent]
})
export class ClientBlogFeatureModule {}