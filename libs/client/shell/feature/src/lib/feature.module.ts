import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientCompanyRepresentativeFeatureModule } from '@graduates/client/company-representative/feature';
import { AuthenticationFeatureModule } from '@graduates/client/authentication/feature';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, FeatureRoutingModule, ClientCompanyRepresentativeFeatureModule, AuthenticationFeatureModule],
  exports: [FeatureComponent],
})
export class FeatureModule {}
