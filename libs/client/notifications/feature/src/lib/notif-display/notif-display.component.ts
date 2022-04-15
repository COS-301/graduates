import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ExpansionNotifComponent } from '../expansion-notif/expansion-notif.component';

@Component({
  selector: 'graduates-notif-display',
  templateUrl: './notif-display.component.html',
  styleUrls: ['./notif-display.component.scss']
})
export class NotifDisplayComponent{

  @ViewChild('placeholder', { read: ViewContainerRef, static: true})
  public placeholder!: ViewContainerRef;

  constructor() {
    //
  }

  requestCV() {
    fetch('http://localhost:3333/graphQL', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
        query {
          notificationsAll {
            ID
            userIDFrom
            userIDTo
          }
        }`
      }),
    })
    .then(res =>  res.json())
    .then(res => {
      const comp = this.placeholder.createComponent(ExpansionNotifComponent);
      comp.instance.description ='Request for CV.';
      comp.instance.userFrom = res.data.notificationsAll[0].userIDFrom;
      comp.instance.userTo = res.data.notificationsAll[0].userIDTo;
      comp.instance.requestedItem = "CV";
    });
  }
  requestAR() {
    fetch('http://localhost:3333/graphQL', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
        query {
          notificationsAll {
            ID
            userIDFrom
            userIDTo
          }
        }`
      }),
    })
    .then(res =>  res.json())
    .then(res => {
      const comp = this.placeholder.createComponent(ExpansionNotifComponent);
      comp.instance.description ='Request for Academic Record.';
      comp.instance.userFrom = res.data.notificationsAll[0].userIDFrom;
      comp.instance.userTo = res.data.notificationsAll[0].userIDTo;
      comp.instance.requestedItem = "Academic Record";
    });
  }
  requestCD() {
    fetch('http://localhost:3333/graphQL', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
        query {
          notificationsAll {
            ID
            userIDFrom
            userIDTo
          }
        }`
      }),
    })
    .then(res =>  res.json())
    .then(res => {
      const comp = this.placeholder.createComponent(ExpansionNotifComponent);
      comp.instance.description ='Request for Contact Details.';
      comp.instance.userFrom = res.data.notificationsAll[0].userIDFrom;
      comp.instance.userTo = res.data.notificationsAll[0].userIDTo;
      comp.instance.requestedItem = "contact details";
    });
  }
}
