import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeConnectionsComponent } from './company-representative-connections.component';

describe('CompanyRepresentativeConnectionsComponent', () => {
  let component: CompanyRepresentativeConnectionsComponent;
  let fixture: ComponentFixture<CompanyRepresentativeConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
