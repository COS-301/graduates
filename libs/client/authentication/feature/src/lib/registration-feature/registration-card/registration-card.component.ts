import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-registration-card',
  templateUrl: './registration-card.component.html',
  styleUrls: ['./registration-card.component.scss'],
})
export class RegistrationCardComponent implements OnInit {
  
  ngOnInit(): void {
    document.getElementById("ig")?.addEventListener("click", display);
    function display()
    {
       document.getElementById("ig")?.focus();
    }
  }
}