import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifDisplayComponent } from './notif-display/notif-display.component';

const routes: Routes = [
  {
    path: '',
    component: NotifDisplayComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
