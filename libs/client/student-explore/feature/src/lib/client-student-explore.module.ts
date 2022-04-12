//Basic Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
//import { NavBarComponent } from './nav-bar/nav-bar.component'; //Unnecessary
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

//Component Modules
import { FilterComponent } from './filter/filter.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { MobileStudentCardComponent } from './mobile-student-card/mobile-student-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
  ],
  declarations: [FilterComponent, StudentCardComponent,MobileStudentCardComponent],
  exports:[
    StudentCardComponent,
    FilterComponent,
    MobileStudentCardComponent,
  ]
})
export class ClientStudentExploreModule {}
