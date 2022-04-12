import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsTabComponent } from './requests-tab/requests-tab.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RequestsTabComponent
  ],
  exports: [
    RequestsTabComponent
  ],
})
export class ClientStudentRequestsFeatureModule {}
