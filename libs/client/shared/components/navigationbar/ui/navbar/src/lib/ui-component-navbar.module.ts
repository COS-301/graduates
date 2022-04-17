import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TabsComponent } from './tabs/tabs.component';

export const uiComponentNavbarRoutes: Route[] = [
  {
    path: 'test',
    component: NavigationBarComponent,
  },
  {
    path: 'test2',
    component: TabsComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationBarComponent, TabsComponent],
  exports: [TabsComponent],
})
export class UiComponentNavbarModule {}
