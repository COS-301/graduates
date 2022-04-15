/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.sass']
})
export class ProfileCardComponent implements OnInit {

   // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { 
    this.name = null;
  }

  @Input() name: any;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

 

}
