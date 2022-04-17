import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainStoragePageComponent } from './main-storage-page/main-storage-page.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { DeleteAllComponent } from './delete-all/delete-all.component';
import { DownloadAllComponent } from './download-all/download-all.component';
import { StorageRoutingModule } from "./storage-routing.module";
import { FileUploadComponent } from './file-upload/file-upload.component';

// adding material related modules 
@NgModule({
  imports: [
    CommonModule,
    StorageRoutingModule,
    MatIconModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    MainStoragePageComponent,
    PageTitleComponent,
    DeleteAllComponent,
    DownloadAllComponent,
    FileUploadComponent
  ],
  exports: [MainStoragePageComponent]
})
export class ClientStorageFeatureModule {}
