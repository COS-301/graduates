import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AdminconsoleComponent
  ],
  exports: [
    AdminconsoleComponent
  ],
})
export class ClientAdminconsoleFeatureModule {}
