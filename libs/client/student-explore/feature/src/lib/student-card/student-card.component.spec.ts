import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

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

describe('StudentCardComponent to StudentProfile', () => {
  let component: StudentCardComponent; 
  let fixture: ComponentFixture<StudentCardComponent>;
  const studentObjects =  {data:[
                                  {id: "0129583027937", StudentName: "Timo", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: ["exmaple@gmail.com"], StudentNumber: "0688888888", StudentTags: "Networks, AI", 
                                    StudentDegreeType: ["Bsc"], StudentDegreeName:[ "Computer Science"], StudentLocation: "Pretoria"},

                                  {id: "0129583027938", StudentName: "Daniel A", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: ["exmaple@gmail.com"], StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: ["Bsc"], StudentDegreeName:[ "Computer Science"], StudentLocation:  "Pretoria"}
                                ]};

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

  it('Should return the correct student id', () => {

    /*window.open = jest.fn();
    test("window opens", () => {
      window.open.mockClear();
    });*/

    const expectedIDArray: Array<string> = ["0129583027937", "0129583027938"];

    const testID1 = component.sendToStudentProfile(studentObjects.data[0].id);
    const testID2 = component.sendToStudentProfile(studentObjects.data[1].id);
    const testIDArray: Array<string> = [testID1, testID2];

    expect(testIDArray).toEqual(expectedIDArray);
  });
});

describe('StudentCard Component: Search Bar Functionality', () => {
  let component: StudentCardComponent; 
  let fixture: ComponentFixture<StudentCardComponent>;
  const studentObjects =  {data: {SearchStudents: [
                                  {StudentID: "0129583027939", StudentName: "Matthew Reed", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: ["exmaple@gmail.com"], StudentNumber: "0688888888", StudentTags: "Networks, AI", 
                                    StudentDegreeType: ["Bsc"], StudentDegreeName: ["Computer Science"], StudentLocation:  "Pretoria", StudentPic: "404"},

                                  {StudentID: "0129583027938", StudentName: "Daniel A", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: ["exmaple@gmail.com"], StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: ["Bsc"], StudentDegreeName: ["Computer Science"], StudentLocation:  "Pretoria", StudentPic: "404"},

                                  {StudentID: "0129583027937", StudentName: "Timo", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: ["exmaple@gmail.com"], StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: ["Bsc"], StudentDegreeName: ["Computer Science"], StudentLocation:  "Pretoria", StudentPic: "404"}
                                ]}};

  const retrieveStudentObjects =  {data: {InitStudent: [
                                  {StudentID: "0129583027937", StudentName: "Timo", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: ["exmaple@gmail.com"], StudentNumber: "0688888888", StudentTags: "Networks, AI", 
                                    StudentDegreeType: ["Bsc"], StudentDegreeName: ["Computer Science"], StudentPic: "404"},

                                  {StudentID: "0129583027938", StudentName: "Daniel A", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: ["exmaple@gmail.com"], StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: ["Bsc"], StudentDegreeName: ["Computer Science"], StudentPic: "404"},

                                  {StudentID: "0129583027939", StudentName: "Matthew Reed", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: ["exmaple@gmail.com"], StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: ["Bsc"], StudentDegreeName: ["Computer Science"], StudentPic: "404"}
                                ]}};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentCardComponent],
      imports: [MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should, given a valid name, return the students in the correct order', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');

    const expectedResult: Array<Student> = [];
    expectedResult.push(new Student("0129583027939", "Matthew Reed", "This is the bio of Student Timo. They are a student at UP!", 
                                    ["exmaple@gmail.com"], "0688888888", "Networks, AI", ["Bsc"], ["Computer Science"], "Pretoria", "404"));
    expectedResult.push(new Student("0129583027938", "Daniel A", "This is the bio of Student Timo. They are a student at UP!", 
                                    ["exmaple@gmail.com"], "0688888888", "Computer security, AI", ["Bsc"], ["Computer Science"], "Pretoria", "404"));
    expectedResult.push(new Student("0129583027937", "Timo", "This is the bio of Student Timo. They are a student at UP!", 
                                    ["exmaple@gmail.com"], "0688888888", "Computer security, AI", ["Bsc"], ["Computer Science"], "Pretoria", "404"));

    input.value = 'Matthew';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "retrieveStudentObjects").mockResolvedValue(JSON.stringify(retrieveStudentObjects));
    jest.spyOn(component, "queryHelper").mockResolvedValue(JSON.stringify(studentObjects));

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
    //expect(component.qry).toBe('Matthew');
  });

  it('Should, given an invalid name, return a student not found result', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');

    const invalidStudentObject = {data: {SearchStudents: []}};

    const expectedResult: Array<Student> = [];
    expectedResult.push(new Student("", "Search Request Not Found", "", [], "", "", [], [], "", ""));

    input.value = 'sdhgfjhsdgfjhsgdfjhgsdhf';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "retrieveStudentObjects").mockResolvedValue(JSON.stringify(retrieveStudentObjects));
    jest.spyOn(component, "queryHelper").mockResolvedValue(JSON.stringify(invalidStudentObject));

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });

  it('Should, given an empty query, not return anything', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');

    const expectedResult: Array<Student> = [];

    input.value = '';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "retrieveStudentObjects").mockResolvedValue(JSON.stringify(retrieveStudentObjects));
    jest.spyOn(component, "queryHelper").mockResolvedValue(JSON.stringify(studentObjects));

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });

  it('Should, given that the API fails, return a could not get students from source error', async () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('#search');

    const invalidStudentObject = {data: undefined};

    const expectedResult: Array<Student> = [];
    expectedResult.push(new Student("", "Could Not Get Students From Source", "", [], "", "", [], [], "", ""));

    input.value = 'Matthew';
    input.dispatchEvent(new Event('input'));

    jest.spyOn(component, "retrieveStudentObjects").mockResolvedValue(JSON.stringify(retrieveStudentObjects));
    jest.spyOn(component, "queryHelper").mockResolvedValue(JSON.stringify(invalidStudentObject));

    await component.query();
    
    expect(component.responseArray).toEqual(expectedResult);
  });
});