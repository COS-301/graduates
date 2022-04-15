import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-download-all',
  templateUrl: './download-all.component.html',
  styleUrls: ['./download-all.component.scss']
})
export class DownloadAllComponent implements OnInit {

  constructor() {
    // do something
   }

  ngOnInit(): void {
    return
  }

  downBut(){
    alert("Download all button works!!!");
  }

}
