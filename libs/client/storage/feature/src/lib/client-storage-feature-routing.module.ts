import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing my component here to generate a path/route to it ... 
import { StorageFeatureComponent } from './client-storage-feature.component';

const routes: Routes = [
  {
    path: '',
    component: StorageFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageFeatureRoutingModule { }