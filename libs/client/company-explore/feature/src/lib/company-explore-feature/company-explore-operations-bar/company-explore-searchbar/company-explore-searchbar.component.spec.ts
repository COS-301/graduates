import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExploreSearchbarComponent } from './company-explore-searchbar.component';

describe('CompanyExploreSearchbarComponent', () => {
  let component: CompanyExploreSearchbarComponent;
  let fixture: ComponentFixture<CompanyExploreSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExploreSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
