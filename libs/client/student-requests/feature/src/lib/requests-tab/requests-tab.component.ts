import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-requests-tab',
  templateUrl: './requests-tab.component.html',
  styleUrls: ['./requests-tab.component.scss']
})
export class RequestsTabComponent {

  constructor() {
    //do something
  }

  callNotif(msg: string) {
    alert("The following has been requested: "+msg);
  }
}
