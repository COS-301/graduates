import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPageComponent } from './status-page/status-page.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { StatusPageRoutingModule } from './status-page-routing.module';

@NgModule({
  imports: [CommonModule, StatusPageRoutingModule],
  declarations: [StatusPageComponent, StatusCardComponent],
  exports: [StatusPageComponent],
})
export class ClientStatusPageFeatureModule {}
