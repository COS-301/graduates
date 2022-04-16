import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPageFeatureComponent } from './registration-page-feature.component';

describe('RegistrationPageFeatureComponent', () => {
  let component: RegistrationPageFeatureComponent;
  let fixture: ComponentFixture<RegistrationPageFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationPageFeatureComponent],
     
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});