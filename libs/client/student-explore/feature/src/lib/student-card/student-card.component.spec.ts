import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { StudentCardComponent, Student } from './student-card.component';

describe('StudentCardComponent', () => {

  let component: StudentCardComponent; 
  let fixture: ComponentFixture<StudentCardComponent>;
  const studentObjects =  {data:[
  {id: "0129583027937", StudentName: "Timo", StudentBio: "This is the bio of Student Timo. They are a student at UP!",StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Networks, AI", StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentLocation: "Pretoria"},
  {id: "0129583027938", StudentName: "Daniel A", StudentBio: "This is the bio of Student Timo. They are a student at UP!",StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Computer security, AI", StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentLocation:  "Pretoria"}
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Unit tests will follow, PR with this new code is necessary for other members to continue their work.
  //Unit testing for loading student cards
  //Unit testing for populating the filters tabs

  //Populating the student cards tests
  // it('should, given a valid student array from the API, populate studentArray', async()=>{
  //   //Expected variables
  //   const expectedArray : Array<Student> = [];
  //   expectedArray.push(new Student("0129583027937", "Timo", "This is the bio of Student Timo. They are a student at UP!",
  //   "exmaple@gmail.com", "0688888888", "Networks, AI", "Bsc", "Computer Science",  "Pretoria"));
  //   expectedArray.push(new Student("0129583027938", "Daniel A", "This is the bio of Student Timo. They are a student at UP!",
  //   "exmaple@gmail.com", "0688888888", "Computer security, AI", "Bsc", "Computer Science",  "Pretoria"));

  //   //Mock the Object and Function
  //   jest.spyOn(component,"retrieveStudentObjects").mockResolvedValue(studentObjects);

  //   //Test call
  //   await component.loadStudentCards();

  //   //Assertion
  //   expect(component.studentArray).toEqual(expectedArray);
  // }) 
});

describe('StudentCardComponent to StudentProfile', () => {
  let component: StudentCardComponent; 
  let fixture: ComponentFixture<StudentCardComponent>;
  const studentObjects =  {data:[
                                  {id: "0129583027937", StudentName: "Timo", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Networks, AI", 
                                    StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentLocation: "Pretoria"},

                                  {id: "0129583027938", StudentName: "Daniel A", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentLocation:  "Pretoria"}
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
                                    StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Networks, AI", 
                                    StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentLocation:  "Pretoria", StudentPic: "404"},

                                  {StudentID: "0129583027938", StudentName: "Daniel A", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentLocation:  "Pretoria", StudentPic: "404"},

                                  {StudentID: "0129583027937", StudentName: "Timo", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentLocation:  "Pretoria", StudentPic: "404"}
                                ]}};

  const retrieveStudentObjects =  {data: {InitStudent: [
                                  {StudentID: "0129583027937", StudentName: "Timo", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Networks, AI", 
                                    StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentPic: "404"},

                                  {StudentID: "0129583027938", StudentName: "Daniel A", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentPic: "404"},

                                  {StudentID: "0129583027939", StudentName: "Matthew Reed", StudentBio: "This is the bio of Student Timo. They are a student at UP!",
                                    StudentEmail: "exmaple@gmail.com", StudentNumber: "0688888888", StudentTags: "Computer security, AI",
                                    StudentDegreeType: "Bsc", StudentDegreeName: "Computer Science", StudentPic: "404"}
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
                                    "exmaple@gmail.com", "0688888888", "Networks, AI", "Bsc", "Computer Science", "Pretoria", "404"));
    expectedResult.push(new Student("0129583027938", "Daniel A", "This is the bio of Student Timo. They are a student at UP!", 
                                    "exmaple@gmail.com", "0688888888", "Computer security, AI", "Bsc", "Computer Science", "Pretoria", "404"));
    expectedResult.push(new Student("0129583027937", "Timo", "This is the bio of Student Timo. They are a student at UP!", 
                                    "exmaple@gmail.com", "0688888888", "Computer security, AI", "Bsc", "Computer Science", "Pretoria", "404"));

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
    expectedResult.push(new Student("", "Search Request Not Found", "", "", "", "", "", "", "", ""));

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
});