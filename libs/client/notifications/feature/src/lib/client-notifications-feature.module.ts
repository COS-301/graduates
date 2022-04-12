import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotifDisplayComponent } from './notif-display/notif-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NotificationsRoutingModule } from "./notifications-routing.module";

@NgModule({
  imports: [
    NotificationsRoutingModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotifDisplayComponent
  ],
  exports: [
    NotifDisplayComponent
  ],
})
export class ClientNotificationsFeatureModule {}
