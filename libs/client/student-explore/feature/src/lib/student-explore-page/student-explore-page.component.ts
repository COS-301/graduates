import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StudentCardComponent } from '../student-card/student-card.component';
import { MobileStudentCardComponent } from '../mobile-student-card/mobile-student-card.component';

@Component({
  selector: 'graduates-student-explore-page',
  templateUrl: './student-explore-page.component.html',
  styleUrls: ['./student-explore-page.component.scss'],
  providers: [FilterComponent, SearchBarComponent, StudentCardComponent, MobileStudentCardComponent]
})
export class StudentExplorePageComponent {

  constructor() {
    //Do Something
   }
}
