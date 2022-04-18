import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CompanyProfileService } from '../../services/company-profile.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'graduates-company-bio-edit',
  templateUrl: './company-bio-edit.component.html',
  styleUrls: ['./company-bio-edit.component.scss'],
})
export class CompanyBioEditComponent {
  bio: string | undefined;
  subscription = new Subscription;

  constructor(private store: Store, private apiService: CompanyProfileService) {
    this.subscription = this.apiService.currentMessage.subscribe(message => this.bio = message);
  }


  save () : void {
    this.bio = document.getElementById("company_bio_edit")?.innerHTML;
    console.log(this.bio);
    //make API call to access status of resources for particular company
    this.apiService.setBio(this.bio).subscribe({});
  }
}
