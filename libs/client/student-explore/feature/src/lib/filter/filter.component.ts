import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'graduates-student-explore-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [MatCheckboxModule, MatMenuModule, MatButtonModule, MatIconModule],
})
export class FilterComponent {
  constructor() {
    //Do something
  }
}
