import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [MatFormFieldModule, MatInputModule, BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule, MatButtonModule, MatIconModule]
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

describe('SearchBarComponent Input Form Field Transfers to Class', () => {
  //Variables
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  //Before Eaches
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [MatFormFieldModule, MatInputModule, BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule, MatButtonModule, MatIconModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

/*describe('Search Bar Functionality Tests', () => {
  //Variables
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  const studentArray = {data:[
    {id: "0", name: "Matthew", surname: "Reed", contact: "1234", tags: ["AI"]},
    {id: "1", name: "John", surname: "Snow", contact: "5678", tags: ["AI", "Web", "Security"]},
    {id: "2", name: "Eren", surname: "Jaeger", contact: "2468", tags: ["Web", "Security", "Soft Eng"]}
  ]};

  //Before Eaches
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [MatFormFieldModule, MatInputModule, BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule, MatButtonModule, MatIconModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Student Exists Test
  it('If Given a valid name and surname, should return correct student object', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');
    const expectedResult = [{id: "1", name: "John", surname: "Snow", contact: "5678", tags: ["AI", "Web", "Security"]}];

    input.value = 'John Snow';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "getStudentArray").mockResolvedValue(studentArray);

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });

  it('If Given a valid surname, should return correct student object', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');
    const expectedResult = [{id: "1", name: "John", surname: "Snow", contact: "5678", tags: ["AI", "Web", "Security"]}];

    input.value = 'Snow';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "getStudentArray").mockResolvedValue(studentArray);

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });

  it('If Given a valid name, should return correct student object', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');
    const expectedResult = [{id: "1", name: "John", surname: "Snow", contact: "5678", tags: ["AI", "Web", "Security"]}];

    input.value = 'John';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "getStudentArray").mockResolvedValue(studentArray);

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });

  it('If Given an invalid query, should return Student Not Found ERROR', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');
    const expectedResult = ["Student Not Found"];

    input.value = 'dhgfjshdfgjhsdgfjhsdgfjhgsdfjh';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "getStudentArray").mockResolvedValue(studentArray);

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });

  it('If it cannot connect to database, should return Could Not Get Students', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');
    const expectedResult = ["Could Not Get Students"];

    input.value = 'John Snow';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "getStudentArray").mockResolvedValue("");

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });

  it('If given a tag, should return students with that tag', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');
    const expectedResult = [{id: "1", name: "John", surname: "Snow", contact: "5678", tags: ["AI", "Web", "Security"]},
                            {id: "2", name: "Eren", surname: "Jaeger", contact: "2468", tags: ["Web", "Security", "Soft Eng"]}];

    input.value = 'Security';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "getStudentArray").mockResolvedValue(studentArray);

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });
});*/
