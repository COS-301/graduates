import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStudentCardComponent, Student } from './mobile-student-card.component';

describe('MobileStudentCardComponent', () => {
  let component: MobileStudentCardComponent;
  let fixture: ComponentFixture<MobileStudentCardComponent>;
  const studentObjects = {data:[
    {id: "", name: "", surname: "", contact: ""},
    {id: "", name: "", surname: "", contact: ""},
    {id: "", name: "", surname: "", contact: ""}
  ]};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileStudentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileStudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Pre-emptive testing without fully functional API.
  
  it('should, given a valid students array from the api, populate studentArray', async ()=>{
    // Expected Variables
    const expectedArray = [] as Array<Student>;
    expectedArray.push(new Student("", "", "", ""));
    expectedArray.push(new Student("", "", "", ""));
    expectedArray.push(new Student("", "", "", ""));

    // Mock Objects and Functions
    jest.spyOn(component, "retrieveStudentObjects").mockResolvedValue(studentObjects)

    // Test Call
    await component.loadStudentCards();

    // Assertions
    expect(component.studentArray).toEqual(expectedArray);
  })

  it('should, given an invalid students array from the api, failt to populate studentArray', async ()=>{
    // Expected Variables
    const expectedArray = [] as Array<Student>;
    expectedArray.push(new Student("", "", "", ""));
    expectedArray.push(new Student("", "", "", ""));
    expectedArray.push(new Student("", "", "", ""));

    // Mock Objects and Functions
    jest.spyOn(component, "retrieveStudentObjects").mockResolvedValue({})

    // Test Call
    await component.loadStudentCards();

    // Assertions
    expect(component.studentArray).toEqual([]);
  })

  it('should, given an empty students array from the api, failt to populate studentArray', async ()=>{
    // Expected Variables
    const expectedArray = [] as Array<Student>;
    expectedArray.push(new Student("", "", "", ""));
    expectedArray.push(new Student("", "", "", ""));
    expectedArray.push(new Student("", "", "", ""));

    // Mock Objects and Functions
    jest.spyOn(component, "retrieveStudentObjects").mockResolvedValue({data: []})

    // Test Call
    await component.loadStudentCards();

    // Assertions
    expect(component.studentArray).toEqual([]);
  })
});
