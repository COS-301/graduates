import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPageComponent } from './status-page/status-page.component';
import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    StatusPageComponent,
    StatusCardComponent
  ],
})
export class ClientStatusPageFeatureModule {}
