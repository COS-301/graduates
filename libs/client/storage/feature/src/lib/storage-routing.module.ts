import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStoragePageComponent } from "./main-storage-page/main-storage-page.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";

const routes: Routes = [
  {
    path: ':userID/file-upload/:fileCategory',
    component: FileUploadComponent
  },
  {
    path: ':userID',
    component: MainStoragePageComponent
  },
  { 
    path: '**',
    redirectTo: 'storage/1'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
