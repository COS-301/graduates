import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsTabComponent } from './requests-tab/requests-tab.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StudentRequestsRoutingModule } from "./student-requests-routing.module";

@NgModule({
  imports: [CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    StudentRequestsRoutingModule],
  declarations: [
    RequestsTabComponent
  ],
  exports: [
    RequestsTabComponent
  ],
})
export class ClientStudentRequestsFeatureModule {}
