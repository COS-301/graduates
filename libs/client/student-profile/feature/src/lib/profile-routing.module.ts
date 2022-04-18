import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBodyComponent } from './profile-body/profile-body.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileBodyComponent
  },
  {
    path: ':id',
    component: ProfileBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
