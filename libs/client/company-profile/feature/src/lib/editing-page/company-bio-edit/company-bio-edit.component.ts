import { Component} from '@angular/core';
// import { CompanyBioComponent } from '../../company-bio/company-bio.component';
@Component({
  selector: 'graduates-company-bio-edit',
  templateUrl: './company-bio-edit.component.html',
  styleUrls: ['./company-bio-edit.component.scss'],
})
export class CompanyBioEditComponent {
  bio: string | undefined = "A space for companies to outline their history and their values.";
  constructor() {
    //do something
  }
  save () : void {
    this.bio = document.getElementById("company_bio")?.innerHTML;
  }
}
