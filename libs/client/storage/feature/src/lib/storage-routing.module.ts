import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStoragePageComponent } from "./main-storage-page/main-storage-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainStoragePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
