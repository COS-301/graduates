import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestForAccessComponent } from './request-for-access.component';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { NgxsModule } from '@ngxs/store';
import { AccessState } from './stores/request-for-access.state';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
    MatIconModule,
    NgxsModule.forFeature([
      AccessState
    ])
  ],
  declarations: [RequestForAccessComponent],
  exports: [RequestForAccessComponent]
})
export class RequestForAccessModule {}
