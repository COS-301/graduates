import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

export const uiComponentNavbarRoutes: Route[] = [
  {
    path: '',
    component: NavigationBarComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationBarComponent],
  exports: [NavigationBarComponent],
})
export class UiComponentNavbarModule {}
