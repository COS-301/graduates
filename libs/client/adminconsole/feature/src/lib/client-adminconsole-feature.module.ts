import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { HeaderComponent } from '../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/header/header.component';
import { FooterComponent } from '../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AdminconsoleComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    AdminconsoleComponent
  ],
})
export class ClientAdminconsoleFeatureModule {}
