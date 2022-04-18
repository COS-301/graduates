import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyExploreFeatureComponent } from "./company-explore-feature.component";

const routes: Routes = [
  {
    path: '',
    component: CompanyExploreFeatureComponent
<<<<<<< HEAD
  }
=======
  },
  {path: 'filter/:filter',component: CompanyExploreFeatureComponent },
  {path:'search/:search',component:CompanyExploreFeatureComponent}
>>>>>>> 6e6948a99aa5266ce8bf87d411ce50c25d42683e
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyExploreRoutingModule { }
