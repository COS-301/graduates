import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyNotificationsComponent } from './company-notifications/company-notifications.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CompanyNotificationsRoutingModule } from "./company-notifications-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    CompanyNotificationsRoutingModule
  ],
  declarations: [
    CompanyNotificationsComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CompanyNotificationsComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class ClientCompanyNotificationsFeatureModule {}
