/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  // htmlstring: string;
 
  constructor() { 
    // this.bio = null;
    // this.htmlstring = "";
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  // @Input() bio: any;

  //eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void { 
   
  }

}