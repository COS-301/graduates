import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'graduates-after-login',
  templateUrl: './registration-page-feature.component.html',
  styleUrls: ['./registration-page-feature.component.scss'],
  
})
export class RegistrationPageFeatureComponent implements OnInit {
  
  ngOnInit(): void {
    document.getElementById("ig")?.addEventListener("click", display);
    function display()
    {
       document.getElementById("ig")?.focus();
    }
  }
}