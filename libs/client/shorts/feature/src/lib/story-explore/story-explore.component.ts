import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

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
  viewingTags = "#Design #IMY #COS #software"


  fileError = "File is required.";
  uploadedFile! : any;

  cardlist = [
    { title: 'Card 1', cols: 3, rows: 1 , pic: '', tags: [], pk: 0}
  ];
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 3, rows: 1 , pic: '', tags: [], pk: 0},
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

  onFileUpload(event : any) {
    alert();
    console.log(event.target.length);
    if (event.target.length > 0) {
      this.fileError = "";
    }
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
     this.loadCards();

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

    this.cardlist = [
      { title: 'Card 1', cols: 1, rows: 1 , pic: '', tags: [], pk: 0}
    ];


    for (let index = 0; index < 4; index++) {
      this.cardlist.push({ title: 'Card 1', cols: 1, rows: 1 , pic: '', tags: [], pk: index});
      
    }
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
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
      return this.cardlist;
      })
    );
  }

}
