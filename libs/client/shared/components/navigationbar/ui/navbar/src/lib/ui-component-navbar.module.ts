import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TabsComponent } from './tabs/tabs.component';

export const uiComponentNavbarRoutes: Route[] = [
  {
    path: 'NavigationBarComponent',
    component: NavigationBarComponent,
  },
  {
    path: 'TabsComponent',
    component: TabsComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationBarComponent, TabsComponent],
  exports: [NavigationBarComponent,TabsComponent],
})
export class UiComponentNavbarModule {}
