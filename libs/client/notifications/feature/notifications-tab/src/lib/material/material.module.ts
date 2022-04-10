import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
const material = [
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatCardModule
]
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }



// Done by Aryan Ramnand (u20443626), modified by Hugo Esterhuyse/UI Engineer
