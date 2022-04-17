import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifDisplayComponent } from './notif-display/notif-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NotificationsRoutingModule } from "./notifications-routing.module";

import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';

@NgModule({
  imports: [
    NotificationsRoutingModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    FooterModule,
    HeaderModule,

  ],
  declarations: [
    NotifDisplayComponent,   
  ],
  exports: [
    NotifDisplayComponent
  ],
})
export class ClientNotificationsFeatureModule {}
