/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.sass']
})
export class DegreeComponent implements OnInit {

  constructor() { 
    // this.degree = null;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  // @Input() degree: any;
  
// eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {

    // if(this.degree.nameOfDegree =="Computer Science"){
    //   const element=document.getElementById('degree');
    //   if(element != null) {
    //     (element as HTMLInputElement).value='CS';
    //   }
    // }
    // else if(this.degree.nameOfDegree =="Information And Knowledge Systems"){
    //   const element=document.getElementById('degree');
      
    //   if(element != null) {
    //     (element as HTMLInputElement).value='IKS';
    //   }
    // }
    // else if(this.degree.nameOfDegree =="Big Data Science"){
    //   const element=document.getElementById('degree');
    //   if(element != null) { 
    //     (element as HTMLInputElement).value='BDS';
    //   }
    // }
  }

}