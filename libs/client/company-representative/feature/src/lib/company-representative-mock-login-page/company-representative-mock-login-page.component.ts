import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeService } from '../company-representative-service/company-representative-service.service';

@Component({
  selector: 'graduates-company-representative-mock-login-page',
  templateUrl: './company-representative-mock-login-page.component.html',
  styleUrls: ['./company-representative-mock-login-page.component.scss']
})
export class CompanyRepresentativeMockLoginPageComponent {
  formdata!: FormGroup;
  result = <unknown> observable;

  constructor(private _router: Router, private API : CompanyRepresentativeService) {
    this.formdata = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,}$") ])
    });
  }

  submit(formdata: { email: string; password: string; }){
    if(this.formdata.valid) {
      this.result = this.API.login(formdata.email, formdata.password).subscribe({
        next: (item) => {
          if (item.data != null){
            localStorage.setItem("id", item.data.login.id);
            this._router.navigate(['CompanyRepresentativeHome'], {state: {id: item.data.login.id}, queryParamsHandling: "preserve"});
          }else{
            alert("Incorrect Details, Try Again!");
          }
        },
      error: (err) => { console.log(err); }
      });
    }
  }
}
