import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'graduates-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent {

  constructor(private router: Router) {
    //CODE
  }

  return(){ 
    this.router.navigate(['blog']);
  }

}