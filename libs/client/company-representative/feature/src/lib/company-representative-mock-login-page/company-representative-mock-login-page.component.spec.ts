import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyRepresentativeMockLoginPageComponent } from './company-representative-mock-login-page.component';

describe('CompanyRepresentativeMockLoginPageComponent', () => {
  let component: CompanyRepresentativeMockLoginPageComponent;
  let fixture: ComponentFixture<CompanyRepresentativeMockLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CompanyRepresentativeMockLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeMockLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
