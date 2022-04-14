import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';

@Component({
  selector: 'graduates-story-explore',
  templateUrl: './story-explore.component.html',
  styleUrls: ['./story-explore.component.scss'],
  providers: [MatCardModule, MatButtonModule],
})

export class StoryExploreComponent implements OnInit {

  @Input() upload : boolean;
  @Input() report : boolean;

  uploadfrm! : FormGroup;
  reportfrm! : FormGroup;
  builder! : FormBuilder; 

  counter =0;
  submit = false;
  return : boolean;
  searchText = "";

  viewing : boolean;
  reporting: boolean;
  currentlyViewing! : number;
  currentlyReporting! : number;
  successfulReport : boolean;
  reported : boolean;

  viewingName = "Ernest Wright";
  viewingTags = "#Design #IMY #COS #software";

  pageIndex = 1;
  endIndex = 2;

  fileError = "File is required.";
  uploadedFile! : any;

  cardlist = [
    { username: 'Username', cols: 3 ,pk: 0, pic: '', tags: ["#COS301", "#TAGTest", "#to_take_space"]}
  ];
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { username: 'Username', cols: 3 , pk: 0, pic: 'data:image/jpeg;base64,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', tags: ["#COS301", "#TAGTest", "#to_take_space"]},
        ];
      }

      return this.cardlist;
    })
  );


  constructor(private breakpointObserver: BreakpointObserver, f : FormBuilder, private location: Location) {
    this.upload = false;
    this.builder = f;
    this.return = false;
    this.report = false;
    this.viewing = false;
    this.reporting = false;
    this.successfulReport = false;
    this.reported = false;
  }

  ngOnInit(): void {
    this.uploadfrm = this.builder.group({
      file: ['', Validators.required],
      tags: ['', Validators.required]
    });

    this.reportfrm = this.builder.group({
      reason: ['', Validators.required]
    });

    this.loadCards();
  }

  // uploadValidater(file : FormControl) : {[valtype: string] : string} | null {
  //   // return {'errormsg' : 'File is required.'}
  //   const f = file.value;
    
  //   return null;
  // }

  btnNaviClick(i : number){
    
    (<HTMLInputElement>document.getElementById("prevBtn")).disabled = false;
    (<HTMLInputElement>document.getElementById("nextBtn")).disabled = false;
    this.pageIndex += i;
    if(this.pageIndex ==1){
      (<HTMLInputElement>document.getElementById("prevBtn")).disabled = true;
    }
    if(this.endIndex == this.pageIndex){
      (<HTMLInputElement>document.getElementById("nextBtn")).disabled = true;
    }

    (<HTMLInputElement>document.getElementById("curBtn")).innerHTML = (this.pageIndex).toString();

    this.loadCards();
  }

  onFileUpload(event : any) {
    this.fileError = "";
    console.log(event);
  }

  uploadStory() {
    if (this.return) 
      return;
    
    this.submit = true;
      //validate form here:
      //upload form here:
  }

  cancelUpload() {
    this.return = true;
    //take user back a page to the user profile
    this.location.back();
  }

  searchClick() {
    this.viewing = false;
    this.reporting = false;
    this.successfulReport = false;
  }

  search(){
    this.searchText = (<HTMLInputElement>document.getElementById("search")).value;
    alert('searching for ' + this.searchText);
    this.searchText = (<HTMLInputElement>document.getElementById("search")).value= "";
    
  }

  closeSuccessReport() {
    this.reporting = false;
    this.viewing = false;
    this.successfulReport = false;
  }

  viewStory(n : number) {
    this.currentlyViewing = n;
    this.viewing = true;
    this.reporting = false;
    this.successfulReport = false;
  }

  closeViewing() {
    this.viewing = false;
  }

  cancelReport() {
    this.reporting = false;
    this.viewing = true;
  }

  makeReportpopup() {
    //create report popup:
    this.viewing = false;
    this.reporting = true;
    this.currentlyReporting = this.currentlyViewing;
  }

  submitReport() {
    // alert("report for " + this.currentlyReporting + " goes to API");
    this.reported = true;


    for (const input in this.reportfrm.controls) {
      if (this.reportfrm.controls[input].invalid) {
        return;
      }
    }
    alert("To submit to API - '" + this.reportfrm.controls['reason'].value + "'")

    //reset for another report:
    this.reportfrm.reset();
    this.reported = false;

    //push report to API:

    //check for successful response from API:

    //true case after report (make a case if the API fails...)
    this.reporting = false;
    this.successfulReport = true;

  }

  loadCards(){

    this.cardlist = [];

    for (let index = 1; index < 11; index++) {
      this.cardlist.push({ username: 'User '+index.toString(), cols: 1, pk: index, pic: 'data:image/jpeg;base64,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', tags: [ "#to_take_space", "#to_take_space","#COS301", "#TAGTest", "#to_take_space"]});
      
    }

    for (let index = 6; index < 11; index++) {
      this.cardlist.push({ username: 'User '+index.toString(), cols: 1, pk: index, pic: 'data:image/jpeg;base64,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', tags: [ "#COS301", "#TAGTest", "#to_take_space"]});
      
    }

    this.cards = this.breakpointObserver.observe(Breakpoints.Handset ).pipe(
      
      map(({ matches }) => {
      if (matches) {
        this.cardlist.forEach(element => {      // Set to one card per row
          element.cols = 3;
        });
      }
      else {        
        this.cardlist.forEach(element => {      // Set to three cards per row
          element.cols = 1;
        });
      }
      const out = [];
      this.endIndex = Math.ceil(this.cardlist.length/6);

      for (let index = 0; index < 6; index++) {
        if(index+(this.pageIndex-1)*6 < this.cardlist.length) out.push(this.cardlist[index+(this.pageIndex-1)*6])
      }
  
      return out;
      })
    );
  }

}
