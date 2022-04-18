import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@graduates/client/shared/assets/ui';

import { CompanyExploreMobileContentComponent } from './company-explore-mobile-content.component';

describe('CompanyExploreMobileContentComponent', () => {
  let component: CompanyExploreMobileContentComponent;
  let fixture: ComponentFixture<CompanyExploreMobileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[UiModule],
      declarations: [ CompanyExploreMobileContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreMobileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
