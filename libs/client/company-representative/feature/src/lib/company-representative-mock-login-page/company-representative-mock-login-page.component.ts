import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'graduates-company-representative-mock-login-page',
  templateUrl: './company-representative-mock-login-page.component.html',
  styleUrls: ['./company-representative-mock-login-page.component.scss']
})
export class CompanyRepresentativeMockLoginPageComponent implements OnInit{
  formdata!: FormGroup;
  flag = false;
  constructor(private _router: Router) {
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
    alert("incorrect Login Details!");
  }

  submit(data: { email: string; password: string; }){
    alert("email: " + data.email + "Passie: " + data.password);
    if (this.flag)
      this.navigateToFirst()
      else
      this.alertBox();
  }
}
