import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExploreCardComponent } from './company-explore-card.component';

describe('CompanyExploreCardComponent', () => {
  let component: CompanyExploreCardComponent;
  let fixture: ComponentFixture<CompanyExploreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExploreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
