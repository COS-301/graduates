import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpintegrationBodyComponent } from './upintegration-body/upintegration-body.component';
import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UpintegrationRoutingModule } from './upintegration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    UpintegrationRoutingModule,
  ],
  declarations: [UpintegrationBodyComponent],
  exports: [UpintegrationBodyComponent],
})
export class ClientUpintegrationFeatureModule {}
