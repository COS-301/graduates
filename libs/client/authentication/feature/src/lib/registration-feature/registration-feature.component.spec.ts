import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFeatureComponent } from './registration-feature.component';

describe('LoginComponent', () => {
  let component: RegistrationFeatureComponent;
  let fixture: ComponentFixture<RegistrationFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
