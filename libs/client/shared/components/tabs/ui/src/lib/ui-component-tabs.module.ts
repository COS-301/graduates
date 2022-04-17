import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

export const UiComponentTabsRoutes: Route[] = [
  {
    path: 'tabs',
    component: TabsComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TabsComponent],
  exports: [TabsComponent],
})
export class UiComponentTabsModule {}
