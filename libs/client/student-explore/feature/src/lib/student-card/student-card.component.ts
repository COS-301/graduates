import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Logger } from '@nestjs/common';
import { match } from 'assert';
import { ApiExampleRepositorySharedInterfacesDataAccessModule } from '@graduates/api/example/repository/shared/interfaces/data-access';
import { domainToASCII } from 'url';

@Component({
  selector: 'graduates-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
  providers: [MatCardModule, MatButtonModule,MatCheckboxModule, MatMenuModule,MatIconModule, MatFormFieldModule, 
              MatInputModule, BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule]
})
export class StudentCardComponent implements OnInit
{

  //MOCK DATA FROM API
  studentArray: Student[] = [];
  tempStudentArray: Student[] = [];
  matchingStudentArray: Student[] = [];
  activeFilters: filter[] = [];
  allFilters: filter[] = [];

  empArray: filter[] = [];
  locationArray: filter[] = [];
  tagsArray: filter[] = [];

  qry = "";
  responseArray: Array<any> = [];

  //JSON's to be used for filtering
  filter_JSON = "";

  constructor() {
    //Initialise services
    console.log("Constructing");
  }

  ngOnInit(): void 
  {
    console.log();
    this.loadStudentCards();
    this.populate_filters();
  }

  //MAIN FUNCTIONS

  //Populate the student cards INITIAL
  async loadStudentCards()
  {
    const response = JSON.parse(await this.retrieveStudentObjects());

    if(response.data===undefined){
      return;
    }

    const len = response.data.InitStudent.length;
    for (let j = 0; j < len; j++) 
    {
      const stud_details = response.data.InitStudent[j];

      //Building Student Tags string
      let stud_tags = "";
      let i = 0;
      for (i = 0; i < stud_details.StudentTags.length-1; i++) 
      {
        stud_tags += stud_details.StudentTags[i] + ", ";
      }
      stud_tags += stud_details.StudentTags[i];

      // console.log("Student tags:", stud_tags);
      

      //Pushing new student onto the array
      const student = new Student(stud_details.StudentID, stud_details.StudentName, stud_details.StudentBio,
          stud_details.StudentEmail, stud_details.StudentNumber, stud_tags, stud_details.StudentDegreeType, 
          stud_details.StudentDegreeName , stud_details.StudentLocation, stud_details.StudentPic );
          
      this.studentArray.push(student);
    }
  }

  //Populate the Students by anything
  async loadStudentCardsByFilter(filtered_student_array : Student[])
  {
    if(filtered_student_array === []){
      return;
    }

    const len = filtered_student_array.length;
    for (let j = 0; j < len; j++) 
    {
      //Building Student Tags string
      let stud_tags = "";
      stud_tags += filtered_student_array[j].tags;

      const student = new Student(filtered_student_array[j].id, filtered_student_array[j].name, filtered_student_array[j].bio,
        filtered_student_array[j].email, filtered_student_array[j].contactNo, stud_tags, filtered_student_array[j].degreeType, 
        filtered_student_array[j].degreeName , filtered_student_array[j].location, filtered_student_array[j].StudentPic);
      this.studentArray.push(student);
    }
  }

  //Populates the all the available filters
  async populate_filters()
  {
    this.retrieve_available_filters();
  }

  // HELPER FUNCTIONS

  async retrieveStudentObjects() : Promise<string>
  {
    //Make service call and make JSON object
    const query = `query{
      InitStudent{
        StudentID
        StudentName
        StudentBio
        StudentEmail
        StudentNumber
        StudentTags
        StudentDegreeType
        StudentDegreeName
        StudentPic
      }
    }`;

    //Get initial students
    let initial_students = "";
    await fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query
        })
      }).then(r => r.json()).then(data => 
            initial_students = data
        );
    console.log("INITIAL STUDENTS: ", initial_students);

  

    //Return the JSON object of all relevant students
    return JSON.stringify(initial_students);
  }

  async retrieve_available_filters()
  {
    //Employment Status
    let empQuery = "";
    let query = `query{
      AllAvailable(availableQuery: "Emp Status"){
        Available
      }
      }`;
    await fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query
        })
      }).then(r => r.json()).then(data => empQuery = JSON.stringify(data));

    //Location
    let locaQuery = "";
    query = `query{
      AllAvailable(availableQuery: "Location"){
        Available
      }
      }`;
    await fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query
        })
      }).then(r => r.json()).then(data => locaQuery = JSON.stringify(data));

    //Tags
    let tagsQuery = "";
    query = `query{
      AllAvailable(availableQuery: "Tags"){
        Available
      }
      }`;
    await fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query
        })
      }).then(r => r.json()).then(data => tagsQuery = JSON.stringify(data));

    const emp = JSON.parse(empQuery);
    const loca = JSON.parse(locaQuery);
    const tagss = JSON.parse(tagsQuery);

    //Populating the filters arrays
    const emp_data = emp.data.AllAvailable[0];
    for (let i = 0; i < emp.data.AllAvailable[0].Available.length; i++) {
      const employment = new filter(emp_data.Available[i], false, "employment");
      this.empArray.push(employment);
      this.allFilters.push(employment);
    }

    const location_data = loca.data.AllAvailable[0];
    for (let i = 0; i < loca.data.AllAvailable[0].Available.length; i++) {
      const location = new filter(location_data.Available[i], false, "location");
      this.locationArray.push(location);
      this.allFilters.push(location);
    }

    const tags_data = tagss.data.AllAvailable[0];
    for (let i = 0; i < tagss.data.AllAvailable[0].Available.length; i++) {
      const tag = new filter(tags_data.Available[i], false, "tags");
      this.tagsArray.push(tag);
      this.allFilters.push(tag);
    }
  }

  //FILTERING
  
  //Main filtering function
  async process_filter(filt: filter)
  {
    filt.checked = !filt.checked;
  }

  async filter_students()
  {
    const active_filters = await this.find_active_filters();
    console.log(active_filters);
    

    //Get all common students between all active_filters
    this.tempStudentArray = [];
    this.matchingStudentArray = [];
    let query = "";
    for (let i = 0; i < active_filters.length; i++) 
    {
      //Tags query
      if(active_filters[i].type === "tags")
        query = `query{
        SearchStudentsByTag(searchTag: "${active_filters[i].filter_name}"){
          StudentID
          StudentName
          StudentBio
          StudentEmail
          StudentNumber
          StudentTags
          StudentPic
        }
        }`;

      //Employment Staus query
      if(active_filters[i].type === "employment")
      {
        if(active_filters[i].filter_name === "Employed, Open to Offers")
        {
          query = `query{
            FilterStudents(filterQuery: "True True", filterType: "Employment/Offers"){
            StudentID
            StudentName
            StudentBio
            StudentEmail
            StudentNumber
            StudentTags
            StudentPic
            }
          }`;
        }
        else if(active_filters[i].filter_name === "Employed, Not open to Offers")
        {
          query = `query{
            FilterStudents(filterQuery: "True False", filterType: "Employment/Offers"){
              StudentID
              StudentName
              StudentBio
              StudentEmail
              StudentNumber
              StudentTags
              StudentPic
            }
          }`;
        }
        else if(active_filters[i].filter_name === "Unemployed, Open to Offers")
        {
          query = `query{
            FilterStudents(filterQuery: "False True", filterType: "Employment/Offers"){
              StudentID
              StudentName
              StudentBio
              StudentEmail
              StudentNumber
              StudentTags
              StudentPic
            }
          }`;
        }
        else if(active_filters[i].filter_name === "Unemployed, Not open to Offers")
        {
          query = `query{
            FilterStudents(filterQuery: "False False", filterType: "Employment/Offers"){
              StudentID
              StudentName
              StudentBio
              StudentEmail
              StudentNumber
              StudentTags
              StudentPic
            }
          }`;
        }
      }

      //Location query
      if(active_filters[i].type === "location")
        query = `query{
        FilterStudents(filterQuery: "${active_filters[i].filter_name}", filterType:"Location"){
          StudentID
          StudentName
          StudentBio
          StudentEmail
          StudentNumber
          StudentTags
          StudentPic
          }
        }`;

      //Make the API call with the correct query
      let filtered = "";
      await fetch('http://localhost:3333/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query
          })
        }).then(r => r.json()).then(data => 
          filtered = JSON.stringify(data)
          );

      // console.log(filtered);
      
      //ACTUALLY FILTER NOW LOL
      this.matchingStudentArray = [];
        
      //First filter
      if(i === 0)
      {
        const filtered_students = JSON.parse(filtered);
        let stud_details;
        if(active_filters[i].type === "tags")
          stud_details = filtered_students.data.SearchStudentsByTag;
        if(active_filters[i].type === "employment" || active_filters[i].type === "location")
          stud_details = filtered_students.data.FilterStudents;
      
        for (let j = 0; j < stud_details.length; j++) 
        {
          const person = stud_details[j];
          
          //Building Student Tags string
          let stud_tags = "";
          let i = 0;
          for (i = 0; i < person.StudentTags.length-1; i++) 
            stud_tags += person.StudentTags[i] + ", ";
          stud_tags += person.StudentTags[i];
    
          //Add student to the Array
          const student = new Student(person.StudentID, person.StudentName, person.StudentBio, person.StudentEmail, person.StudentNumber, stud_tags, person.StudentDegreeType, person.StudentDegreeName , person.StudentLocation, person.StudentPic );     
          this.tempStudentArray.push(student);
        }
      }
      else //Second + filters
      { 
        const filtered_students = JSON.parse(filtered);
        
        let stud_details;
        if(active_filters[i].type === "tags")
          stud_details = filtered_students.data.SearchStudentsByTag;
        if(active_filters[i].type === "employment" || active_filters[i].type === "location")
          stud_details = filtered_students.data.FilterStudents;

        for (let j = 0; j < stud_details.length; j++) 
        {
          const person = stud_details[j];
          
          //Building Student Tags string
          let stud_tags = "";
          let i = 0;
          for (i = 0; i < person.StudentTags.length-1; i++) 
            stud_tags += person.StudentTags[i] + ", ";
          stud_tags += person.StudentTags[i];
    
          //Add student to the Array
          const student = new Student(person.StudentID, person.StudentName, person.StudentBio, person.StudentEmail, person.StudentNumber, stud_tags, person.StudentDegreeType, person.StudentDegreeName , person.StudentLocation, person.StudentPic );    
          //Checking if this student is in previously filtered student array
          for (let k = 0; k < this.tempStudentArray.length; k++) 
          {
            if(this.tempStudentArray[k].id === student.id)
            {
              this.matchingStudentArray.push(student);
            }
          }
        }
        this.tempStudentArray = this.matchingStudentArray;
      }
    }
    // console.log("two filter fields: ",JSON.stringify(this.tempStudentArray))
    //NOT SURE IF THIS WILL STAY, Clearing studentArray
    this.studentArray = [];

    //Reload with new students
    if(active_filters.length > 0)
    {
      //Will load by JSON/ or array object made above
      this.loadStudentCardsByFilter(this.tempStudentArray);
    }
    else
    {
      this.loadStudentCards();
    }
  }

  async find_active_filters() : Promise<filter[]>
  {
    //Clearing all active filters
    this.activeFilters = [];

    //Adding all active filters
    for (let i = 0; i < this.allFilters.length; i++) 
    {
      if(this.allFilters[i].checked === true)
      {
        this.activeFilters.push(this.allFilters[i]);
      }
    }
    return this.activeFilters;
  }

  //SEARCH BAR FUNCTIONALITY

  async query()
  {
    console.log("The search query is: " + this.qry);

    if(this.qry !== "")
    {
      this.responseArray = [];
      const query = `query{
        SearchStudents(searchQuery: "${this.qry}"){
          StudentID
          StudentName
          StudentBio
          StudentEmail
          StudentNumber
          StudentTags
          StudentDegreeType
          StudentDegreeName
          StudentLocation
          StudentPic
        }
      }`;

      console.log("The query variable is: " + query);

      await fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query
        })
      }).then(r => r.json()).then(response => {
        console.log("The api response is:" + JSON.stringify(response));
      
        if(response.data === undefined)
        {
          this.responseArray.push(new Student("", "Could Not Get Students From Source", "", "", "", "", "", "", "", ""));
        }
        else if(response.data.SearchStudents.length === 0)
        {
          this.responseArray.push(new Student("", "Search Request Not Found", "", "", "", "", "", "", "", ""));
        }
        else
        {
          for(const student of response.data.SearchStudents)
          {
            const studentObj = new Student(student.StudentID, student.StudentName, student.StudentBio, 
                                            student.StudentEmail, student.StudentNumber, student.StudentTags, 
                                            student.StudentDegreeType, student.StudentDegreeName, student.StudentLocation, student.StudentPic);
            this.responseArray.push(studentObj);
          }
        }
      });

      this.studentArray = [];
      await this.loadStudentCardsByFilter(this.responseArray);
      console.log("The response array is: " + JSON.stringify(this.responseArray));
    }
    else
    {
      //Reload the page with the initial students
      this.studentArray = [];
      await this.loadStudentCards();
    }
  }
}

//Class Student subject to change depending on returned data from API Call
export class Student{
  private _id = "";
  private _name = "";
  private _bio = "";
  private _email = "";
  private _contactNo = "";
  private _tags = "";
  private _degreeType = "";
  private _degreeName = "";
  private _location = "";
  private _StudentPic = "";

  //Getters and setters
  public get id() {
    return this._id;
  }
  public set id(value) {
    this._id = value;
  }
  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }
  public get bio() {
    return this._bio;
  }
  public set bio(value) {
    this._bio = value;
  }
  public get email() {
    return this._email;
  }
  public set email(value) {
    this._email = value;
  }
    public get contactNo() {
    return this._contactNo;
  }
  public set contactNo(value) {
  this._contactNo = value;
  }
  public get tags() {
    return this._tags;
  }
  public set tags(value) {
    this._tags = value;
  }
  public get degreeType() {
    return this._degreeType;
  }
  public set degreeType(value) {
    this._degreeType = value;
  }
  public get degreeName() {
    return this._degreeName;
  }
  public set degreeName(value) {
    this._degreeName = value;
  }
  public get location() {
    return this._location;
  }
  public set location(value) {
    this._location = value;
  }
  public get StudentPic() {
    return this._StudentPic;
  }
  public set StudentPic(value) {
    this._StudentPic = value;
  }

  //constructor
  constructor(id: string, name: string, bio: string, email: string, number: string, tags: string, degreeType : string, degreeName: string, location: string, StudentPic: string){
    this._id = id;
    this._name = name;
    this._bio = bio;
    this._email = email;
    this._contactNo = number;
    this._tags = tags;
    this._degreeType = degreeType;
    this._degreeName = degreeName;
    this._location = location;
    this._StudentPic = StudentPic;
  }
}

export class filter{
  //Variables
  private _filter_name = "";
  private _checked = false;
  private _type = "";

  //Getters and Setters
  public get filter_name() {
    return this._filter_name;
  }
  public set filter_name(value) {
    this._filter_name = value;
  }
  public get checked() {
    return this._checked;
  }
  public set checked(value) {
    this._checked = value;
  }
  public get type() {
    return this._type;
  }
  public set type(value) {
    this._type = value;
  }

  constructor(name: string, checked: boolean, type: string){
    this._filter_name = name;
    this._checked = checked;
    this._type = type;
  }
}
