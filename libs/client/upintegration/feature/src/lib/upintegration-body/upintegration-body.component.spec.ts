import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UpintegrationBodyComponent } from './upintegration-body.component';

describe('UpintegrationBodyComponent', () => {
  let component: UpintegrationBodyComponent;
  let fixture: ComponentFixture<UpintegrationBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpintegrationBodyComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpintegrationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
