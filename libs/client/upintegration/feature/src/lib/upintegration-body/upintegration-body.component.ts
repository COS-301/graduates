/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiUpintegrationApiFeatureModule } from '@./../../../api/upintegration/api/feature/src/lib/api-upintegration.module';
import { QueryBus } from '@nestjs/cqrs';

@Component({
  selector: 'graduates-upintegration-body',
  templateUrl: './upintegration-body.component.html',
  styleUrls: ['./upintegration-body.component.scss'],
})
export class UpintegrationBodyComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submit(studentNumberTextbox: { value: any }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const studentNumber = studentNumberTextbox.value;
  }
}
