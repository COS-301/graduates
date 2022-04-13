import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import{CompanyProfileMaterialModule} from './materials/company-profile-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyProfileRoutingModule } from './company-profile/company-profile-routing.module';

@NgModule({
  imports: [CommonModule,
    CompanyProfileRoutingModule,
    CompanyProfileMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [CompanyProfileComponent],
})
export class CompanyProfileModule {}
