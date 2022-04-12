import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResponsesTabComponent } from './responses-tab/responses-tab.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    ResponsesTabComponent
  ],
  exports: [
    ResponsesTabComponent
  ],
})
export class ClientStudentResponsesFeatureModule {}
