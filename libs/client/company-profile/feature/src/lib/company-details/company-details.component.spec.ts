import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsComponent } from './company-details.component';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDetailsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("Check Location Interpolation", () => {
    const locationTag: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#company_details_location');
    expect(locationTag).toBeTruthy();
    expect(locationTag.innerHTML).toEqual(component.location);
  });

  it ("Check Phone Interpolation", () => {
    const phoneTag: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#company_details_phone');
    expect(phoneTag).toBeTruthy();
    expect(phoneTag.innerHTML).toEqual(component.number);
  });
});
