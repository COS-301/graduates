import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents=[
  MatButtonModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule
]
;
@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class CompanyExploreMaterialModule { }
