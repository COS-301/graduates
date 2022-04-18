import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpintegrationBodyComponent } from './upintegration-body/upintegration-body.component';
import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  declarations: [UpintegrationBodyComponent],
  exports: [UpintegrationBodyComponent],
})
export class ClientUpintegrationModule {}
