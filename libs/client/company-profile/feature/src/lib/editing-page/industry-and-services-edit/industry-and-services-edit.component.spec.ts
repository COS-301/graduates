import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryAndServicesEditComponent } from './industry-and-services-edit.component';

describe('IndustryAndServicesEditComponent', () => {
  let component: IndustryAndServicesEditComponent;
  let fixture: ComponentFixture<IndustryAndServicesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryAndServicesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryAndServicesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
