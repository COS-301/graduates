import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageFeatureComponent } from './login-page-feature.component';

describe('LoginPageFeatureComponent', () => {
  let component: LoginPageFeatureComponent;
  let fixture: ComponentFixture<LoginPageFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageFeatureComponent],
     
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
