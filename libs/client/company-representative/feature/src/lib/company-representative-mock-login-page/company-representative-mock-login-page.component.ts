import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'graduates-company-representative-mock-login-page',
  templateUrl: './company-representative-mock-login-page.component.html',
  styleUrls: ['./company-representative-mock-login-page.component.scss']
})
export class CompanyRepresentativeMockLoginPageComponent {
  constructor(private _router: Router) { }

  navigateToFirst() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }
}
