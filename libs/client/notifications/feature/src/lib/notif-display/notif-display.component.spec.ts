import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NotifDisplayComponent } from './notif-display.component';

describe('Notification Component Tests', () => {
  let component: NotifDisplayComponent;
  let fixture: ComponentFixture<NotifDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifDisplayComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(component,'ngOnInit');
    const found = component.ngOnInit();
    expect(findById).toBeCalled();
    expect(found).toBeUndefined;
  })
});
