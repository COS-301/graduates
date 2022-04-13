import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyNotificationsComponent } from './company-notifications/company-notifications.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: '', component: CompanyNotificationsComponent}
    ]),
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
