import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, FeatureRoutingModule],
  exports: [FeatureComponent],
})
export class FeatureModule {}
