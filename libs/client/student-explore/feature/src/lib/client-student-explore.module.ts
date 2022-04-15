//Basic Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Material Modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

//Component Modules
import { StudentCardComponent } from './student-card/student-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MobileStudentCardComponent } from './mobile-student-card/mobile-student-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
  declarations: [StudentCardComponent, SearchBarComponent, MobileStudentCardComponent],
  exports:[
    StudentCardComponent,
    SearchBarComponent,
    MobileStudentCardComponent,
  ]
})
export class ClientStudentExploreModule {}
