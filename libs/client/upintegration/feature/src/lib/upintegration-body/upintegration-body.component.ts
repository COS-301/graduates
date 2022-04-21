/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'graduates-upintegration-body',
  templateUrl: './upintegration-body.component.html',
  styleUrls: ['./upintegration-body.component.scss'],
})
export class UpintegrationBodyComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(x: any) {
    let studentNumber = '';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    studentNumber = x.value;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submit(inputForm: { value: any }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const permissions = inputForm.value;
  }
}
