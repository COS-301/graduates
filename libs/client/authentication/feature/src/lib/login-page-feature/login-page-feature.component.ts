import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'graduates-after-login',
  templateUrl: './login-page-feature.component.html',
  styleUrls: ['./login-page-feature.component.scss'],
  
})
export class LoginPageFeatureComponent implements OnInit {
  
  ngOnInit(): void {
    document.getElementById("ig")?.addEventListener("click", display);
    function display()
    {
       document.getElementById("ig")?.focus();
    }
  }
} 
