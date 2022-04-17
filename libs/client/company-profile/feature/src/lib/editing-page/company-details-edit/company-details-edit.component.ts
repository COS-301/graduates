import { Component } from '@angular/core';

@Component({
  selector: 'graduates-company-details-edit',
  templateUrl: './company-details-edit.component.html',
  styleUrls: ['./company-details-edit.component.scss'],
})
export class CompanyDetailsEditComponent {
  website: string | undefined = "www.website.com";
  phone: string | undefined = "0123456789";
  location: string | undefined = "example street, pretoria";
  email: string | undefined = "extraextralonguser@example.com";
  constructor() {
    //do something
  }
  save () : void {
    this.website = document.getElementById("website")?.innerHTML;
    this.phone = document.getElementById("phone")?.innerHTML;
    this.location = document.getElementById("location")?.innerHTML;
    this.email = document.getElementById("email")?.innerHTML;
  }
}
