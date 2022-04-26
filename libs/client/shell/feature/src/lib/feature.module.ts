import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientCompanyRepresentativeFeatureModule } from '@graduates/client/company-representative/feature';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, FeatureRoutingModule, ClientCompanyRepresentativeFeatureModule],
  exports: [FeatureComponent],
})
export class FeatureModule {}
