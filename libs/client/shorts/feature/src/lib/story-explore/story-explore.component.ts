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

  cardlist = [{"user": {"name": "Matthew"},"shortTag":[{"tag":"TeamWork"}],"userId":"test","id":"cl22e308w0208hcvks42s959n","thumbnail":""}];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.cardlist;
    })
  );

  getALLCardsQuery = "query{ getAllShorts{ user{  name  },shortTag{ tag },userId,id, thumbnail}}";

  
  @Input() upload : boolean;
  @Input() report : boolean;

  @ViewChild('vid') d1! : ElementRef;

  uploadfrm! : FormGroup;
  reportfrm! : FormGroup;
  builder! : FormBuilder; 

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

  shortId = "cl22e308w0208hcvks42s959n";
  userId = "69";

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
  viewingThumbnailSorce = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIANMBUgMBIQACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAABAgMABAUGB//aAAgBAQAAAAD4Xt6ei1Xo7MzFiSdtsAAqhAiJOUYcvJzdHX03tV6MzsWJJx2wwAUKqoqTlKHNyc1+vpvWru7MxYknY7AYBQEVVSc4w5+Xmt13vaju7MWY5sdthsoAVQipOco83Nz26r3rR3dmLEknY7DAAKFVVRJyhDlhXp6LVo7szMWxJx2wwAAUKqpOcpc/NF+notSrs7FiWdmJ2wCqigKqqiTlGHPCnR0WpVndixela0YnAKkpSQIFVEnKUOaL9N61o7szF6X6uqcpLmetY8nPJFCos0lKHPF+i9a0d2Zi/R1+B8zeztgk+f2Pr+LnkoVUScpQ54v0WtWjO7E16vR/PvQ22OGEfsI8kVVVRElKEIPe9a0d2Zjbr9L8+9TZ+zyrbBPo9xQQKqJOcYwi3RataO7MWt2dnx/ccftOT57jbT908MECqiTnGMJG961ejOxa3Z1/K9x2+w4/mEsE9jcMECqk0lKMInotWtHdmZq9nd8p6O2Th9A7T9ZOKCqqok5xlzyPRataO7Mxr1ej8p6R222wn60OSKqqok5SjCe6LVq9GdmNL9nk0fHbDLL2+HmmqqqTSUpc8je1a0d3Zi1ejpidttiLQ5oooVESc5RhMXtalHd2Zi9LVqzbDIkoTRVVUWaSlGMte1a0d3ZizMzsTtsqqiqFVURElKMJbotWtHdnYsSSTtthgoAVVREnOMoTFr1rR3dmYlsTscNhgoCqqpNJSjBBa1a0o7OxYknHbbYAAKFVEmkpRjMXralKO7MzEk4qp2bAAKoRUnOcZRmLWrWju7sXzHHDbYjABVVUSaSlGMxa1a0ejs5YscdtiMBlAQIiJOUpRlrVrWrtRnYktidtsMAFCqiIk5SlBf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQIQAAAA72qAAkZtpQARJLaUAIiS1SgEIktUKCEIUpYAQktFFIIJGgqhEDKqGkLIEhaFwsasEhaCBbBJLVAAIktUDWSwiRaoNZBERaoJQRIUqgEIhVKAQiCqUCEQKVQQhAUoqEEBRQIIAoLAQSigAQShQAgktCgECS0CggJFoFEAk//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAA4QgCUUtkEACi2QIAULYgQFA0SAABVSAABaRAJQKokCBQq2JAgKKtiINBkVVREUCKpUQlAlKpCJTOiVSkElM6JaKIIAKUIIAKUIIAUUEIAUoCEIWilggQUUtkEABS2QQAKLWQgCgtSAipQWkgAAWkQAAtCQAAqv/EACEQAQEBAQACAwEAAwEAAAAAAAECEQADEgQFExAUFRYg/9oACAEBAAECAPH0dLLKIiIiO7u+27u7vturu7q6qqq0033k56OjpZRERHd3d3d3d3d3d3d1VVVVVWm+v+R0dLPHHHCO8Ij/ADd3d3d3d3d1VeVVVa6+v+R0M9LKIiPbu7o7u7u7u6q7u6q8qvLTbfbHSyyiIiI7u+2+277bvtu7q7vtrWqqqtNNNvQz0soiIju7o7u7u7u7u7u7qqqqqrTbb0MsoiIiO7u8ccdnr6+vr6+rOPP81dVVVVWmm/5DKMoiIju7onSEken5/n+fp+bDLNc9uruqqrTTTbsMsoiIiO7oz0ET+VfKft377/ov+i/359yfOJ8njsrntVVVVVaabehlERE4R3dno7xn3n2/+nn6z/Dfj14a8N+C/i+T4Hk+o+B9j5Yspe1VVVVaab7YZThEROEe07x94I+NeIlFdRRRZZ8iPi+TydXL2qqqq0009DLKIiIjujL4+8NfVRjNT4fH8r6Uuuoso80/WPl61dVVVVWmmnpZRERER3dl8T5K+BDLNT8Y35fwPk/UZc3Pmn6vvK2ru6qqq0009LKIiIiI6MPjfI/Bllmp8E7877Hz/ex4rm588/Xd5W1dVVVVWmmnYZRERER3hh8bPfXDLLPj75H3ni+tfHU3NT55+D3lbV5VeVVV6mnZZZREREd3ZYr49/WziUVNTU2WWWefvB3kqlVVVVVWmmnpZRERER0RlivHfyPEUrz1dXX1dbbXj83ku6VVVVVVaaadlllERE4e0Rmosr/A/wBY/Vv1T9U/VP1T9U/Vv1x13VLuqqqqrTTbssssoiIiO6Izc+Q8p5jzft+37ft+z5ny15KtdVVVVVVppp6WURERER3dKKLL/T9P0/T9P0/R8nu217buqqqqrTTTssoiIiIiO7u77e3t7e3t7e3t7bu7uqqqqrTTTssoiIiIju7u7v8AN7e3+7vbuqqqq0009LLKIiIjujuju727u7u7u7qqqqqrTTT0soiIiIiI7w7va+T9/wBjzHl7d3d3VVVVVppp6UREThER7eHd/mp6+rJO89u6qqqq8qrTTs8IiIicI7u9v93/AMb/AHf5qqqvPKq009PHCJwiIjuiI7uru6u7qquqvKqq8tK09//EAEoQAAECAgcFBAUGCA8AAAAAAAEAAgNhBBESIjJRcRAhMUFCBSAwQBMzUFKxBhQjgZHBRFNyhJOi0dIWJCU0RlZgYnSSlKOywuL/2gAIAQEAAz8A4eyh/ZXjt02abNEFptElohJBaISQWi0Wi0QkhJDZotFoghJCS02CWzRDZp4U/Cn35qeyansn7AO0oo+Hr4g9j8UfbhYAX3QebrvxVAhes7RojPyqRDHxK7Dbi7coA/Oof7V8nRx7f7P/ANQ1fJsbv4QUD9Kvk1/WCg/pV8nD/SDs/wDTtC7Bdw7d7PP5zDXZcTB2rQnaUmGfvTIvq4jH/kPDvgi0kEEEZ+wKXCpLezOz3+ijWGvpNJFRdBa/CxgPW4b6+QVAfEL48B9IiF2+JHf6Vx1Lq12cx12gQhe5MbnoqIHGqjNF7kG56KAHGqD1Sz0UK276M4jlnooVt30ZxHLPRQbTq4RxHLPRUYudXRwbxyz0VBc59dDhm8eluei7LLnH5hDBBO9oDTxkFH7MjNgxY0WLQi+yRFeXugiuq0xx32RzaUQSOYPg6+UkrbmNzIH2oUuNS6Y6u1SaVEicsNqy0aBoCZb6sUs0y2cWKWaZbOLFLNMtnFiOWaZbdixnLNMtOxYjlmmW3YsRyzTLTsWI5Zplt+LEcs0y0/FiOWahuMQEOqJIPBGPQaJEdvcYdTjNhLD8PPBlb/dBd9grTRQqEKz6th4DnvTLeI4jyGeqZbO92LIZ6plt144shnqoUWm0aC8vsxI7WGoAGonkVS4JfEgn5wyuupoqiATbz+pQ3PdedWHmu6M0y27ecR6RnqmW3XjiPIZ6plt+84jyGeqZafeOI8hnqmWom84jyGeqB7OhD3Ysdv8AuE/f56zRaWcqPGP6hTRR6KLfCHD6TkEy3j6vdOaZbN/q905pls3+o9JzTR2nQTb/AApnI+8twVEp2+PD+k5RWmy8fXzGqpdHLnsd6eHWSSxptgTb94TS5xt9R6TmmW33+o9JzTbT7/Uek5ptqJf6j0nNAUFwB/Co/wAR54miUz/Dxv8AgUPQUa+MDORyQtm+MR5HNC2b4xZHNC2b4xZHNfylQjaH86ZyPvI1KhdmQmxabSWQWuwA73vkxo3uOi7Vp5LKDD+YQPx8ZtukOm1u9rPrrKLKw+kuiOtG0+IS57iTxJQtvNsYjyOaFt98YjyOaFqJfGI8jmqqE8cf4zH+7vFHwJd3TYO7ohsD4cVm69De37WkIOo1ENtnq4fOSFvGzEfihbN9mLOaFt19mLOeihwqZAjRIjAyHHD3HeagDkAu0aabHZsFtEhV1Gk0htcU/kQ94bq5QYceJHiRfT0lxqfHjPL4h+s8BIIB777MR5zQtuvsxHnPRC2++zEec0Lbr7MR5z0QrffZiPOas0Ibxvjx3bpuq+5CXjadyfgz2C2ys8wiyBAYS2thLCK/cdZV/E3FmM1fN5mL3hmjbN5mP3po23Xm4z1TV915mI9QzV915mI9QzRtuvNxHqGavuvMxHqmjbfeZiPMZo233m4j1DNXn3mYj1TVih0cE9Lnf53ly4qeyfkZ9yfdOadR6ZEeB9FHeIjTwAccTda96JdxGL3hmnWjwxZjNG0d4xe8M0bbuGM9QzRtv4Yz1DNG27hiPUM0bb+GI9QzTrbuGI9QzRtv4YjzGaNp+8cT1DNRaVHMGHVW5xrNeFte9xkECTZFTeDRkBuCnsn35qflGuaWPaHNPFrhWCqG41j0rJNeCP1gVAJrFMjDfX6th+8KGSSKc/jXvgj95AuJFP6q98H9jkS4n5+3jX6k/vIlxPz9nEn1Lv2qsk/PxxJ9Sf3kysk09281+p/9qBWSabG3kn1TR/2VErJdFpDt9fFjfgCoMFrmQYTYbXGt1VZLj/eJ3nyA8YBTU9k1PZNTU1NT2T2BT2hT8afen3Jqampqampqampo5qe2ansnsmp9ye2fc1WviaorVarVa7CtUfJHzMvF4ezuPlmB1kuvZKD+NbxAUKoH0g3qG41CICobnWQ8E1cB7HaTWWglMHQPsTKqrDfsTObBwq4JgNbWNGgqR8lPyUu/LylQR3907d63Ioo9ziijXsO5HwOOw7eK37DsOz//xAAjEQABAgUEAwEAAAAAAAAAAAABABEQIDBAUTFBUGECIWBw/9oACAECAQE/AOMHGD6FxkJ/HITjIsimEjDCFgdphrQ90DtHSIoic7TCwMjvAWGI6xFhjjWTdpu03ab9DERS/8QAHhEAAgIBBQEAAAAAAAAAAAAAAREAQCAQMVFhcEH/2gAIAQMBAT8A85R4iPBiPFIbxnBmGgMjQH3I0BWGCVIa7UxWFdx9Rx9R+of/2Q==";    

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

  //  ==================================================================================== //
  //  Submit Pop-Up Functions ============================================================ //
  
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
          console.log(resp); //this will log the base64 in the terminal on attatch
        })
      }
    }
  }

  onThumbnailUpload(event : any) {
    this.ThumbnailFile = event.target.files[0];
    console.log(event.target.files[0].type);
    this.thumbnailuploadflag = true; 
    const re = /^image*/;
    if (this.ThumbnailFile.type.match(re)) {
      if (this.ThumbnailFile.size < 6000000) {
        this.Base64encode(this.ThumbnailFile).then(resp => {
          this.ThumbnailFileBase64 = resp;
          this.thumbnailuploadflag = false;
          console.log(resp); //this will log the base64 in the terminal on attatch
        })
      }
    }
  }

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

        console.log(resp);
        
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
                      short: { description: "My short", archived: false, shortTag: ${ tags }},
                      userId: "", 
                      vidString: "${ this.VideoFileBase64 }", 
                      vidCat: Videos, 
                      thumbString: "${ this.ThumbnailFileBase64 }", 
                      thumbCat:: Files
                      ) {
                          id,
                          userId,
                          description,
                          link,
                          thumbnail,
                          datePosted,
                          archive,
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
          console.log(result);
          //resolve the promise from the query:
          resolve(result);
        });
    })
  }

  getTagArray() : any {
    const s = this.uploadfrm.controls['tags'].value;
    const output = s.split('#');
    output.shift();
    return output;
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
  //  ====================================================================================== //
  //  Selected Pop-Up Functions ============================================================ //

  viewStory(s : string) {

    this.viewingName = "";
    this.viewingTags = "";

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

    if(!(this.apollo.client===undefined)) this.apollo
    .watchQuery({
      query: getSelectedQ,
      fetchPolicy: "no-cache" 
    })
    .valueChanges.subscribe((result: any) => {
      const selectedCard = result.data.getShortById;
      
      this.viewingName = selectedCard.user.name;
      for(const a of selectedCard.shortTag){
        this.viewingTags += `#${ a.tag } `;
      }
      this.viewingThumbnailSorce = selectedCard.thumbnail;

      //Change this line to be result.<correct_name> to embed to the card:
      //this.embedVideoToCard(result.video);

      this.currentlyViewing = s;
      this.viewing = true;
      this.reporting = false;
      this.successfulReport = false;

      this.shortId = selectedCard.id;

      // hide report button if user has all ready reported this story

      this.alreadyReported = false;

      for( const s of selectedCard.shortReport){
        if(this.userId == s.userId){
          this.alreadyReported = true;
          break;
        }
      }

      this.viewing = true;
    });


  }

  closeViewing() {
    this.viewing = false;
  }

  //  ==================================================================================== //
  //  Report Pop-Up Functions ============================================================ //

  closeSuccessReport() {
    this.reporting = false;
    this.viewing = false;
    this.successfulReport = false;
  }

  cancelReport() {
    this.reporting = false;
    this.viewing = true;
    
    this.reportfrm.reset();
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

    const reason = this.reportfrm.controls['reason'].value;
    

    // Send reportText to the api:
      if (!(this.apollo.client === undefined))
      this.apollo
        .mutate ({
          mutation: gql`mutation {
            reportShort(report: {shortId: "${ this.shortId }", reason: "${ reason }"}, userId: "${ this.userId }") {
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
        });


  }

  //  ==================================================================================== //
  //  Story Explore Functions ============================================================ //

  // VARS


  // FUNCS
  
  btnNaviClick(i : number){
    
    (<HTMLButtonElement>document.getElementById("prevBtn")).disabled = false;
    (<HTMLButtonElement>document.getElementById("nextBtn")).disabled = false;

    
    (<HTMLButtonElement>document.getElementById("prevBtn")).className = "px-4 py-2 formbuttonblue rounded";
    (<HTMLButtonElement>document.getElementById("nextBtn")).className = "px-4 py-2 formbuttonblue rounded";

    this.pageIndex += i;
    if(this.pageIndex <=1){
      (<HTMLButtonElement>document.getElementById("prevBtn")).disabled = true;
      (<HTMLButtonElement>document.getElementById("prevBtn")).className = "px-4 py-2 formbuttonBlueDisabled rounded";
    }
    if(this.endIndex <= this.pageIndex){
      (<HTMLButtonElement>document.getElementById("nextBtn")).disabled = true;
      (<HTMLButtonElement>document.getElementById("nextBtn")).className = "px-4 py-2 formbuttonBlueDisabled rounded";
    }

    (<HTMLButtonElement>document.getElementById("curBtn")).innerHTML = (this.pageIndex).toString();

    this.refreshCards();
  }


  search(){
    
    this.pageIndex = 1;

    const searchText = (<HTMLInputElement>document.getElementById("search")).value;
    alert('searching for ' + searchText);
    (<HTMLInputElement>document.getElementById("search")).value= "";

    if(searchText === "") this.loadAllCards();
    else if(searchText[0] === '#') this.loadCardsByTag(searchText);
    else this.loadCardsByUserName(searchText);
  }
  loadAllCards(){

    if(!(this.apollo.client===undefined)) this.apollo
    .watchQuery({
      query: gql(this.getALLCardsQuery),
    })
    .valueChanges.subscribe((result: any) => {
      this.cardlist = result.data.getAllShorts;
      
      console.log(result.data);

      this.endIndex = Math.ceil(this.cardlist.length/this.cardsPerPage);
      this.btnNaviClick(0);
    });
  }

  loadCardsByTag(sText: string){
    if(!(this.apollo.client===undefined)) this.apollo
    .watchQuery({
      query: gql(this.getALLCardsQuery),
    })
    .valueChanges.subscribe((result: any) => {
      
      this.cardlist = [];
      const all = result.data.getAllShorts;
      
      for (let index = 0; index < all.length; index++) {

        for(const el of all[index].shortTag){
          if(el.tag === sText) {
            this.cardlist.push(all[index]);
            break;
          }
        }
        
       }
      
      this.endIndex = Math.ceil(this.cardlist.length/this.cardsPerPage);
      this.btnNaviClick(0);
    });
  }

  loadCardsByUserName(sText: string){
    if(!(this.apollo.client===undefined)) this.apollo
    .watchQuery({
      query: gql(this.getALLCardsQuery),
    })
    .valueChanges.subscribe((result: any) => {
      
      this.cardlist = [];
      const all = result.data.getAllShorts;
      
      for (let index = 0; index < all.length; index++) {
        if(all[index].user.name === sText) this.cardlist.push(all[index]);
      }
      
      // refresh page
      
      this.endIndex = Math.ceil(this.cardlist.length/this.cardsPerPage);
      this.btnNaviClick(0);
    });
  }

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
}


