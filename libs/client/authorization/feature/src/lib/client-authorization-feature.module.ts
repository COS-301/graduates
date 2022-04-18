import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthorizationServiceService } from './authorization-service.service';



@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
  ],
})
export class ClientAuthorizationFeatureModule {
  constructor(public serve:AuthorizationServiceService)
  {
    console.log(serve.getRole());
  }
}
