import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import{CompanyProfileMaterialModule} from './materials/company-profile-material.module';
import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyProfileRoutingModule} from './company-profile-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {CompanyBioComponent} from './company-bio/company-bio.component';
import {IndustryAndServicesComponent} from './industry-and-services/industry-and-services.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {RepresentativeListComponent} from './representative-list/representative-list.component';
import {SocialMediaComponent} from './social-media/social-media.component';
import {CompanyBioEditComponent} from './editing-page/company-bio-edit/company-bio-edit.component';
import {IndustryAndServicesEditComponent} from './editing-page/industry-and-services-edit/industry-and-services-edit.component';
import {CompanyDetailsEditComponent} from './editing-page/company-details-edit/company-details-edit.component';
import {SocialMediaEditComponent} from './editing-page/social-media-edit/social-media-edit.component';
import {ButtonComponent} from '../../../../shared/components/buttons/ui/src/lib/button/button.component';
import {MatButtonModule} from '@angular/material/button';
import {UiComponentNavbarModule} from '../../../../shared/components/navigationbar/ui/navbar/src/lib/ui-component-navbar.module';
// import {ApicompanyprofilepageServiceFeatureModule} from '@graduates/api/companyprofilepage/service/feature';

@NgModule({
  imports: [CommonModule,
    CompanyProfileRoutingModule,
    CompanyProfileMaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    HeaderModule,
    FooterModule,
    UiComponentNavbarModule,
  ],
  declarations: [CompanyProfileComponent,
    CompanyBioComponent,
    IndustryAndServicesComponent,
    CompanyDetailsComponent,
    RepresentativeListComponent,
    SocialMediaComponent,
    CompanyBioEditComponent,
    IndustryAndServicesEditComponent,
    CompanyDetailsEditComponent,
    SocialMediaEditComponent,
    ButtonComponent,
  ],
    exports: [CompanyProfileComponent]
  })
export class ClientCompanyProfileFeatureModule {}
