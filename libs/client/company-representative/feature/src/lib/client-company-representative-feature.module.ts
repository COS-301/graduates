import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRepresentativePageComponent } from './company-representative-page/company-representative-page.component';
import { CompanyRepresentativeAboutComponent } from './company-representative-about/company-representative-about.component';
import { CompanyRepresentativeTitleComponent } from './company-representative-title/company-representative-title.component';
import { CompanyRepresentativeExperienceComponent } from './company-representative-experience/company-representative-experience.component';
import { CompanyRepresentativeConnectionsComponent } from './company-representative-connections/company-representative-connections.component';
import { CompanyRepresentativeContactComponent } from './company-representative-contact/company-representative-contact.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule,MatCardModule],
  declarations: [
    CompanyRepresentativePageComponent,
    CompanyRepresentativeAboutComponent,
    CompanyRepresentativeTitleComponent,
    CompanyRepresentativeExperienceComponent,
    CompanyRepresentativeConnectionsComponent,
    CompanyRepresentativeContactComponent
  ],
  exports : [
    CompanyRepresentativePageComponent,
    CompanyRepresentativeAboutComponent,
    CompanyRepresentativeTitleComponent,
    CompanyRepresentativeExperienceComponent,
    CompanyRepresentativeConnectionsComponent,
    CompanyRepresentativeContactComponent
  ]
})
export class ClientCompanyRepresentativeFeatureModule {}
