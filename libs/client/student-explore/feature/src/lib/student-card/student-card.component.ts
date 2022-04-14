import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'graduates-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
  providers: [MatCardModule, MatButtonModule],
})
export class StudentCardComponent implements OnInit
{
  studentArray: Student[] = [];
  mock_json = `{
    "data": {

      "InitStudent": [
        {
          "StudentName": "Timo0",
          "StudentTags": ",Formal Methods,Formal Methods,Security",
          "StudentBio": "This is the bio of Student Timo0. They are a student at UP!"
        },
        {
          "StudentName": "Daniel A1",
          "StudentTags": ",Networking",
          "StudentBio": "This is the bio of Student Daniel A1. They are a student at UP!"
        },
        {
          "StudentName": "Daniel B2",
          "StudentTags": ",Software Engineering,Data analytics,Distributed Systems",
          "StudentBio": "This is the bio of Student Daniel B2. They are a student at UP!"
        },
        {
          "StudentName": "Jonah3",
          "StudentTags": ",Networking",
          "StudentBio": "This is the bio of Student Jonah3. They are a student at UP!"
        },
        {
          "StudentName": "Tawanda4",
          "StudentTags": ",Formal Methods",
          "StudentBio": "This is the bio of Student Tawanda4. They are a student at UP!"
        },
        {
          "StudentName": "Damien5",
          "StudentTags": ",AI,AI,Distributed Systems",
          "StudentBio": "This is the bio of Student Damien5. They are a student at UP!"
        },
        {
          "StudentName": "Casparus6",
          "StudentTags": ",Networking",
          "StudentBio": "This is the bio of Student Casparus6. They are a student at UP!"
        },
        {
          "StudentName": "Matthew7",
          "StudentTags": ",AI",
          "StudentBio": "This is the bio of Student Matthew7. They are a student at UP!"
        },
        {
          "StudentName": "Timo8",
          "StudentTags": ",Data analytics,Security",
          "StudentBio": "This is the bio of Student Timo8. They are a student at UP!"
        },
        {
          "StudentName": "Daniel A9",
          "StudentTags": ",AI",
          "StudentBio": "This is the bio of Student Daniel A9. They are a student at UP!"
        },
        {
          "StudentName": "Daniel B10",
          "StudentTags": ",Formal Methods,Software Engineering,Data analytics",
          "StudentBio": "This is the bio of Student Daniel B10. They are a student at UP!"
        },
        {
          "StudentName": "Jonah11",
          "StudentTags": ",Security",
          "StudentBio": "This is the bio of Student Jonah11. They are a student at UP!"
        },
        {
          "StudentName": "Tawanda12",
          "StudentTags": ",AI",
          "StudentBio": "This is the bio of Student Tawanda12. They are a student at UP!"
        },
        {
          "StudentName": "Damien13",
          "StudentTags": ",Networking,Software Engineering,Distributed Systems",
          "StudentBio": "This is the bio of Student Damien13. They are a student at UP!"
        },
        {
          "StudentName": "Casparus14",
          "StudentTags": ",AI",
          "StudentBio": "This is the bio of Student Casparus14. They are a student at UP!"
        },
        {
          "StudentName": "Matthew15",
          "StudentTags": ",Data analytics,Formal Methods",
          "StudentBio": "This is the bio of Student Matthew15. They are a student at UP!"
        },
        {
          "StudentName": "Timo16",
          "StudentTags": ",Networking,Formal Methods",
          "StudentBio": "This is the bio of Student Timo16. They are a student at UP!"
        },
        {
          "StudentName": "Daniel A17",
          "StudentTags": ",Data analytics",
          "StudentBio": "This is the bio of Student Daniel A17. They are a student at UP!"
        },
        {
          "StudentName": "Daniel B18",
          "StudentTags": ",Formal Methods,Distributed Systems",
          "StudentBio": "This is the bio of Student Daniel B18. They are a student at UP!"
        },
        {
          "StudentName": "Jonah19",
          "StudentTags": ",Formal Methods,Networking,Formal Methods",
          "StudentBio": "This is the bio of Student Jonah19. They are a student at UP!"
        }
      ]
    }
}`;

  constructor() {
    //Do something
  }


  ngOnInit(): void 
  {
    console.log();
    this.loadStudentCards();
  }

    //Populate the student cards
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
        const student = new Student(j.toString(), stud_details.StudentName, stud_details.StudentBio, "relevant tags", "example@mail.com" );
        this.studentArray.push(student);
      }
   }

   // Helper Functions
   async retrieveStudentObjects() : Promise<string>
   {
     //Make service call and make JSON object
      const students = JSON.parse(this.mock_json);

      // return true if success, else false
    return JSON.stringify(students);
   }

}

//Class Student subject to change depending on returned data from API Call
export class Student{
  private _id = "";
  private _name = "";
  private _bio = "";
  private _tags = ""; //Might be changes to array of strings
  private _contactNo = "";

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
  public get tags() {
    return this._tags;
  }
  public set tags(value) {
    this._tags = value;
  }
  public get contactNo() {
    return this._contactNo;
  }
  public set contactNo(value) {
  this._contactNo = value;
  }

  //constructor
  constructor(id: string, name: string, bio: string, tags: string, contact: string){
    this._id = id;
    this._name = name;
    this._bio = bio;
    this._tags = tags;
    this._contactNo = contact;
  }
}
