import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsesTabComponent } from './responses-tab/responses-tab.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StudentResponsesRoutingModule } from "./student-responses-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    StudentResponsesRoutingModule
  ],
  declarations: [
    ResponsesTabComponent
  ],
  exports: [
    ResponsesTabComponent
  ],
})
export class ClientStudentResponsesFeatureModule {}
