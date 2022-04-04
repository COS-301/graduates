import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExploreOperationsBarComponent } from './company-explore-operations-bar.component';

describe('CompanyExploreOperationsBarComponent', () => {
  let component: CompanyExploreOperationsBarComponent;
  let fixture: ComponentFixture<CompanyExploreOperationsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExploreOperationsBarComponent ]
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
