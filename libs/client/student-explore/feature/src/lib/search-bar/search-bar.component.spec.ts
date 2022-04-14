import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [MatFormFieldModule, MatInputModule, BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SearchBarComponent Input', () => {
  //Variables
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  //Before Eaches
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [MatFormFieldModule, MatInputModule, BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  //Tests
  it('Should submit a student name', () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');

    fixture.detectChanges();

    input.value = 'Matthew Reed';

    fixture.detectChanges();

    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.qry).toBe('Matthew Reed');
  });

});
