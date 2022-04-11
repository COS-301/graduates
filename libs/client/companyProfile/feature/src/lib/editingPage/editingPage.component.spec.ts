import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingPageComponent } from './editingPage.component';

describe('CompanyProfileComponent', () => {
  let component: EditingPageComponent;
  let fixture: ComponentFixture<EditingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
