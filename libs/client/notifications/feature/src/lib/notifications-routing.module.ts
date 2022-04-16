import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
