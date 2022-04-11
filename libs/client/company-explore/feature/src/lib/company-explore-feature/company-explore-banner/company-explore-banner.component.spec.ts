import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExploreBannerComponent } from './company-explore-banner.component';

describe('CompanyExploreBannerComponent', () => {
  let component: CompanyExploreBannerComponent;
  let fixture: ComponentFixture<CompanyExploreBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExploreBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
