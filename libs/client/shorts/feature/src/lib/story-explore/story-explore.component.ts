import { Component, ElementRef, Input, OnInit, Renderer2, RendererFactory2, ViewChild } from '@angular/core';
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


  cardsPerPage = 6;
  pageIndex = 1;
  endIndex = 1;

  cardlist = [{"user": {"name": "Error"},"shortTag":[{"tag":"Error"}],"userId":"Error","id":"Error","thumbnail":""}];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.cardlist;
    })
  );

  getALLCardsQuery = "query{ getAllShorts{ user{  name  },shortTag{ tag },userId,id, thumbnail}}";

  readytoview : boolean;
  
  @Input() upload : boolean;
  @Input() report : boolean;

  @ViewChild('vid') d1! : ElementRef;

  uploadfrm! : FormGroup;
  reportfrm! : FormGroup;
  builder! : FormBuilder; 

  nocardsfound! : string;

  counter = 0;
  submit = false;
  return : boolean;

  loadwheel : boolean;

  test! : any;

  viewing : boolean;
  reporting: boolean;
  currentlyViewing! : string;
  currentlyReporting! : string;
  successfulReport : boolean;
  successfulUpload : boolean;
  reported : boolean;
  apifailure = "";
  vidreset! : any;

  shortId = "cl22e308w0208hcvks42s959n";
  userId = "123579";

  alreadyReported = false;

  //content uploaded:
  VideoFile! : File;
  ThumbnailFile! : File;
  fileuploaderror = "";
  fileuploadflag! : boolean;
  VideoFileBase64! : any;
  ThumbnailFileBase64! : any;
  thumbnailuploaderror = "";
  thumbnailuploadflag! :boolean;
  ///////////////////

  viewingName = "Ernest Wright";
  viewingTags = "#Design #IMY #COS #software";

  fileError = "File is required.";
  uploadedFile! : any;

  constructor(private apollo: Apollo ,private breakpointObserver: BreakpointObserver, f : FormBuilder, private location: Location) {
    this.upload = false;
    this.builder = f;
    this.return = false;
    this.report = false;
    this.viewing = false;
    this.reporting = false;
    this.successfulReport = false;
    this.reported = false;
    this.VideoFileBase64 = null;
    this.ThumbnailFileBase64 = null;
    this.fileuploadflag= true;
    this.thumbnailuploadflag = true;
    this.loadwheel = false;
    this.successfulUpload = false;
    this.readytoview = false;
  }

  ngOnInit(): void {
    this.uploadfrm = this.builder.group({
      file: ['', Validators.required],
      thumbnail: ['', Validators.required],
      tags: ['', this.TagValidator]
    });

    this.reportfrm = this.builder.group({
      reason: ['', this.reasonValidator]
    });

    this.loadAllCards();
  }

  //  ======================================================================================================================================================= //
  //  Submit Story Pop-Up Functions ========================================================================================================================= //
  
  closeSuccessUpload() {
    //route user to the student profile page or to /shorts...
    this.location.back();
  }

  onFileUpload(event : any) {
    this.VideoFile = event.target.files[0];
    this.fileuploadflag = true; 
    const re = /^video*/;
    if (this.VideoFile.type.match(re)) {
      if (this.VideoFile.size < 40000000) {
        this.Base64encode(this.VideoFile).then(resp => {
          this.VideoFileBase64 = resp;
          this.fileuploadflag = false;
          // console.log(resp); //this will log the base64 in the terminal on attatch
        })
      }
    }
  }

  onThumbnailUpload(event : any) {
    this.ThumbnailFile = event.target.files[0];
    // console.log(event.target.files[0].type);
    this.thumbnailuploadflag = true; 
    const re = /^image*/;
    if (this.ThumbnailFile.type.match(re)) {
      if (this.ThumbnailFile.size < 6000000) {
        this.Base64encode(this.ThumbnailFile).then(resp => {
          this.ThumbnailFileBase64 = resp;
          this.thumbnailuploadflag = false;
          // console.log(resp); //this will log the base64 in the terminal on attatch
        })
      }
    }
  }
  //==============================================================================================================================//
  // - onclick event to upload story
  // - converts content to base 64
  //==============================================================================================================================//
  uploadStory() {
    if (this.fileuploadflag) this.fileuploaderror = "A video file less than 40mb required.";
    if (this.thumbnailuploadflag) this.thumbnailuploaderror = "An image file less than 6mb required.";
    this.submit = true;

    if (this.ValidUpload()) {

      //get Tag array:
      const tags = this.getTagArray();

      this.loadwheel = true;

      //form is valid here, upload to the API:
      this.uploadShortToAPI(tags).then(resp => {

        // console.log(resp);
        
        //here is for the response (resp) from the upload uploadShortToAPI() and hide load wheel
        this.loadwheel = false;

        //it is a promise so this code will run after the query is complete and will return the query response here.
        //if (success with the API) {
          this.successfulUpload = true;
        //}
        //else {

        //}
      })

    } 

  }

  uploadShortToAPI(tags : any) {
    return new Promise((resolve, _) => {
      //mutation to the API for creating a short:
      const vidFormat = this.VideoFileBase64.substring(this.VideoFileBase64.indexOf(",")+1);
      const thumbFormat = this.ThumbnailFileBase64.substring(this.ThumbnailFileBase64.indexOf(",")+1);
      
      if (!(this.apollo.client === undefined))
      this.apollo
        .mutate ({

          //this.ThumbnailFileBase64 = Base64 of the Thumbnail.
          //this.VideoFileBase64 = Base64 of the Video.
          //tags has array for the tags to add to the query.

          ////////
          // I do not know what the description of the short is, is it the name of the current user logged in or
          // should there be a text box on the upload form for the user to add a description. It was not defined 
          // in the original design
          ////////

          mutation: gql`
                mutation {
                  createShort(
                      short: { description: "My short", archived: false, ${ tags }},
                      userId: "123579", 
                      vidString: "${ vidFormat }", 
                      thumbString: "${ thumbFormat }", 
                      ) {
                          id,
                          userId,
                          description,
                          link,
                          thumbnail,
                          datePosted,
                          archived,
                          user {
                              id,
                              email,
                              name,
                          },
                          shortTag {
                              shortId,
                              tag
                          }
                      }
              }
          `,

        })
        .subscribe ((result) => {
          //log result from the app short query:
          // console.log(result);
          //resolve the promise from the query:
          resolve(result);
        });
    })
  }

  getTagArray() : any {
    const s = this.uploadfrm.controls['tags'].value;
    const output = s.split('#');
    output.shift();

    if(output.length <=0) return "shortTag: []";
    let out = "shortTag: [";

    for (let index = 0; index < output.length; index++) {
      const element = output[index];
      
      out += '{tag: "' +element +'"},' ;
      
    }

    out += "]";
    return out;
  }

  ValidUpload() : boolean {
    if (this.uploadfrm.controls['tags'].errors)
      return false;
    if (this.fileuploadflag || this.thumbnailuploadflag)
      return false;
    return true;
  }

  embedVideoToCard(base64 : string) {
    this.d1.nativeElement.insertAdjacentHTML('beforeEnd', `
      <video controls>
        <source src="${ base64 }" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `);
  }


  //base 64 encoder:
  Base64encode(file : File) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    })
  }

  TagValidator(tags : FormControl) : {[valtype : string] : string} | null {
    const text = tags.value;
    if (text.length == 0) return {'errormsg' : 'A tag is required.'}
    const re = /^(#(([a-z]|[0-9]|[A-Z]|_)+))+$/g;
    if (text.search(re)) return {'errormsg' : 'Please use example tag format.'}
    return null;
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

  //  =================================================================================================================================================== //
  //  Selected Pop-Up Functions ========================================================================================================================= //


  //==============================================================================================================================//
  // - onclick event to view story
  // - makes a API call to get the selected shorts details and MP4 data
  //==============================================================================================================================//
  viewStory(s : string) {


    // Reset elements
    this.viewingName = "";
    this.viewingTags = "";


    this.viewing = true;
    const getSelectedQ =gql`query {
      getShortById(id: "${s}"){
        user{ 
          name 
        },
        shortTag{
          tag
        },
        userId,
        id,
        thumbnail,
        link,
        shortReport{
          userId
        }
      } 
    }`

    if(!(this.apollo.client===undefined)) this.apollo // check if API exists
    .watchQuery({
      query: getSelectedQ,
      fetchPolicy: "no-cache"           // clear the cache of the API !- this has to do with disabling the report btn once a user has reported a short
    })
    .valueChanges.subscribe((result: any) => {

      

      // store api output
      const selectedCard = result.data.getShortById;  

      // change username on selected card
      this.viewingName = selectedCard.user.name;

      // add tags to selected card
      for(const a of selectedCard.shortTag){
        this.viewingTags += `#${ a.tag } `;
      }


      this.vidreset = selectedCard.link;
      this.embedVideoToCard(selectedCard.link);

      // add video to selected card

      // display card and hide other pop-ups
      this.currentlyViewing = s;
      this.viewing = true;
      this.reporting = false;
      this.successfulReport = false;

      // set active short
      this.shortId = selectedCard.id;

      // hide report button if user has all ready reported this story

      this.alreadyReported = false;

      for( const s of selectedCard.shortReport){
        if(this.userId == s.userId){
          this.alreadyReported = true;
          break;
        }
      }

    });


  }
  //==========================================================================================================================//
  // - onclick event to close story
  //==========================================================================================================================//

  closeViewing() {
    this.viewing = false;
  }

  //  ================================================================================================================================================= //
  //  Report Pop-Up Functions ========================================================================================================================= //


  //==========================================================================================================================//
  // - onclick event for closing succesful report pop-up
  //==========================================================================================================================//

  closeSuccessReport() {
    this.reporting = false;
    this.viewing = false;
    this.successfulReport = false;
  }


  //==========================================================================================================================//
  // - onclick event for closing report pop-up
  //==========================================================================================================================//
  cancelReport() {
    this.reporting = false;
    this.viewing = false;
    this.reportfrm.reset();
  }


  //==========================================================================================================================//
  // - display pop up menu
  //==========================================================================================================================//

  makeReportpopup() {
    this.viewing = false;
    this.reporting = true;
    this.currentlyReporting = this.currentlyViewing;
  }

  //==========================================================================================================================//
  // - Reason Validator & formatter
  //==========================================================================================================================//

  reasonFormatter(text : string) : string {
    let output = '';
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == '\n') {
        output += ' ';
        let currpos = i;
        while (text.charAt(currpos) == '\n' && currpos < text.length) {
          currpos++;
        } //solve multiple endlines 
        i = --currpos;
      } else output += text.charAt(i);
    }
    // console.log(output);
    return output;
  }

  reasonValidator(reason : FormControl) : {[valtype : string] : string} | null {
    const text = reason.value;
    
    if (text == null) return null;

    //linearize the reason:
    let output = '';
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == '\n') {
        output += ' ';
        let currpos = i;
        while (text.charAt(currpos) == '\n' && currpos < text.length) {
          currpos++;
        } //solve multiple endlines 
        i = --currpos;
      } else output += text.charAt(i);
    }
    // console.log(output);

    if (output == null) return null;
    if (output.length > 256) return {'errormsg' : 'Characters limited to 256.'};
    if (output.length == 0) return {'errormsg' : 'Report reason is required.'};
    const spaceCounter = output.split(' ').length - 1;
    if (spaceCounter < 4) 
      return {'errormsg' : 'At least 5 words are required.'};
    else {
      if (output.charAt(output.length - 1) == ' ') {
        return {'errormsg' : 'At least 5 words are required.'};
      }
    }
    return null;
  }

  //==========================================================================================================================//
  // - onclick event for submit report btn
  //==========================================================================================================================//

  submitReport() {

    this.reported = true;
    //check for any invalid input in the form
    for (const input in this.reportfrm.controls) {
      if (this.reportfrm.controls[input].invalid) {
        return;
      }
    }

    const reason = this.reportfrm.controls['reason'].value;
    

    // Send reportText to the api:
      if (!(this.apollo.client === undefined))
      this.apollo
        .mutate ({
          mutation: gql`
          mutation {
            reportShort(report: {shortId: "${ this.shortId }", reason: "${ this.reasonFormatter(reason) }"}, userId: "${ this.userId }") {
              shortId,
              userId,
              reason
            }
          }
        `,
        })
        .subscribe ((result) => {
          // console.log(result.errors);
          // console.log(result);
          this.reportfrm.reset();
          this.reported = false;
          this.reporting = false;
          this.successfulReport = true;
        });


  }

  //  ================================================================================================================================================= //
  //  Story Explore Functions ========================================================================================================================= //

  //==========================================================================================================================//
  // - onclick event for the search bar
  // - breaks search bar up using .split(regex) 
  //==========================================================================================================================//

  search(){
    
    // resest page index
    this.pageIndex = 1;

    // get user input
    const searchText = (<HTMLInputElement>document.getElementById("search")).value;

    // clear search bar
    const temp = this.cardlist;
    this.nocardsfound = "";
    if(searchText === "") {this.loadAllCards();}
    else{
      // clear the list of cards 
      this.cardlist = [];
      for (const val of temp) {
        if (val.user.name.toUpperCase().match(searchText.toUpperCase())) {
          this.cardlist.push(val);
        } else {
          for (const t of val.shortTag) {
            const hit = `#${t.tag.toUpperCase()}`;
            if (hit.match(searchText.toUpperCase())) {
              this.cardlist.push(val);
              break;
            }
            if (t.tag.toUpperCase().match(searchText.toUpperCase())) {
              this.cardlist.push(val);
            } 
            //else don't add
          }
        }
      }
      if (this.cardlist.length == 0) {
        this.nocardsfound = `No result found for "${searchText}"`;
      }
      //reset end index and reload the cards on screen
      this.endIndex = Math.ceil(this.cardlist.length/this.cardsPerPage);
      this.btnNaviClick(0);
    }
  }

  //==========================================================================================================================//
  // - loads all the shorts with an api call
  //==========================================================================================================================//

  loadAllCards(){

    if(!(this.apollo.client===undefined)) this.apollo  // check if api exists
    .watchQuery({
      query: gql(this.getALLCardsQuery), // apollo query
    })
    .valueChanges.subscribe((result: any) => {

      // assign api output to cardlist
      this.cardlist = result.data.getAllShorts;

      this.readytoview = true;

      //reset end index and reload the cards on screen
      this.endIndex = Math.ceil(this.cardlist.length/this.cardsPerPage);
      this.btnNaviClick(0);
    });
  }
  
  //==========================================================================================================================//
  // - reload the cardlist on the user screen 
  //==========================================================================================================================//
  refreshCards(){
    this.cards = this.breakpointObserver.observe( Breakpoints.Handset).pipe(
      
      map(() => {
      this.endIndex = Math.ceil(this.cardlist.length/this.cardsPerPage);
      const out = [];

      for (let index = 0; index < this.cardsPerPage; index++) {
        if(index+(this.pageIndex-1)*this.cardsPerPage < this.cardlist.length) out.push(this.cardlist[index+(this.pageIndex-1)*this.cardsPerPage]);
      }  

      return out;
      })
    );
  }

  //==========================================================================================================================//
  // - onlclick event for the pages bottom navigation buttons
  // - disables buttons when the page edgepoints are reached
  // - loads in next set of cards
  //==========================================================================================================================//
  btnNaviClick(i : number){
    
    // default to disabled

    (<HTMLButtonElement>document.getElementById("prevBtn")).disabled = false;
    (<HTMLButtonElement>document.getElementById("nextBtn")).disabled = false;

    // add :onhover css
    (<HTMLButtonElement>document.getElementById("prevBtn")).className = "px-4 py-2 formbuttonblue rounded";
    (<HTMLButtonElement>document.getElementById("nextBtn")).className = "px-4 py-2 formbuttonblue rounded";

    // get current page index
    this.pageIndex += i;

    
    if(this.pageIndex <=1){ // left button check
      (<HTMLButtonElement>document.getElementById("prevBtn")).disabled = true;
      (<HTMLButtonElement>document.getElementById("prevBtn")).className = "px-4 py-2 formbuttonBlueDisabled rounded";
    }
    if(this.endIndex <= this.pageIndex){  // right button check
      (<HTMLButtonElement>document.getElementById("nextBtn")).disabled = true;
      (<HTMLButtonElement>document.getElementById("nextBtn")).className = "px-4 py-2 formbuttonBlueDisabled rounded";
    }

    // update index number on screen
    (<HTMLButtonElement>document.getElementById("curBtn")).innerHTML = (this.pageIndex).toString();

    // reload new cards from the next page
    this.refreshCards();
  }
}


