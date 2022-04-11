import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'graduates-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [MatFormFieldModule]
})
export class SearchBarComponent {

  constructor() {
    //Do Something
   }
}
