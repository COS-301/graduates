import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'graduates-main-storage-page',
  templateUrl: './main-storage-page.component.html',
  styleUrls: ['./main-storage-page.component.scss']
})
export class MainStoragePageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // do something here
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {

      const userID = +params.get('userID');

      console.log("U: " + userID);      
    })
  }

  acadUp(){
    alert("Click to Upload: Academic Record Works!!!");
    // this.router.navigateByUrl('file-upload')
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
