/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-employment-status',
  templateUrl: './employment-status.component.html',
  styleUrls: ['./employment-status.component.sass']
})
export class EmploymentStatusComponent implements OnInit {

  constructor() {
    // this.employStatus = null;
   } 

   /* eslint-disable @typescript-eslint/no-explicit-any */
  //  @Input() employStatus: any;
   
// eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    // if(this.employStatus.employmentStatus =="Employed, not open to offers"){
    //   const element=document.getElementById('employ');
    //   if(element != null) {
    //     (element as HTMLInputElement).value='ENO';
    //   }
    // }
    // else if(this.employStatus.employmentStatus =="Gauteng"){
    //   const element=document.getElementById('employ');
      
    //   if(element != null) {
    //     (element as HTMLInputElement).value='EO';
    //   }
    // }
    // else if(this.employStatus.employmentStatus =="Unemployed, open to offers"){
    //   const element=document.getElementById('employ');
    //   if(element != null) { 
    //     (element as HTMLInputElement).value='UO';
    //   }
    // }
    // else if(this.employStatus.employmentStatus =="Unemployed, not open to offers"){
    //   const element=document.getElementById('employ');
    //   if(element != null) { 
    //     (element as HTMLInputElement).value='UNO';
    //   }
    // }
  }

}