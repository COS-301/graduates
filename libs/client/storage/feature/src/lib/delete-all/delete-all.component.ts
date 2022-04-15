import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.scss']
})
export class DeleteAllComponent implements OnInit {

  constructor() { 
    // do something
  }

  ngOnInit(): void {
    return
  }

  delBut(){
    alert("Delete all button works!!!");
  }

}
