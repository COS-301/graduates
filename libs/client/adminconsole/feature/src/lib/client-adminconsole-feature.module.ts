import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
// import { HeaderComponent } from '../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/header/header.component';
// import { FooterComponent } from '../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/footer/footer.component';
// import { DropdownComponent } from '../../../../shared/components/dropdown/ui/src/lib/dropdown/dropdown.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatMenuModule, MatIconModule],
  declarations: [
    AdminconsoleComponent,
    // HeaderComponent,
    // FooterComponent,
    // DropdownComponent,
  ],
  exports: [
    AdminconsoleComponent
  ],
})
export class ClientAdminconsoleFeatureModule {}
