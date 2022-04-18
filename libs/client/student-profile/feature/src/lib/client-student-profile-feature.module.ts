import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


//component imports
import { ProfileBodyComponent } from './profile-body/profile-body.component';
import { RequestForAccessModule } from '@graduates/client/request-for-access/feature';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { TitleComponent } from './title/title.component';
import { DegreeComponent } from './degree/degree.component';
import { EmploymentStatusComponent } from './employment-status/employment-status.component';
import { LocationComponent } from './location/location.component';
import { BioComponent } from './bio/bio.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';
import { ClientSharedComponentsDropdownUiModule } from '@graduates/client/shared/components/dropdown/ui';
import { UiComponentNavbarModule } from '../../../../shared/components/navigationbar/ui/navbar/src/lib/ui-component-navbar.module';


// importing material 
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import {MatChipsModule} from '@angular/material/chips';
import {AchievementsComponent } from './achievements/achievements.component';
import { ProfileCardComponent } from './profile-card/profile-card.component'; 
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RequestForAccessModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    ClientSharedComponentsDropdownUiModule,
    FlexLayoutModule,
    UiComponentNavbarModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    ProfileBodyComponent,
    UserInfoComponent,
    TitleComponent,
    DegreeComponent,
    EmploymentStatusComponent,
    LocationComponent,
    BioComponent,
    AchievementsComponent,
    ProfileCardComponent,
    NotFoundComponent
  ],
   exports: [ProfileBodyComponent]
})
export class ClientStudentProfileFeatureModule {}
