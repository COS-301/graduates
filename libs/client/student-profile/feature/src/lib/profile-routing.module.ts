import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBodyComponent } from './profile-body/profile-body.component';
import { ClientUpintegrationFeatureModule } from '@graduates/client/upintegration/feature';
import { ClientStorageFeatureModule } from '@graduates/client/storage/feature';
import { ClientShortsFeatureModule } from '@graduates/client-shorts-feature';

const routes: Routes = [
  {
    path: '',
    component: ProfileBodyComponent
  },
  {
    path: ':id',
    component: ProfileBodyComponent
  },
  {
    path: 'upintegration',
    component: ClientUpintegrationFeatureModule
  },
  {
    path: 'storage/1',
    component: ClientStorageFeatureModule
  },
  {
    path: 'shorts',
    component: ClientShortsFeatureModule
  },
  {
    path: 'shorts/upload',
    component: ClientShortsFeatureModule
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
