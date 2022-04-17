import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@graduates/client/shared/assets/ui';

import { CompanyExploreMobileCardComponent } from './company-explore-mobile-card.component';
describe('CompanyExploreMobileCardComponent', () => {
  let component: CompanyExploreMobileCardComponent;
  let fixture: ComponentFixture<CompanyExploreMobileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[UiModule],
      declarations: [ CompanyExploreMobileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreMobileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
