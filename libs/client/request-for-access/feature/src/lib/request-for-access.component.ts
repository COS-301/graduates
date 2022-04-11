import { Component } from '@angular/core';

@Component({
  selector: 'graduates-request-for-access-feature',
  templateUrl: './request-for-access.component.html',
  styleUrls: ['./request-for-access.component.scss'],
})
export class RequestForAccessComponent {
  buttons: string[] = [];

  constructor() {
    for(let i=0; i<5; i++) {
      this.buttons.push(`Button ${i}`);
    }
  }
}
