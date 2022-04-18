/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'graduates-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {
  
  constructor(private router: Router) {
    this.title = null;
   }

/* eslint-disable @typescript-eslint/no-explicit-any */
   @Input() title: any;
   
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {

    if(this.title != null) {

      if(this.title.title =="BSc"){
        const element=document.getElementById('title');
        if(element != null) {
          (element as HTMLInputElement).value='BSc';
        }
      }
      else if(this.title.title =="BSc(Hons)"){
        const element=document.getElementById('title');
        
        if(element != null) {
          (element as HTMLInputElement).value='BSc(Hons)';
        }
      }
      else if(this.title.title =="MSc"){
        const element=document.getElementById('title');
        if(element != null) { 
          (element as HTMLInputElement).value='MSc';
        }
      }
      else if(this.title.title =="PhD"){
        const element=document.getElementById('title');
        if(element != null) { 
          (element as HTMLInputElement).value='PhD';
        }
      }
      else if(this.title.title =="MIT"){
        const element=document.getElementById('title');
        if(element != null) { 
          (element as HTMLInputElement).value='MIT';
        }
      }
    }
    else {
      this.router.navigateByUrl('/not-found');
    }
  }
}