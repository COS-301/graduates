import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import{CompanyProfileMaterialModule} from './materials/company-profile-material.module';
// import { FooterComponent } from '../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/footer/footer.component';
// import { HeaderComponent } from '../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyProfileRoutingModule} from './company-profile-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {CompanyBioComponent} from './company-bio/company-bio.component';
import {IndustryAndServicesComponent} from './industry-and-services/industry-and-services.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {RepresentativeListComponent} from './representative-list/representative-list.component';
import {SocialMediaComponent} from './social-media/social-media.component';
// import {ButtonComponent} from '../../../../shared/components/buttons/ui/src/lib/button/button.component'

@NgModule({
  imports: [CommonModule,
    CompanyProfileRoutingModule,
    CompanyProfileMaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [CompanyProfileComponent,
    CompanyBioComponent,
    IndustryAndServicesComponent,
    CompanyDetailsComponent,
    RepresentativeListComponent,
    SocialMediaComponent
    // ButtonComponent
    // FooterComponent,
    // HeaderComponent
  ],
    exports: [CompanyProfileComponent]
  })
export class ClientCompanyProfileFeatureModule {}
