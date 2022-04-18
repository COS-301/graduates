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
import { ApolloModule } from 'apollo-angular';
import { APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
// file upload related libraries
// import { BrowserModule } from "@angular/platform-browser";
// import {  } from "module";
import { HttpClientModule } from "@angular/common/http";

//Shared Components
import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module'; 
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module'; 
import { UiComponentNavbarModule } from '../../../../shared/components/navigationbar/ui/navbar/src/lib/ui-component-navbar.module';

// adding material related modules 
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  imports: [
    CommonModule,
    StorageRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HeaderModule,
    FooterModule,
    UiComponentNavbarModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
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
