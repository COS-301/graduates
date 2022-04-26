import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRepresentativePageComponent } from './company-representative-page/company-representative-page.component';
import { MatCardModule } from '@angular/material/card';
import { CompanyRepresentativeRoutingModule } from "./company-representative-routing.module";
import { CompanyRepresentativeMockLoginPageComponent } from './company-representative-mock-login-page/company-representative-mock-login-page.component';
import { CompanyRepresentativeMockStudentExplorePageComponent } from './company-representative-mock-student-explore-page/company-representative-mock-student-explore-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyRepresentativeEditPageComponent } from './company-representative-edit-page/company-representative-edit-page.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    CompanyRepresentativeRoutingModule
  ],
  declarations: [
    CompanyRepresentativePageComponent,
    CompanyRepresentativeMockLoginPageComponent,
    CompanyRepresentativeMockStudentExplorePageComponent,
    CompanyRepresentativeEditPageComponent,
  ],
  exports : [
    CompanyRepresentativeMockStudentExplorePageComponent,
    CompanyRepresentativePageComponent,
    CompanyRepresentativeMockLoginPageComponent,
    CompanyRepresentativeEditPageComponent
  ]
})
export class ClientCompanyRepresentativeFeatureModule {}
