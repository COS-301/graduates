import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'graduates-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [MatFormFieldModule, MatInputModule, BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule, MatButtonModule, MatIconModule]
})
export class SearchBarComponent {
  qry: string;

  responseArray: Array<any> = [];

  constructor() 
  { 
    this.qry = '';
  }

  /*window.onload = function init()
  {
    var query = `query{
        SearchStudents(searchQuery: ${this.qry}){
           StudentID
           StudentName
           StudentBio
           StudentEmail
           StudentNumber
           StudentTags
           StudentDegreeType
           StudentDegreeName
           StudentLocation
        }
      }`;

      fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query
        })
      })
        .then(r => r.json())
        .then(data => console.log('data returned:', data.data.InitStudent));
  }*/

  async searchStudent(query: string)
  {
    const resp: Promise<any> = await this.getSearchResults(query);

    resp.then(response => {
      if(!response.ok)
      {
        this.responseArray.push(new Student("", "Could Not Get Students From Source", "", "", "", "", "", "", "", []));
      }
      else
      {
        response.json()
        
        if(response.data === undefined)
          {
            this.responseArray.push(new Student("", "Could Not Get Students From Source", "", "", "", "", "", "", "", []));
          }
          else if(response.data.SearchStudents.length === 0)
          {
            this.responseArray.push(new Student("", "Search Request Not Found", "", "", "", "", "", "", "", []));
          }
          else
          {
            for(const student of response.data.SearchStudents)
            {
              const studentObj = new Student(student.StudentID, student.StudentName, student.StudentEmail, 
                                              student.StudentBio, student.StudentNumber, student.StudentDegreeType, 
                                              student.StudentDegreeName, student.StudentLocation, student.StudentPic, student.StudentTags);
              this.responseArray.push(studentObj);
            }
          }
      }
    });

    return this.responseArray;
  }

  async query()
  {
    const val = await this.searchStudent(this.qry);

    if(val.length === 0)
    {
      this.responseArray.push(new Student("", "Search Request Not Found", "", "", "", "", "", "", "", []));
    }

    console.log(this.responseArray);

    return this.responseArray;
  }

  async getSearchResults(searchItem: string): Promise<any>
  {
    const query = `query{
      SearchStudents(searchQuery: ${searchItem}){
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

    const fetchCall = await fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    })

     return fetchCall;
  }
}

export class Student
{
  private _id = "";
  private _name = "";
  //private _surname = "";
  private _email = "";
  private _bio = "";
  private _studentNum = "";
  private _degType = "";
  private _degName = "";
  private _studentLoc = "";
  private _picURL = "";
  private _tags: Array<string> = [];

  //Getters and setters
  public get id() {
    return this._id;
  }
  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }
  
  /*public get surname() {
    return this._surname;
  }
  public set surname(value) {
    this._surname = value;
  }*/

  public get email() {
    return this._email;
  }
  public set email(value) {
  this._email = value;
  }

  public get bio()
  {
    return this._bio;
  }
  public set bio(value: string)
  {
    this._bio = value;
  }

  public get studentNum()
  {
    return this._studentNum;
  }
  public set studentNum(value: string)
  {
    this._studentNum = value;
  }

  public get degType()
  {
    return this._degType;
  }
  public set degType(value: string)
  {
    this._degType = value;
  }

  public get degName()
  {
    return this._degName;
  }
  public set degName(value: string)
  {
    this._degName = value;
  }

  public get studentLoc()
  {
    return this._studentLoc;
  }
  public set studentLoc(value: string)
  {
    this._studentLoc = value;
  }

  public get picURL()
  {
    return this._picURL;
  }
  public set picURL(value: string)
  {
    this._picURL = value;
  }

  public get tags(): Array<string>
  {
    return this._tags;
  }
  public set tags(arr: Array<string>)
  {
    arr.forEach((el: string) => {
      this._tags.push(el);
    });
  }

  //constructors
  constructor(id: string, name: string, contact: string, bio: string, phoneNum: string, degreeType: string, degreeName: string, studentLocation: string, picURL: string ,stags: Array<string>)
  {
    this._id = id;
    this._name = name;
    //this._surname = surname;
    this._email = contact;
    this._bio = bio;
    this._studentNum = phoneNum;
    this._degType = degreeType;
    this._degName = degreeName;
    this._studentLoc = studentLocation;
    this._picURL = picURL;
    this.tags = stags;
  }
}
