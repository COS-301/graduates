import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryAndServicesComponent } from './industry-and-services.component';

describe('IndustryAndServicesComponent', () => {
  let component: IndustryAndServicesComponent;
  let fixture: ComponentFixture<IndustryAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryAndServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
