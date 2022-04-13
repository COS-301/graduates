import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  
  ngOnInit(): void {
    document.getElementById("ig")?.addEventListener("click", display);
    function display()
    {
       document.getElementById("ig")?.focus();
    }
  }
}