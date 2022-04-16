import { Component, OnInit } from '@angular/core';
import { NotificationsApi } from './notif-display.api';

@Component({
  selector: 'graduates-notif-display',
  templateUrl: './notif-display.component.html',
  styleUrls: ['./notif-display.component.scss'],
})
export class NotifDisplayComponent{

  constructor( private notifApi : NotificationsApi) {

    this.notifApi.getNotificationsAll().subscribe({
      next: (res) => {
        console.log(res.data.notificationsAll[0]);
      }
    });
  }
}
