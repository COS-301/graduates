import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeServiceService } from '../company-representative-service/company-representative-service.service';

@Component({
  selector: 'graduates-company-representative-page',
  templateUrl: './company-representative-page.component.html',
  styleUrls: ['./company-representative-page.component.scss']
})
export class CompanyRepresentativePageComponent{
  profilePicture = 'assets/thumbnails/profile.png';
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
  id = "";
  constructor(private _router: Router, private API : CompanyRepresentativeServiceService) { 
    if (this._router.getCurrentNavigation() != null) {
      this.id = this._router.getCurrentNavigation()?.extras?.state?.['id'];
      this.result = this.API.getCompanyRepresentative(this.id).subscribe({
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
        },
        error: (err) => { console.log(err); }
      });
    } 
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

  navigateToHome() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }
}
