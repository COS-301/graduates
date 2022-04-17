import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeEditListComponent } from './representative-list-edit.component';

describe('RepresentativeEditListComponent', () => {
  let component: RepresentativeEditListComponent;
  let fixture: ComponentFixture<RepresentativeEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentativeEditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
