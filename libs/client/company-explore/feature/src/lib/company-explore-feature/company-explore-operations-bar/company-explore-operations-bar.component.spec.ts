import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@graduates/client/shared/assets/ui';
import { CompanyExploreFilterComponent } from './company-explore-filter/company-explore-filter.component';

import { CompanyExploreOperationsBarComponent } from './company-explore-operations-bar.component';
import { CompanyExploreSearchbarComponent } from './company-explore-searchbar/company-explore-searchbar.component';

describe('CompanyExploreOperationsBarComponent', () => {
  let component: CompanyExploreOperationsBarComponent;
  let fixture: ComponentFixture<CompanyExploreOperationsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[UiModule, RouterTestingModule,FormsModule],
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
