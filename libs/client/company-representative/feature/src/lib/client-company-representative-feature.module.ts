import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRepresentativePageComponent } from './company-representative-page/company-representative-page.component';
import { CompanyRepresentativeAboutComponent } from './company-representative-about/company-representative-about.component';
import { CompanyRepresentativeTitleComponent } from './company-representative-title/company-representative-title.component';
import { CompanyRepresentativeExperienceComponent } from './company-representative-experience/company-representative-experience.component';
import { CompanyRepresentativeConnectionsComponent } from './company-representative-connections/company-representative-connections.component';
import { CompanyRepresentativeContactComponent } from './company-representative-contact/company-representative-contact.component';
import { MatCardModule } from '@angular/material/card';
import { CompanyRepresentativeRoutingModule } from "./company-representative-routing.module";
import { CompanyRepresentativeExploreComponent } from './company-representative-explore/company-representative-explore.component';
import { CompanyRepresentativeMockStudentExplorePageComponent } from './company-representative-mock-student-explore-page/company-representative-mock-student-explore-page.component';
import { MatButtonModule } from '@angular/material/button';
import { CompanyRepresentativeEditPageComponent } from './company-representative-edit-page/company-representative-edit-page.component';
import { CompanyRepresentativeEditTitleComponent } from './company-representative-edit-page/company-representative-edit-title/company-representative-edit-title.component';
import { CompanyRepresentativeEditExperienceComponent } from './company-representative-edit-page/company-representative-edit-experience/company-representative-edit-experience.component';
import { CompanyRepresentativeEditAboutComponent } from './company-representative-edit-page/company-representative-edit-about/company-representative-edit-about.component';
import { CompanyRepresentativeEditContactComponent } from './company-representative-edit-page/company-representative-edit-contact/company-representative-edit-contact.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CompanyRepresentativeRoutingModule
  ],
  declarations: [
    CompanyRepresentativePageComponent,
    CompanyRepresentativeAboutComponent,
    CompanyRepresentativeTitleComponent,
    CompanyRepresentativeExperienceComponent,
    CompanyRepresentativeConnectionsComponent,
    CompanyRepresentativeContactComponent,
    CompanyRepresentativeExploreComponent,
    CompanyRepresentativeMockStudentExplorePageComponent,
    CompanyRepresentativeEditPageComponent,
    CompanyRepresentativeEditTitleComponent,
    CompanyRepresentativeEditExperienceComponent,
    CompanyRepresentativeEditAboutComponent,
    CompanyRepresentativeEditContactComponent
  ],
  exports : [
    CompanyRepresentativeMockStudentExplorePageComponent,
    CompanyRepresentativePageComponent,
    CompanyRepresentativeEditPageComponent
  ]
})
export class ClientCompanyRepresentativeFeatureModule {}
