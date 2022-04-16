import { Component } from '@angular/core';
import { RequestTabApi } from './requests-tab.api';

@Component({
  selector: 'graduates-requests-tab',
  templateUrl: './requests-tab.component.html',
  styleUrls: ['./requests-tab.component.scss']
})
export class RequestsTabComponent {
  constructor(private notifApi : RequestTabApi) {
    //do something
  }

  requestAll() {
    this.requestCV();
    this.requestAR();
    this.requestCD();
  }

  requestCV() {
    this.notifApi.requestCV().subscribe({
      next: (res) => {
        console.log(res);
      }
    });
    alert("CV requested");
  }
  requestAR() {
    this.notifApi.requestAR().subscribe({
      next: (res) => {
        console.log(res);
      }
    });
    alert("Academic record requested");
  }
  requestCD() {
    this.notifApi.requestCD().subscribe({
      next: (res) => {
        console.log(res);
      }
    });
    alert("Contact details requested");
  }
}
