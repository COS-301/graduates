import { Component } from '@angular/core';
import { Component, OnDestroy, OnInit} from '@angular/core'; //For form functionality 
import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature'; //For Authorization 
import {ActivatedRoute, Router} from 'angular/router'; //For Routing 

@Component({
  selector: 'graduates-authentication-login-page',
  templateUrl: './login-feature.component.html',
  styleUrls: ['./login-feature.component.scss']
})

export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }
  
  ngOnInit(): void {

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
}
