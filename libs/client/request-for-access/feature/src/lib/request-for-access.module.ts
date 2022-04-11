import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestForAccessComponent } from './request-for-access.component';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatDividerModule, FlexLayoutModule],
  declarations: [RequestForAccessComponent],
  exports: [
    RequestForAccessComponent
  ]
})
export class RequestForAccessModule {}
