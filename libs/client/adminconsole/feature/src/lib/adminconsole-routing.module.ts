import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';

const routes: Routes = [
  {
    path: '',
    component: AdminconsoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminconsoleRoutingModule { }
