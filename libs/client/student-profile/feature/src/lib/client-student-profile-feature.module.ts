import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//component imports
import { ProfileBodyComponent } from './profile-body/profile-body.component';
import { RequestForAccessModule } from '@graduates/client/request-for-access/feature';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProfileRoutingModule } from './profile-routing.module';

// importing material 
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RequestForAccessModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    ProfileBodyComponent,
    UserInfoComponent
  ],
   exports: [ProfileBodyComponent]
})
export class ClientStudentProfileFeatureModule {}
