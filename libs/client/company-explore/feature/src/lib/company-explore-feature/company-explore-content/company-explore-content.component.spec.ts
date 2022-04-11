import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyExploreMaterialModule } from '../../materials/company-explore-material.module';
import { CompanyExploreCardComponent } from './company-explore-card/company-explore-card.component';

import { CompanyExploreContentComponent } from './company-explore-content.component';

describe('CompanyExploreContentComponent', () => {
  let component: CompanyExploreContentComponent;
  let fixture: ComponentFixture<CompanyExploreContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CompanyExploreMaterialModule],
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
