import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  ngOnInit(): void 
  {
    document.getElementById("ig")?.addEventListener("click", display);
    function display()
    {
       document.getElementById("ig")?.focus();
    }
  }
}
