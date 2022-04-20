import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleComponent ],
      imports: [RouterTestingModule], 
      providers: [TitleComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
