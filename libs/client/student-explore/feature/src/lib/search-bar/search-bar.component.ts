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
                        {"id" : "3", "name" : "Jonah Gasura"}, 
                        {"id" : "4", "name" : "Damiaan Jordaan"},
                        {"id" : "5", "name" : "Daniel Azmanov"},
                        {"id" : "6", "name" : "Daniel Burgess"},
                        {"id" : "7", "name" : "Tawanda Coder"}, 
                        {"id" : "8", "name" : "Timo Werner"}, 
                        {"id" : "9", "name" : "King Mohammed Salah"}, 
                        {"id" : "10", "name" : "Super Sadio Mane"},
                        {"id" : "11", "name" : "Snr. Roberto Firmino"},
                        {"id" : "12", "name" : "Diogoal Jota"},
                        {"id" : "13", "name" : "Naby Lad"}, 
                        {"id" : "14", "name" : "Captain Henderson"}, 
                        {"id" : "15", "name" : "James Pilsner"}, 
                        {"id" : "16", "name" : "Big Virge"},
                        {"id" : "17", "name" : "Trent Alexcrossner-Arnold"},
                        {"id" : "18", "name" : "Fabulous Fabinho"},
                        {"id" : "19", "name" : "Goal Matip"}, 
                        {"id" : "20", "name" : "Braveheart Robertson"}, 
                        {"id" : "21", "name" : "Jurgs Klopp"}, 
                        {"id" : "22", "name" : "John Doe"},
                        {"id" : "23", "name" : "Mike Oliver"},
                        {"id" : "24", "name" : "Mike Dean"},
                        {"id" : "25", "name" : "Antoine Griezmode"}, 
                        {"id" : "26", "name" : "Paul Pogboom"}, 
                        {"id" : "27", "name" : "Scott McSauce"}, 
                        {"id" : "28", "name" : "Project Foden"},
                        {"id" : "29", "name" : "Levi Ackerman"},
                        {"id" : "30", "name" : "Mikasa Ackerman"},
                        {"id" : "31", "name" : "Eren Jaeger"}, 
                        {"id" : "32", "name" : "Kamaboko Gonpachiro"}, 
                        {"id" : "33", "name" : "Kaneki"}, 
                        {"id" : "34", "name" : "Zenitsu"},
                        {"id" : "35", "name" : "Inosuke"},
                        {"id" : "36", "name" : "Tengen Uzui"},
                        {"id" : "37", "name" : "Kyojorou Rengoku"}, 
                        {"id" : "38", "name" : "Gojo"}, 
                        {"id" : "39", "name" : "Megumi Fushiguro"}, 
                        {"id" : "40", "name" : "Itadori Yuji"},
                        {"id" : "41", "name" : "Kugisaki Nobura"},
                        {"id" : "42", "name" : "Todo"}];

  constructor() 
  { 
    this.qry = '';
  }

  searchStudent(name: string)
  {
    const respArr: Array<{"id": string, "name": string}> = [];
    const err: Array<{"id": string, "name": string}> = [];

    const resp = this.studentArray.filter((el) => {
        if(el.name === name || el.id === name)
        {
          respArr.push(el);
        }
        else
        {
          err.push(el);
        }
    });

    if(respArr.length === 0)
    {
      return {"id":"-1", "name":"NOT FOUND"};
    }
    else
    {
      return respArr[0];
    }
  }

  query()
  {
    return this.searchStudent(this.qry);
  }

  /*getStudentArray()
  {
    const arr: Array<{"id": string, "name": string}> = [];

    this.studentArray.forEach(element => {
      arr.push(element);
    });

    return arr;
  }*/
}
