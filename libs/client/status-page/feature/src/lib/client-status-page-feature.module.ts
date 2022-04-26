import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPageComponent } from './status-page/status-page.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { StatusPageRoutingModule } from './status-page-routing.module';
import { HeaderModule } from "../../../../shared/components/header/src/lib/header.module"
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';

@NgModule({
  imports: [CommonModule, StatusPageRoutingModule, HeaderModule, FooterModule],
  declarations: [StatusPageComponent, StatusCardComponent],
  exports: [StatusPageComponent],
})
export class ClientStatusPageFeatureModule {}
