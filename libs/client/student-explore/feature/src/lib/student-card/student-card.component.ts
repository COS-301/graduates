import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'graduates-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
  providers: [MatCardModule, MatButtonModule,MatCheckboxModule, MatMenuModule,MatIconModule],
})
export class StudentCardComponent implements OnInit
{

  //MOCK DATA FROM API
  studentArray: Student[] = [];
  activeFilters: filter[] = [];
  allFilters: filter[] = [];

  empArray: filter[] = [];
  locationArray: filter[] = [];
  tagsArray: filter[] = [];

  //JSON's to be used for filtering
  filter_JSON = "";

  mock_json_databases = `{
    "data": {

      "InitStudent": [
        {
          "StudentID" : "0129583027939",
          "StudentName": "Matthew",
          "StudentBio": "This is the bio of Student Matthew. They are a student at UP!",
          "StudentEmail": "exmaple@gmail.com",
          "StudentNumber": "0688888888",
          "StudentTags": ["Databases", "UI Engineer"],
          "StudentDegreeType": "Bsc",
          "StudentDegreeName": "Computer Science",
          "StudentLocation": "Midrand"
        }
      ]
    }
  }`;
  mock_json_AI = `{
    "data": {

      "InitStudent": [
        {
          "StudentID" : "0129583027937",
          "StudentName": "Timo",
          "StudentBio": "This is the bio of Student Timo. They are a student at UP!",
          "StudentEmail": "exmaple@gmail.com",
          "StudentNumber": "0688888888",
          "StudentTags": ["Networks", "AI"],
          "StudentDegreeType": "Bsc",
          "StudentDegreeName": "Computer Science",
          "StudentLocation": "Pretoria"
        },
        {
          "StudentID" : "0129583027938",
          "StudentName": "Daniel A",
          "StudentBio": "This is the bio of Student Daniel. They are a student at UP!",
          "StudentEmail": "exmaple@gmail.com",
          "StudentNumber": "0688888888",
          "StudentTags": ["Computer security", "AI"],
          "StudentDegreeType": "Bsc",
          "StudentDegreeName": "Computer Science",
          "StudentLocation": "Pretoria"
        }
      ]
    }
  }`;
  mock_json = `{
  "data": {

    "InitStudent": [
      {
        "StudentID" : "0129583027937",
        "StudentName": "Timo",
        "StudentBio": "This is the bio of Student Timo. They are a student at UP!",
        "StudentEmail": "exmaple@gmail.com",
        "StudentNumber": "0688888888",
        "StudentTags": ["Networks", "AI"],
        "StudentDegreeType": "Bsc",
        "StudentDegreeName": "Computer Science",
        "StudentLocation": "Pretoria"
      },
      {
        "StudentID" : "0129583027938",
        "StudentName": "Daniel A",
        "StudentBio": "This is the bio of Student Daniel. They are a student at UP!",
        "StudentEmail": "exmaple@gmail.com",
        "StudentNumber": "0688888888",
        "StudentTags": ["Computer security", "AI"],
        "StudentDegreeType": "Bsc",
        "StudentDegreeName": "Computer Science",
        "StudentLocation": "Pretoria"
      },
      {
        "StudentID" : "0129583027939",
        "StudentName": "Danielv2",
        "StudentBio": "This is the bio of Student DanielV2. They are a student at UP!",
        "StudentEmail": "exmaple@gmail.com",
        "StudentNumber": "0688888888",
        "StudentTags": ["Dev ops", "Typing"],
        "StudentDegreeType": "Bsc",
        "StudentDegreeName": "Computer Science",
        "StudentLocation": "KZN"
      },
      {
        "StudentID" : "0129583027939",
        "StudentName": "Matthew",
        "StudentBio": "This is the bio of Student Matthew. They are a student at UP!",
        "StudentEmail": "exmaple@gmail.com",
        "StudentNumber": "0688888888",
        "StudentTags": ["Databases", "UI Engineer"],
        "StudentDegreeType": "Bsc",
        "StudentDegreeName": "Computer Science",
        "StudentLocation": "Midrand"
      }
    ]
  }
  }`;

  //MOCK ALL AVAILABLE
  available_empStatus = `{
    "data": {
      "AllAvailable":[
        {
          "Available": [
            "Employed, open to offers",
            "Employed, not open to offers",
            "Unmployed, open to offers",
            "Unmployed, not open to offers"
          ]
        }
      ]
    }
   }`;
  available_location = `{
    "data": {
      "AllAvailable":[
        {
          "Available": [
            "Pretoria",
            "JHB",
            "Midrand",
            "KZN"
          ]
        }
      ]
    }
   }`;
   available_tags = `{
    "data": {
      "AllAvailable":[
        {
          "Available": [
            "Networks",
            "Databases",
            "AI",
            "UI Engineer"
          ]
        }
      ]
    }
   }`;

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

      //Pushing new student onto the array
      const student = new Student(stud_details.StudentID, stud_details.StudentName, stud_details.StudentBio,
          stud_details.StudentEmail, stud_details.StudentNumber, stud_tags, stud_details.StudentDegreeType, 
          stud_details.StudentDegreeName , stud_details.StudentLocation );
      this.studentArray.push(student);
    }
  }

  //Populate the Students by anything
  async loadStudentCardsByFilter(json_string : string)
  {
  const response = JSON.parse(json_string);

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

      const student = new Student(stud_details.StudentID, stud_details.StudentName, stud_details.StudentBio,
                          stud_details.StudentEmail, stud_details.StudentNumber, stud_tags, stud_details.StudentDegreeType, 
                          stud_details.StudentDegreeName , stud_details.StudentLocation );
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
    const students = JSON.parse(this.mock_json);

    // return true if success, else false
    return JSON.stringify(students);
  }

  async retrieve_available_filters()
  {
    //Make appropriate API Calls to get JSON for
    //Employment Status
    //Location
    //Tags

    const emp = JSON.parse(this.available_empStatus);
    const loca = JSON.parse(this.available_location);
    const tagss = JSON.parse(this.available_tags);

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
  
  //By Tags
  async filter_tags(filt:filter)
  {
    filt.checked = !filt.checked;
    const active_filters = await this.find_active_filters();

    //Make temp student array
    //Loop through each activeFilter and populate the temp
    //each next active filter, check if the student names match
    
    //Stringify filter_JSON response

    //NOT SURE IF THIS WILL STAY, Clearing studentArray
    this.studentArray = [];

    //Reload with new students
    if(active_filters.length > 0)
    {
      //Will load by JSON/ or array object made above
      this.loadStudentCardsByFilter(this.mock_json_AI);
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

  //constructor
  constructor(id: string, name: string, bio: string, email: string, number: string, tags: string, degreeType : string, degreeName: string, location: string){
    this._id = id;
    this._name = name;
    this._bio = bio;
    this._email = email;
    this._contactNo = number;
    this._tags = tags;
    this._degreeType = degreeType;
    this._degreeName = degreeName;
    this._location = location;
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
