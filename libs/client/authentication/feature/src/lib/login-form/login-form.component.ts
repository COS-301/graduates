import { Component, /*OnInit*/} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { observable } from 'rxjs';
import { AuthService } from './Auth.service';

@Component({
  selector: 'graduates-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})


  
export class LoginFormComponent{

  formdata!: FormGroup;
  result = <unknown> observable;
  
  constructor(private _router: Router, private API: AuthService)
  {
    /*private formBuilder: FormBuilder,
    private router: Router) { }*/

    this.formdata = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,}$") ])
    });
  }

  submit(formdata: { email: string; password: string; }){
    alert("Submit");
    if(this.formdata.valid) {
      this.API.login(formdata.email, formdata.password).subscribe({
        next: (item) => {
          console.log("Response", item);
          if (item.data != null){
            localStorage.setItem("id", item.data.login.id);
            //this._router.navigate(['LoginPageFeature'], {state: {id: item.data.login.id}, queryParamsHandling: "preserve"});
          }else{
            alert("Incorrect Username/Password");
          }
        },
      error: (err) => { console.log(err); }
      });
    }
  }

  ngOnInit(): void {
    alert("login");
  }
}

    //constructor(private _router: Router, private API : AuthService) {
      
  
  /*ngOnInit(): void {

   this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['']
    });

    document.getElementById("ig")?.addEventListener("click", display);
    function display()
    {
       document.getElementById("ig")?.focus();
    }
  }

  get f() { return this.loginForm.controls; }

  login() {
    const loginRequest: LoginRequest = {
      email: this.f.email.value,
      password: this.f.password.value
    };

    this.authService.login(loginRequest)
      .subscribe((user) => this.router.navigate([this.authService.INITIAL_PATH]));
  }
}*/







  

 
