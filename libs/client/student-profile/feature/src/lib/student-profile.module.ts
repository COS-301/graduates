import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { StudentProfileComponent } from './student-profile/student-profile.component';
import { RequestForAccessModule } from '@graduates/client/request-for-access/feature';


@NgModule({
  imports: [CommonModule, FlexLayoutModule, RequestForAccessModule],
  declarations: [
    StudentProfileComponent
  ],
  exports: [StudentProfileComponent]
})
export class StudentProfileModule {}
