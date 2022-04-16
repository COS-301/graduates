import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@graduates/client/shared/assets/ui';
import { CompanyExploreFilterComponent } from './company-explore-filter/company-explore-filter.component';

import { CompanyExploreOperationsBarComponent } from './company-explore-operations-bar.component';
import { CompanyExploreSearchbarComponent } from './company-explore-searchbar/company-explore-searchbar.component';

describe('CompanyExploreOperationsBarComponent', () => {
  let component: CompanyExploreOperationsBarComponent;
  let fixture: ComponentFixture<CompanyExploreOperationsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[UiModule],
      declarations: [ CompanyExploreOperationsBarComponent,
        CompanyExploreSearchbarComponent,
        CompanyExploreFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreOperationsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
