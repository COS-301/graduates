import { Component } from '@angular/core';

@Component({
  selector: 'graduates-company-bio',
  templateUrl: './company-bio.component.html',
  styleUrls: ['./company-bio.component.scss'],
})
export class CompanyBioComponent {
  bio = "A space for companies to outline their history and their values";
  constructor() {
    //do something
  }

  setBio (b : string) {
    this.bio = b;
  }
}
