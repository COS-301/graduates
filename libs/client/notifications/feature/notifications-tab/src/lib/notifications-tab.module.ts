import { NgModule } from '@angular/core';
// import { NotificationsTabComponent } from './notifications-tab.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
// import { NotifTabComponent } from './notif-tab/notif-tab.component';



@NgModule({
  declarations: [
    // NotificationsTabComponent,
    HeaderComponent,
    FooterComponent
    // CommonModule
    // NotifTabComponent
  ],
  imports: [
  ],
  exports: [
    // NotificationsTabComponent
  ]
})
export class NotificationsTabModule { }
