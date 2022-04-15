import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@graduates/client/shared/assets/ui';
import { CompanyExploreCardComponent } from './company-explore-card/company-explore-card.component';

import { CompanyExploreContentComponent } from './company-explore-content.component';

describe('CompanyExploreContentComponent', () => {
  let component: CompanyExploreContentComponent;
  let fixture: ComponentFixture<CompanyExploreContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[UiModule],
      declarations: [ CompanyExploreContentComponent,CompanyExploreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
