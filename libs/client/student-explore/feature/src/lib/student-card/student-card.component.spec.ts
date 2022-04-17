import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  //Unit tests will follow, PR with this new code is necessary for other memebers to continuetheir work.
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
