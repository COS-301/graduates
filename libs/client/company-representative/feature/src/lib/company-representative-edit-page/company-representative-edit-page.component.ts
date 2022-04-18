import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeService } from '../company-representative-service/company-representative-service.service';

@Component({
  selector: 'graduates-company-representative-edit-page',
  templateUrl: './company-representative-edit-page.component.html',
  styleUrls: ['./company-representative-edit-page.component.scss']
})
export class CompanyRepresentativeEditPageComponent {
  formdata!: FormGroup;
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
    this.formdata = new FormGroup({
      name: new FormControl(this.name,[Validators.required, Validators.maxLength(50)]),//, Validators.maxLength(50)
      experience: new FormControl(this.experience,[Validators.required, Validators.maxLength(500)]),//, Validators.maxLength(500)
      number: new FormControl(this.number,[Validators.required, Validators.pattern("[0][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]")]),//
      location: new FormControl(this.location,[Validators.required,Validators.maxLength(100)]),//,Validators.maxLength(60)
      email: new FormControl(this.email, [Validators.required, Validators.email]),//, Validators.email
      linkedin: new FormControl(this.linkedin,[Validators.required, Validators.pattern("(https:\\/\\/)?linkedin.com\\/.*")]),//, Validators.pattern("(https:\\/\\/)?linkedin.com\\/.*")
      twitter: new FormControl(this.twitter,[Validators.required, Validators.pattern(".*@twitter.com")]),//, Validators.pattern(".*@twitter.com")
      instagram: new FormControl(this.instagram,[Validators.required, Validators.pattern(".*@instagram.com")]),//, Validators.pattern(".*@instagram.com")
      facebook: new FormControl(this.facebook,[Validators.required, Validators.pattern(".*@facebook.com")]),//, Validators.pattern(".*@facebook.com")
      snapchat: new FormControl(this.snapchat,[Validators.required, Validators.pattern(".*@snapchat.com")]),//, Validators.pattern(".*@snapchat.com")
      github: new FormControl(this.github,[Validators.required, Validators.pattern(".*@github.com")]),//, Validators.pattern(".*@github.com")
    });
  }

  submit(formdata: { name :string; experience :string; number :string; location :string; email :string; linkedin :string; twitter :string; instagram :string; facebook :string; snapchat :string; github :string; }){
    if(this.formdata.valid) {
      console.log(this.formdata.value);
      this.result = this.API.updateRepresentative(this.id, formdata.name, formdata.experience, formdata.number, formdata.location, formdata.email, formdata.linkedin, formdata.twitter, formdata.instagram, formdata.facebook, formdata.snapchat, formdata.github).subscribe({
        next: (item) => {
          if (item.data != null){
            localStorage.setItem("id", item.data.updateCompanyRepresentative.id);
            this._router.navigate(['CompanyRepresentativeHome'], {state: {id: item.data.updateCompanyRepresentative.id}, queryParamsHandling: "preserve"});
          }else{
            alert("Incorrect Details, Try Again!");
          }
        },
      error: (err) => { console.log(err); }
      });
      this.navigateToHome();
    }
  }

  uploadImage(event: any) {
    this.API.upload(event.target.files[0], this.id);
    this.displayImage();
  }

  displayImage() {
    this.API.download(this.id, "Image").subscribe({
      next: (item) => {
        if (item) {
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
    this._router.navigate(['student-explore'])
  }
}
