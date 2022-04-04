import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExploreContentComponent } from './company-explore-content.component';

describe('CompanyExploreContentComponent', () => {
  let component: CompanyExploreContentComponent;
  let fixture: ComponentFixture<CompanyExploreContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExploreContentComponent ]
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
