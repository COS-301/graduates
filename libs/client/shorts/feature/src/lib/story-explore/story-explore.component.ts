import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';

import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'graduates-story-explore',
  templateUrl: './story-explore.component.html',
  styleUrls: ['./story-explore.component.scss'],
  providers: [MatCardModule, MatButtonModule, Apollo,],
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
  currentlyViewing! : string;
  currentlyReporting! : string;
  successfulReport : boolean;
  reported : boolean;
  apifailure = "";

  //content uploaded:
  VideoFile! : File;
  ThumbnailFile! : File;
  ///////////////////

  viewingName = "Ernest Wright";
  viewingTags = "#Design #IMY #COS #software";

  pageIndex = 1;
  endIndex = 2;

  fileError = "File is required.";
  uploadedFile! : any;

  cardlist = [{"user": {"name": "Matthew"},"shortTag":[{"tag":"TeamWork"}],"userId":"test","id":"fake","thumbnail":""}];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.cardlist;
    })
  );


  constructor(private apollo: Apollo ,private breakpointObserver: BreakpointObserver, f : FormBuilder, private location: Location) {
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
      thumbnail: ['', Validators.required],
      tags: ['', Validators.required]
    });

    this.reportfrm = this.builder.group({
      reason: ['', this.reasonValidator]
    });

    this.loadCards();
  }

  //  ==================================================================================== //
  //  Submit Pop-Up Functions ============================================================ //
  
  onFileUpload(event : any) {
    this.VideoFile = event.target.files[0];
    this.Base64encode(this.VideoFile).then(resp => {
      console.log(resp);
      console.log("here");
    });
  }

  onThumbnailUpload(event : any) {
    this.ThumbnailFile = event.target.files[0];
  }

  //base 64 encoder:
  Base64encode(file : File) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    })

  }

  //base 64 decode to BLOB:
  Base64decode(base : string) {
    // return new Promise((resolve, _) => {
    //   resolve(blob.blob)
    // })
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
  //  ====================================================================================== //
  //  Selected Pop-Up Functions ============================================================ //

  closeSuccessReport() {
    this.reporting = false;
    this.viewing = false;
    this.successfulReport = false;
  }

  viewStory(s : string) {
    this.currentlyViewing = s;
    this.viewing = true;
    this.reporting = false;
    this.successfulReport = false;
  }

  closeViewing() {
    this.viewing = false;
  }

  //  ==================================================================================== //
  //  Report Pop-Up Functions ============================================================ //

  cancelReport() {
    this.reporting = false;
    this.viewing = true;
  }

  makeReportpopup() {
    this.viewing = false;
    this.reporting = true;
    this.currentlyReporting = this.currentlyViewing;
  }

  //report VALIDATOR
  reasonValidator(reason : FormControl) : {[valtype : string] : string} | null {
    const text = reason.value;
    if (text == null) return null;
    if (text.length > 256) return {'errormsg' : 'Characters limited to 256.'};
    if (text.length == 0) return {'errormsg' : 'Report reason is required.'};
    const spaceCounter = text.split(' ').length - 1;
    if (spaceCounter < 4) return {'errormsg' : 'At least 5 words are required.'};
    return null;
  }

  submitReport() {

    this.reported = true;
    //check for any invalid input in the form
    for (const input in this.reportfrm.controls) {
      if (this.reportfrm.controls[input].invalid) {
        return;
      }
    }

    //hard coded report:
    const shortId = "cl22e308w0208hcvks42s959n";
    const reason = this.reportfrm.controls['reason'].value;
    const userId = "cl22alq100086lwvkts9rdiox";

    // Send reportText to the api:
      if (!(this.apollo.client === undefined))
      this.apollo
        .mutate ({
          mutation: gql`mutation {
            reportShort(report: {shortId: "${ shortId }", reason: "${ reason }"}, userId: "${ userId }") {
              shortId,
              userId,
              reason
            }
          }
        `,
        })
        .subscribe ((result) => {
          console.log(result.errors);
          console.log(result);
          if (result.errors) {
              this.apifailure = "Failed to report to the API.";
          } else {
            this.reportfrm.reset();
            this.reported = false;
            this.reporting = false;
            this.successfulReport = true;
          }
        })
  }

  //  ==================================================================================== //
  //  Story Explore Functions ============================================================ //
  
  loadCards(){
    const test = "query{ getAllShorts{ user{  name  },shortTag{ tag },userId,id, thumbnail}}";
    
    if(!(this.apollo.client===undefined)) this.apollo
    .watchQuery({
      query: gql(test),
    })
    .valueChanges.subscribe((result: any) => {
      this.cardlist = result.data.getAllShorts;
      
      console.log(result.data);

      this.cards = this.breakpointObserver.observe( Breakpoints.Handset).pipe(
      
        map(() => {
  
        const out = [];
        this.endIndex = Math.ceil(this.cardlist.length/6);
  
        for (let index = 0; index < 3; index++) {
          if(index+(this.pageIndex-1)*6 < this.cardlist.length) out.push(this.cardlist[index+(this.pageIndex-1)*6])
        }
    
        return out;
        })
      );
    });
  }

  
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


  search(){
    this.searchText = (<HTMLInputElement>document.getElementById("search")).value;
    alert('searching for ' + this.searchText);
    this.searchText = (<HTMLInputElement>document.getElementById("search")).value= "";
    
  }
}


