import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeServiceService } from '../company-representative-service/company-representative-service.service';

@Component({
  selector: 'graduates-company-representative-edit-page',
  templateUrl: './company-representative-edit-page.component.html',
  styleUrls: ['./company-representative-edit-page.component.scss']
})
export class CompanyRepresentativeEditPageComponent {
  profilePicture = 'https://s-media-cache-ak0.pinimg.com/236x/c8/e8/cc/c8e8cc83e6eeb60061ba11c9d8ba9a11.jpg';
  name = "NA";
  jobTitle = "NA";
  experience = "NA";
  about = "NA";
  number = "NA"
  location = "NA";
  email = "NA";
  website = "NA";
  linkedin = "NA";
  twitter = "NA";
  instagram = "NA";
  facebook = "NA";
  snapchat = "NA";
  github = "NA";
  result = <any>observable;
  constructor(private _router: Router, private API : CompanyRepresentativeServiceService) {
    this.result = this.API.getCompanyRepresentative("c1234").subscribe({
      next: (item) => {
        if (item){
          this.name = item.data.getCompanyRepresentative.repName;
          this.jobTitle = item.data.getCompanyRepresentative.jobTitle;
          this.experience = item.data.getCompanyRepresentative.repExperience;
          this.about = item.data.getCompanyRepresentative.aboutMe;
          this.number = item.data.getCompanyRepresentative.phoneNumber;
          this.location = item.data.getCompanyRepresentative.location;
          this.email = item.data.getCompanyRepresentative.email;
          this.website = item.data.getCompanyRepresentative.website;
          this.linkedin = item.data.getCompanyRepresentative.linkedIn;
          this.twitter = item.data.getCompanyRepresentative.twitter;
          this.instagram = item.data.getCompanyRepresentative.instagram;
          this.facebook = item.data.getCompanyRepresentative.facebook;
          this.snapchat = item.data.getCompanyRepresentative.snapChat;
          this.github = item.data.getCompanyRepresentative.gitHub;
        }
        else
        {
          (<HTMLInputElement> document.getElementById("submit")).disabled = true;
        }
      },
      error: (err) => { console.log(err); }
    });
  }

  navigateToHome() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }

  navigateToLogin() {
    this._router.navigate(['CompanyRepresentativeLogin'])
  }

  navigateToEdit() {
    this._router.navigate(['CompanyRepresentativeEdit'])
  }

  navigateToExplore() {
    this._router.navigate(['CompanyRepresentativeExplore'])
  }
}
