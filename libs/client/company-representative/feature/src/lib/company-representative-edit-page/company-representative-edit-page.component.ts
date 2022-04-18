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
    this.formdata = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.maxLength(50)]),
      jobTitle: new FormControl("",[Validators.required, Validators.maxLength(100)]),
      experience: new FormControl("",[Validators.required, Validators.maxLength(500)]),
      about: new FormControl("",[Validators.required, Validators.maxLength(500)]),
      number: new FormControl("",[Validators.required, Validators.pattern("[0]{9}")]),
      location: new FormControl("",[Validators.required,Validators.maxLength(60)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      website: new FormControl("",[Validators.required, Validators.maxLength(100)]),
      linkedin: new FormControl("",[Validators.required, Validators.pattern("(https:\\/\\/)?linkedin.com\\/.*")]),
      twitter: new FormControl("",[Validators.required, Validators.pattern(".*@twitter.com")]),
      instagram: new FormControl("",[Validators.required, Validators.pattern(".*@instagram.com")]),
      facebook: new FormControl("",[Validators.required, Validators.pattern(".*@facebook.com")]),
      snapchat: new FormControl("",[Validators.required, Validators.pattern(".*@snapchat.com")]),
      github: new FormControl("",[Validators.required, Validators.pattern(".*@github.com")]),
    });
  }

  submit(formdata: { name :string; jobTitle :string; experience :string; about :string; number :string; location :string; email :string; website :string; linkedin :string; twitter :string; instagram :string; facebook :string; snapchat :string; github :string; }){
    if(this.formdata.valid) {
      // this.result = this.API.editCompanyRepresentative(formdata.name, formdata.jobTitle, formdata.experience, formdata.about, formdata.number, formdata.location, formdata.email, formdata.website, formdata.linkedin, formdata.twitter, formdata.name, formdata.instagram, formdata.facebook, formdata.snapchat, formdata.github).subscribe({
      //   next: (item) => {
      //     if (item.data != null){
      //       localStorage.setItem("id", item.data.login.id);
      //       this._router.navigate(['CompanyRepresentativeHome'], {state: {id: item.data.login.id}, queryParamsHandling: "preserve"});
      //     }else{
      //       alert("Incorrect Details, Try Again!");
      //     }
      //   },
      // error: (err) => { console.log(err); }
      // });
    }
    else
    {
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
