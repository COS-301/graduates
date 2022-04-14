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

  studentArray = [{"id" : "0", "name" : "Matthew Reed"}, 
                        {"id" : "2", "name" : "Matthew Reed"}, 
                        {"id" : "3", "name" : "Matthew Reed"}, 
                        {"id" : "4", "name" : "Matthew Reed"},
                        {"id" : "5", "name" : "Matthew Reed"},
                        {"id" : "6", "name" : "Matthew Reed"},
                        {"id" : "7", "name" : "Matthew Reed"}, 
                        {"id" : "8", "name" : "Matthew Reed"}, 
                        {"id" : "9", "name" : "Matthew Reed"}, 
                        {"id" : "10", "name" : "Matthew Reed"},
                        {"id" : "11", "name" : "Matthew Reed"},
                        {"id" : "12", "name" : "Matthew Reed"},
                        {"id" : "13", "name" : "Matthew Reed"}, 
                        {"id" : "14", "name" : "Matthew Reed"}, 
                        {"id" : "15", "name" : "Matthew Reed"}, 
                        {"id" : "16", "name" : "Matthew Reed"},
                        {"id" : "17", "name" : "Matthew Reed"},
                        {"id" : "18", "name" : "Matthew Reed"},
                        {"id" : "19", "name" : "Matthew Reed"}, 
                        {"id" : "20", "name" : "Matthew Reed"}, 
                        {"id" : "21", "name" : "Matthew Reed"}, 
                        {"id" : "22", "name" : "Matthew Reed"},
                        {"id" : "23", "name" : "Matthew Reed"},
                        {"id" : "24", "name" : "Matthew Reed"},
                        {"id" : "25", "name" : "Matthew Reed"}, 
                        {"id" : "26", "name" : "Matthew Reed"}, 
                        {"id" : "27", "name" : "Matthew Reed"}, 
                        {"id" : "28", "name" : "Matthew Reed"},
                        {"id" : "29", "name" : "Matthew Reed"},
                        {"id" : "30", "name" : "Matthew Reed"},
                        {"id" : "31", "name" : "Matthew Reed"}, 
                        {"id" : "32", "name" : "Matthew Reed"}, 
                        {"id" : "33", "name" : "Matthew Reed"}, 
                        {"id" : "34", "name" : "Matthew Reed"},
                        {"id" : "35", "name" : "Matthew Reed"},
                        {"id" : "36", "name" : "Matthew Reed"},
                        {"id" : "37", "name" : "Matthew Reed"}, 
                        {"id" : "38", "name" : "Matthew Reed"}, 
                        {"id" : "39", "name" : "Matthew Reed"}, 
                        {"id" : "40", "name" : "Matthew Reed"},
                        {"id" : "41", "name" : "Matthew Reed"},
                        {"id" : "42", "name" : "Matthew Reed"}];

  constructor() 
  { 
    this.qry = '';
  }

  searchStudent(name: string)
  {
    const resp = this.studentArray.filter((el) => {
        if(el.name === name)
        {
            return el;
        }
    });

    if(resp.length === 0)
    {
      return "404";
    }
    else
    {
      return resp;
    }
  }

  query()
  {
    return this.searchStudent(this.qry);
  }
}
