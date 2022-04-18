import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionNotifComponent } from './expansion-notif.component';

describe('ExpansionNotifComponent', () => {
  let component: ExpansionNotifComponent;
  let fixture: ComponentFixture<ExpansionNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionNotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Truth testing
  it('should be defined', ()=>{
    expect(component.ngOnInit()).toBeUndefined;
  })

  it('should be defined', ()=>{
    expect(component.markRead()).toBeUndefined;
  })

  //Function return type and call testing
  it('should be called and return the right type', () => {
    const findById = jest.spyOn(component,'ngOnInit');
    const found = component.ngOnInit();
    expect(findById).toBeCalled();
    expect(found).toBeUndefined();
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(component,'markRead');
    const found = component.markRead();
    expect(findById).toBeCalled();
    expect(found).toBeUndefined;
  })
});
