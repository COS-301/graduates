/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';

@Component({
  selector: 'graduates-upintegration-body',
  templateUrl: './upintegration-body.component.html',
  styleUrls: ['./upintegration-body.component.scss'],
})
export class UpintegrationBodyComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(x: any) {
    let studentNumber = '';
    studentNumber = x.value;
  }
  submit(inputForm: { value: any }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const permissions = inputForm.value;
  }
}
