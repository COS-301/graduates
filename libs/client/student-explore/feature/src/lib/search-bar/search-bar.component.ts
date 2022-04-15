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

  async searchStudent(query: string)
  {
    const resp = await this.getStudentArray();

    if(resp.data === undefined)
    {
      this.responseArray.push("Could Not Get Students");
    }
    else
    {

      resp.data.filter((el: any) => {
        if(query === el.name || query === el.name + " " + el.surname || query === el.surname || query === el.id)
        {
          this.responseArray.push(el);
        }
        else if(this.searchStudentsByTags(el.tags))
        {
          this.responseArray.push(el);
        }
      });

    }

    return this.responseArray;
  }

  searchStudentsByTags(arr: Array<any>)
  {
    let hasTag = false;

    for(let i=0; i < arr.length; i++)
    {
      if(arr[i] === this.qry)
      {
        hasTag = true;
      }
    }

    return hasTag;
  }

  async query()
  {
    const val = await this.searchStudent(this.qry);

    if(val.length === 0)
    {
      this.responseArray.push("Student Not Found");
    }

    return this.responseArray;
  }

  async getStudentArray(): Promise<any>
  {
    console.log();

     // Pull data from api-student-explore

     // Populate studentArray with information from API

     // return true if success, else false
     return [];
  }
}
