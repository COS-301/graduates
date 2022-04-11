import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'graduates-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
  providers: [MatCardModule, MatButtonModule],
})
export class StudentCardComponent {
  constructor() {
    //Do something
  }
}
