import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFeatureComponent } from './login-feature.component';

describe('LoginFeatureComponent', () => {
  let component: LoginFeatureComponent;
  let fixture: ComponentFixture<LoginFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFeatureComponent ]
    })
    .compileComponents();
  }); 

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
