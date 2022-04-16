import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewPopUpComponent } from './view-pop-up/view-pop-up.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    ViewPopUpComponent,
    DeletePopupComponent
  ],
})
export class ClientAuthorizationFeatureModule {}
