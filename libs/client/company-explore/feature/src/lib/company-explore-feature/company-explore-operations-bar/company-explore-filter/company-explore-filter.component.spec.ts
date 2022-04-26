import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@graduates/client/shared/assets/ui';
import { CompanyExploreFilterComponent } from './company-explore-filter.component';

describe('CompanyExploreFilterComponent', () => {
  let component: CompanyExploreFilterComponent;
  let fixture: ComponentFixture<CompanyExploreFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[UiModule,RouterTestingModule],
      declarations: [ CompanyExploreFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
