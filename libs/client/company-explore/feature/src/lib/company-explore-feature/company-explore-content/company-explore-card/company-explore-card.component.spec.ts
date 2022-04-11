import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyExploreMaterialModule } from '../../../materials/company-explore-material.module';

import { CompanyExploreCardComponent } from './company-explore-card.component';

describe('CompanyExploreCardComponent', () => {
  let component: CompanyExploreCardComponent;
  let fixture: ComponentFixture<CompanyExploreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CompanyExploreMaterialModule],
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
