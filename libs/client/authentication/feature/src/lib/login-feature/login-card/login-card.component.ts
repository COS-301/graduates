import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  
  ngOnInit(): void {
    document.getElementById("ig")?.addEventListener("click", display);
    function display()
    {
       document.getElementById("ig")?.focus();
    }
  }
}