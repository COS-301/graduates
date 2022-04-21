import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBodyComponent } from './profile-body/profile-body.component';
import { ClientUpintegrationFeatureModule } from '@graduates/client/upintegration/feature';
import { ClientStorageFeatureModule } from '@graduates/client/storage/feature';

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
    loadChildren: () =>
      import('@graduates/client/upintegration/feature').then(
        (x) => x.ClientUpintegrationFeatureModule
        ),
  },
  {
    path: 'storage/1',
    component: ClientStorageFeatureModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
