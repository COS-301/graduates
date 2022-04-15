import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ],
})
export class ClientSharedComponentsDropdownUiModule {}
