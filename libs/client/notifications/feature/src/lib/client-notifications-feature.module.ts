import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotifDisplayComponent } from './notif-display/notif-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotifDisplayComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotifDisplayComponent
  ],
})
export class ClientNotificationsFeatureModule {}
