import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';
// import { DropdownComponent } from '../../../../shared/components/dropdown/ui/src/lib/dropdown/dropdown.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AdminconsoleRoutingModule } from './adminconsole-routing.module';

@NgModule({
  imports: [CommonModule, MatMenuModule, MatIconModule, FooterModule, FormsModule,
    HeaderModule, AdminconsoleRoutingModule],
  declarations: [
    AdminconsoleComponent,
    // DropdownComponent,
  ],
  exports: [
    AdminconsoleComponent
  ],
})
export class ClientAdminconsoleFeatureModule {}
