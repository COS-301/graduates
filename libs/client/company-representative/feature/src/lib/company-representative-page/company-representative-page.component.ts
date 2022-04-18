import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeServiceService } from '../company-representative-service/company-representative-service.service';

@Component({
  selector: 'graduates-company-representative-page',
  templateUrl: './company-representative-page.component.html',
  styleUrls: ['./company-representative-page.component.scss']
})
export class CompanyRepresentativePageComponent {
  id = "";
  profilePicture = 'assets/thumbnails/profile.png';
  name = "";
  jobTitle = "";
  experience = "";
  about = "";
  number = ""
  location = "";
  email = "";
  website = "";
  linkedin = "";
  twitter = "";
  instagram = "";
  facebook = "";
  snapchat = "";
  github = "";
  result = <unknown> observable;

  constructor(private _router: Router, private API : CompanyRepresentativeServiceService) {
    if (localStorage.getItem("id") != null) {
      this.id = localStorage.getItem("id") as string;
    }
    else if (this._router.getCurrentNavigation() != null) {
      this.id = this._router.getCurrentNavigation()?.extras?.state?.['id'];
    }
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


  uploadImage(event: any) {
    const fileType = event.target.files[0].type;
    console.log(event.target.files[0]);

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
