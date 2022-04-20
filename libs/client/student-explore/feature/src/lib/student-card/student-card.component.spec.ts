import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { StudentCardComponent, Student, filter } from './student-card.component';

describe('StudentCardComponent', () => {

  let component: StudentCardComponent; 
  let fixture: ComponentFixture<StudentCardComponent>;

  //Student array population
  const ValidStudentObjects =  `{"data":{"InitStudent":[
      {"StudentID":"0","StudentName":"Timo0","StudentBio":"This is the bio of Student Timo0. They are a student at UP!","StudentEmail":["Timo0@email.com"],"StudentNumber":"0829266678","StudentTags":["Software Engineering","Security"],"StudentDegreeType":["BIS"],"StudentDegreeName":["Multimedia"],"StudentLocation":"Tatooine", "StudentPic":""},
      {"StudentID":"1","StudentName":"Daniel A1","StudentBio":"This is the bio of Student Daniel A1. They are a student at UP!","StudentEmail":["Daniel A1@email.com"],"StudentNumber":"0825897578","StudentTags":["Formal Methods","Security"],"StudentDegreeType":["Bsc"],"StudentDegreeName":["Information and Knowledge Systems"],"StudentLocation":"Pretoria", "StudentPic":""}]
    }
  }`;
  const InvalidStudentObjects =  `{}`;

  //Filtered Students array by 'Security'
  const FilteredStudentObjects : Array<Student> = 
  [new Student("0", "Timo0", "This is the bio of Student Timo0. They are a student at UP!",["Timo0@email.com"], "0829266678", "Software Engineering, Security", ["BIS"], ["Multimedia"],  "Tatooine", ""),
   new Student("1", "Daniel A1", "This is the bio of Student Daniel A1. They are a student at UP!",["Daniel A1@email.com"], "0825897578", "Formal Methods, Security", ["Bsc"], ["Information and Knowledge Systems"], "Pretoria", "")];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentCardComponent],
      imports: [MatCardModule, MatButtonModule, MatMenuModule, MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //STUDENT CARDS TESTS
  it('should, given a valid student array from the API, populate studentArray', async()=>{
    //Expected variables
    const expectedArray : Array<Student> = [];
    expectedArray.push(new Student("0", "Timo0", "This is the bio of Student Timo0. They are a student at UP!",
    ["Timo0@email.com"], "0829266678", "Software Engineering, Security", ["BIS"], ["Multimedia"],  "Tatooine", ""));
    expectedArray.push(new Student("1", "Daniel A1", "This is the bio of Student Daniel A1. They are a student at UP!",
    ["Daniel A1@email.com"], "0825897578", "Formal Methods, Security", ["Bsc"], ["Information and Knowledge Systems"], "Pretoria", ""));

    //Mock the Object and Function
    jest.spyOn(component,"retrieveStudentObjects").mockResolvedValue(ValidStudentObjects);

    //Test call
    await component.loadStudentCards();

    //Assertion
    expect(component.studentArray).toEqual(expectedArray);
  }) 


  it('should, given an empty student array from the API, not populate studentArray', async()=>{
    //Expected variables
    const expectedArray : Array<Student> = [];

    //Mock the Object and Function
    jest.spyOn(component,"retrieveStudentObjects").mockResolvedValue(InvalidStudentObjects);

    //Test call
    await component.loadStudentCards();

    //Assertion
    expect(component.studentArray).toEqual(expectedArray);
  }) 

  //FILTERS TESTS
  it('should, given a valid tags filter, be added to the tagsArray variable.', async()=>{
    //Expected variables
    const expectedFilters : Array<Array<filter>> = [];
    const tagsFilter = new filter("AI", false, "tags");
    expectedFilters.push([], [], [tagsFilter]);

    //Mock the Object and Function
    jest.spyOn(component,"retrieve_available_filters").mockResolvedValue(expectedFilters);
 
    //Test call
    await component.populate_filters();
 
    //Assertion
    expect(component.tagsArray).toEqual(expectedFilters[2]);
  })

  it('should, given a valid employment filter, be added to the empArray variable.', async()=>{
    //Expected variables
    const expectedFilters : Array<Array<filter>> = [];
    const empFilter = new filter("Employed, Open to Offers", false, "employment");
    expectedFilters.push([empFilter], [], []);

    //Mock the Object and Function
    jest.spyOn(component,"retrieve_available_filters").mockResolvedValue(expectedFilters);
 
    //Test call
    await component.populate_filters();
 
    //Assertion
    expect(component.empArray).toEqual(expectedFilters[0]);
  })

  it('should, given a valid location filter, be added to the locationArray variable.', async()=>{
    //Expected variables
    const expectedFilters : Array<Array<filter>> = [];
    const locaFilter = new filter("Pretoria", false, "location");
    expectedFilters.push([], [locaFilter], []);

    //Mock the Object and Function
    jest.spyOn(component,"retrieve_available_filters").mockResolvedValue(expectedFilters);
 
    //Test call
    await component.populate_filters();
 
    //Assertion
    expect(component.locationArray).toEqual(expectedFilters[1]);
  })
});
