/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor() { 
    // this.studentInfo = null;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  // @Input() studentInfo: any;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }
}