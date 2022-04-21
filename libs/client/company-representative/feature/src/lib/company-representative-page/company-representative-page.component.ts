import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeService } from '../company-representative-service/company-representative-service.service';


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

  constructor(private _router: Router, private API : CompanyRepresentativeService) {
    if (localStorage.getItem("id") != null) {
      this.id = localStorage.getItem("id") as string;
      this.displayImage();
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

  async uploadImage(event: any) {
    if (event.target.files[0].type.match(/image\/*/) === null) {
      alert("Only images are supported");
      return;
    }
    this.API.download(this.id, "Image").subscribe({
      next: (item) => {
        if (item.data.download !== "false") {
          this.API.delete(this.id, "Image").subscribe({
            next: (item) => {
              this.API.upload(event.target.files[0], this.id);
            }
          });
        } else {
          this.API.upload(event.target.files[0], this.id);
        }
        const reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);

          reader.onload = (_event) => {
            this.profilePicture = reader.result as string;
          }
      }
    });

  }

  displayImage() {
    this.API.download(this.id, "Image").subscribe({
      next: (item) => {
        if (item.data.download !== "false") {
          this.profilePicture = item.data.download;
        }
      }
    })
  }

  deleteRepresentativeProfile() {
    this.API.deleteRepresentative(this.id).subscribe({
      next: (item) => {
        if (item) {
          localStorage.clear();
          this.navigateToLogin();
        }
      },
      error: (err) => { console.log(err); }
    });
  }

  logout() {
    localStorage.clear();
    this.navigateToLogin();
  }

  navigateToLogin() {
    this._router.navigate(['CompanyRepresentativeLogin'])
  }

  navigateToEdit() {
    this._router.navigate(['CompanyRepresentativeEdit'])
  }

  navigateToExplore() {
    this._router.navigate(['student-explore'])
  }

  navigateToHome() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }
}
