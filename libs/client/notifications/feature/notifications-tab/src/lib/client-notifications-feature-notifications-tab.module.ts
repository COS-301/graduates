import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotifDisplayComponent } from './notif-display/notif-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotifDisplayComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotifDisplayComponent
  ],
})
export class ClientNotificationsFeatureNotificationsTabModule {}
