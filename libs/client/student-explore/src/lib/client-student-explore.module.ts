import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { StudentCardComponent } from './student-card/student-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FilterComponent,
    StudentCardComponent
  ],
})
export class ClientStudentExploreModule {}
