import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'graduates-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
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