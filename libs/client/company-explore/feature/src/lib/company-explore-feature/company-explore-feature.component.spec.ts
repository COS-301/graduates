import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExploreFeatureComponent } from './company-explore-feature.component';

describe('CompanyExploreFeatureComponent', () => {
  let component: CompanyExploreFeatureComponent;
  let fixture: ComponentFixture<CompanyExploreFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExploreFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
