import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-main-storage-page',
  templateUrl: './main-storage-page.component.html',
  styleUrls: ['./main-storage-page.component.scss']
})
export class MainStoragePageComponent implements OnInit {

  constructor() {
    // do something here
   }

  ngOnInit(): void {
    return
  }

  acadUp(){
    alert("Click to Upload: Academic Record Works!!!");
  }

  transUp(){
    alert("Click to Upload: Transcript Works!!!");
  }

  cvUp(){
    alert("Click to Upload: CV Works!!!");
  }

  del(){
    alert("Delete Button Works!!!"); 
  }

  down(){
    alert("Download Button Works!!!");
  }

  up(){
    alert("Upload Button Works!!!");
  }

}
