import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'graduates-company-representative-page',
  templateUrl: './company-representative-page.component.html',
  styleUrls: ['./company-representative-page.component.scss']
})
export class CompanyRepresentativePageComponent {
  constructor(private _router: Router) { }

  navigateToFirst() {
    this._router.navigate(['login'])
  }
}
