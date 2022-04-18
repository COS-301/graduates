import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyExploreFeatureComponent } from './company-explore-feature/company-explore-feature.component';
import { UiModule } from '@graduates/client/shared/assets/ui';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyExploreRoutingModule } from './company-explore-feature/company-explore-routing.module';
import { NgxsModule } from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import{FooterModule} from '../../../../shared/components/footer/src/lib/footer.module';
import{UiComponentNavbarModule} from '../../../../shared/components/navigationbar/ui/navbar/src/lib/ui-component-navbar.module'

import { CompanyExploreBannerComponent } from './company-explore-feature/company-explore-banner/company-explore-banner.component';
import { CompanyExploreContentComponent } from './company-explore-feature/company-explore-content/company-explore-content.component';
import { CompanyExploreCardComponent } from './company-explore-feature/company-explore-content/company-explore-card/company-explore-card.component';
import { CompanyExploreOperationsBarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-operations-bar.component';
import { CompanyExploreSearchbarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-searchbar/company-explore-searchbar.component';
import { CompanyExploreFilterComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-filter/company-explore-filter.component';
import{CompanyExploreState} from './company-explore-feature/store/company-explore.state';
import { CompanyExploreMobileContentComponent } from './company-explore-feature/company-explore-mobile-content/company-explore-mobile-content.component';
import { CompanyExploreMobileCardComponent } from './company-explore-feature/company-explore-mobile-content/company-explore-mobile-card/company-explore-mobile-card.component';
@NgModule({
  imports: [CommonModule,
    CompanyExploreRoutingModule,
    HeaderModule,FooterModule,
    UiModule,UiComponentNavbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,
    NgxsLoggerPluginModule,NgxsReduxDevtoolsPluginModule,
    NgxsModule.forFeature([CompanyExploreState])
  ],
  declarations: [
    CompanyExploreFeatureComponent,
    CompanyExploreBannerComponent,
    CompanyExploreContentComponent,
    CompanyExploreCardComponent,
    CompanyExploreOperationsBarComponent,
    CompanyExploreSearchbarComponent,
    CompanyExploreFilterComponent,
    CompanyExploreMobileContentComponent,
    CompanyExploreMobileCardComponent
  ],
  exports: [
    CompanyExploreFeatureComponent
  ],
})
export class ClientCompanyExploreFeatureModule {}
