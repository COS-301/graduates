import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestForAccessComponent } from './request-for-access.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [CommonModule, MatDividerModule],
  declarations: [RequestForAccessComponent],
})
export class RequestForAccessModule {}
