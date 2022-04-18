import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
import {MatButtonModule} from '@angular/material/button';

// importing material 
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import {MatChipsModule} from '@angular/material/chips';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProfileCardComponent } from './profile-card/profile-card.component'; 



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
    ProfileCardComponent
  ],
   exports: [ProfileBodyComponent]
})
export class ClientStudentProfileFeatureModule {}
