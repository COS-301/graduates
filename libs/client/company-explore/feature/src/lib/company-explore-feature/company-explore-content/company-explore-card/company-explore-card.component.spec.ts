import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@graduates/client/shared/assets/ui';
import { CompanyExploreCardComponent } from './company-explore-card.component';

describe('CompanyExploreCardComponent', () => {
  let component: CompanyExploreCardComponent;
  let fixture: ComponentFixture<CompanyExploreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[UiModule],
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
