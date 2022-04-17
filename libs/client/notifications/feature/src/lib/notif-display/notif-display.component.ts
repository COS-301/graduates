import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ExpansionNotifComponent } from '../expansion-notif/expansion-notif.component';
import { NotificationsApi } from './notif-display.api';

@Component({
  selector: 'graduates-notif-display',
  templateUrl: './notif-display.component.html',
  styleUrls: ['./notif-display.component.scss'],
})
export class NotifDisplayComponent implements OnInit{

  @ViewChild('placeholder', { read: ViewContainerRef, static: true})
  public placeholder!: ViewContainerRef;

  constructor(private notifApi : NotificationsApi) {
    //
  }

  ngOnInit(): void {
    this.notifApi.getNotificationsAll().subscribe({
      next: (res) => {
        const notArr = res.data.notificationsAll;
        for (let i = notArr.length-1; i >= 0 ; i--) {
          const comp = this.placeholder.createComponent(ExpansionNotifComponent);
          comp.instance.description = 'Request for '+ res.data.notificationsAll[i].data.notificationType;
          comp.instance.userFrom = res.data.notificationsAll[i].userIdFrom;
          comp.instance.userTo = res.data.notificationsAll[i].userIdTo;
          comp.instance.requestedItem = res.data.notificationsAll[i].data.notificationType;
        }
      }
    });
  }
}
