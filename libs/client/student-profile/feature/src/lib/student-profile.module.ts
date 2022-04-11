import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { Routes} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [
    StudentProfileComponent,
  ],
  exports: [StudentProfileComponent]
})
export class StudentProfileModule {}
