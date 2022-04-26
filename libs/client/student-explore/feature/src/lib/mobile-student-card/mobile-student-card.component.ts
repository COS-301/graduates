import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'graduates-student-explore-mobile-student-card',
  templateUrl: './mobile-student-card.component.html',
  styleUrls: ['./mobile-student-card.component.scss']
})
export class MobileStudentCardComponent implements OnInit {

  overlay=false;
  studentArray: Student[] = [];

  constructor() {
    //Do something
   }

  ngOnInit(): void {
      console.log();
      this.loadStudentCards();
   }

   //Show/hide the mobile overlay on the mobile student card
   toggle_overlay(id: string)
   {
     const doc = document.getElementById(id);
     if(doc!=null)
     {
        if(!this.overlay)
        {
          //show
          doc.style.display="block";
          this.overlay = !this.overlay;
        }
        else
        {
          //hide
          doc.style.display="none";
          this.overlay = !this.overlay;
        }
     }
   }

   //Populate the student cards
   async loadStudentCards(){
      const resp = await this.retrieveStudentObjects();

      if(resp.data===undefined){
        return;
      }

      for (let index = 0; index < resp.data.length; index++) {
        // Extract all features
        const student = new Student(resp.data[index].id,resp.data[index].name,resp.data[index].surname,resp.data[index].contact);
        this.studentArray.push(student);
      }
   }

   // Helper Functions
   async retrieveStudentObjects() : Promise<any>{
     console.log();

     // Pull data from api-student-explore

     // Populate studentArray with information from API

     // return true if success, else false
     return [];
   }

}

//Class Student subject to change depending on returned data from API Call
export class Student{
  private _id = "";
  private _name = "";
  private _surname = "";
  private _contactNo = "";

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
  
  public get surname() {
    return this._surname;
  }
  public set surname(value) {
    this._surname = value;
  }

  public get contactNo() {
    return this._contactNo;
  }
  public set contactNo(value) {
  this._contactNo = value;
  }

  //constructor
  constructor(id: string, name: string, surname: string, contact: string){
    this._id = id;
    this._name = name;
    this._surname = surname;
    this._contactNo = contact;
  }
}
