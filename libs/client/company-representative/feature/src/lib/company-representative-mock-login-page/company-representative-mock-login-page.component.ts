import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeServiceService } from '../company-representative-service/company-representative-service.service';

@Component({
  selector: 'graduates-company-representative-mock-login-page',
  templateUrl: './company-representative-mock-login-page.component.html',
  styleUrls: ['./company-representative-mock-login-page.component.scss']
})
export class CompanyRepresentativeMockLoginPageComponent implements OnInit{
  formdata!: FormGroup;
  result = <any>observable;
  constructor(private _router: Router, private API : CompanyRepresentativeServiceService) {
  }

  ngOnInit() {
    this.formdata = new FormGroup({
       email: new FormControl(""),
       password: new FormControl("")
    });
  }

  navigateToFirst() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }

  alertBox(){
    alert("Incorrect Details, Try Again!");
  }

  submit(formdata: { email: string; password: string; }){
    this.result = this.API.login(formdata.email, formdata.password).subscribe({
      next: (item) => {
        if (item.data != null){
          console.log(item);
          this.navigateToFirst();
        }else{
          this.alertBox();
        }
      },
     error: (err) => { console.log(err); }
    });
  }
}
