import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCardComponent } from './status-card.component';

describe('StatusCardComponent', () => {
  let component: StatusCardComponent;
  let fixture: ComponentFixture<StatusCardComponent>;

  const mockStatus = {
    name: 'Storage API',
    status: 'Operational',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCardComponent);
    component = fixture.componentInstance;
    component.status = mockStatus
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
