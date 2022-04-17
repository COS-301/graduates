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
  name = "John Doe";
  jobTitle = "Job Title and area of expertise.";
  experience = "Some quick example text to build on the card title and make up the bulk of the card's content";
  about = "Some quick example text to build on the card title and make up the bulk of the card's content";
  number = "0814941334"
  location = "Pretoria, SA";
  email = "johndoe@example.com";
  website = "www.JohnDoe.com";
  linkedin = "@Johndoe";
  twitter = "@johnDoe";
  instagram = "@JohnDoe";
  facebook = "Facebook.com/JohnDoe";
  snapchat = "JohnDoe";
  github = "JohnDoe@github.com";
  result = <any>observable;
  constructor(private _router: Router, private API : CompanyRepresentativeServiceService) {
    this.result = this.API.getDefaultRepresentative("c1234").subscribe({
      next: (item) => {
        this.name = item.data.getDefaultRepresentative.repName;
        this.jobTitle = item.data.getDefaultRepresentative.jobTitle;
        this.experience = item.data.getDefaultRepresentative.repExperience;
        this.about = item.data.getDefaultRepresentative.aboutMe;
        this.number = item.data.getDefaultRepresentative.phoneNumber;
        this.location = item.data.getDefaultRepresentative.location;
        this.email = item.data.getDefaultRepresentative.email;
        this.website = item.data.getDefaultRepresentative.website;
        this.linkedin = item.data.getDefaultRepresentative.linkedIn;
        this.twitter = item.data.getDefaultRepresentative.twitter;
        this.instagram = item.data.getDefaultRepresentative.instagram;
        this.facebook = item.data.getDefaultRepresentative.facebook;
        this.snapchat = item.data.getDefaultRepresentative.snapChat;
        this.github = item.data.getDefaultRepresentative.gitHub;
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
