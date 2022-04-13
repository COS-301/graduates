import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing all the component that will be used
import { StorageFeatureComponent } from './client-storage-feature.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { DeleteAllComponent } from './delete-all/delete-all.component';
import { DownloadAllComponent } from './download-all/download-all.component';
// import { StorageFeatureRoutingModule } from './client-storage-feature-routing.module';

// importing material things
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    StorageFeatureComponent, 
    PageTitleComponent, 
    DeleteAllComponent, 
    DownloadAllComponent
  ],
  imports: [
    CommonModule, 
    MatGridListModule
  ],
//   exports: [StorageFeatureComponent],
})
export class StorageFeatureModule {}

// client-storage-feature-routing.module.ts
