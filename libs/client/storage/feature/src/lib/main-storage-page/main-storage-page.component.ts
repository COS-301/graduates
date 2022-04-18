import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
@Component({
  selector: 'graduates-main-storage-page',
  templateUrl: './main-storage-page.component.html',
  styleUrls: ['./main-storage-page.component.scss']
})
export class MainStoragePageComponent implements OnInit {

  userID = ""
  fileCategory = ""

  constructor(private route: ActivatedRoute,
    private apollo: Apollo ) {
    // do something here
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {

      this.userID = params.get('userID');

      console.log("U: " + this.userID);      
    })
  }

  down(val: number){

    if (val == 1) {
      console.log("userID: " + this.userID);
      console.log("File to download: Academic Record");

      this.fileCategory = "Academic Record";
    } else if(val == 2){
      console.log("userID: " + this.userID);
      console.log("File to download: Transcript");

      this.fileCategory = "Transcript";
    }else{
      console.log("userID: " + this.userID);
      console.log("File to download: CV");

      this.fileCategory = "CV";
    }
    this.apollo.query<any>({
      query: gql`
        query( $UserId: String! , $FileCategory: String!) {
          download( userId: $UserId , fileCategory:$FileCategory )
        }
      `,
      variables: {
        UserId: this.userID,
        FileCategory: this.fileCategory,
      }
    })
    .subscribe(({ data}) => {
      if (data.download!="false"){ 
          window.location.href = data.download;
        console.log(data.download)}
        else{
          alert("No " + this.fileCategory + " uploaded.");
          //window.location.href ="storage/"+this.userID;
          // console.log("No " + this.fileCategory + " uploaded.")}
        }



      });

    // Based on the fileCategory you can you know what file of userID to download
    // Your code comes here....

  }

  del(val: number){
    
    if (val == 1) {
      console.log("userID: " + this.userID);
      console.log("File to delete: Academic Record");

      this.fileCategory = "Academic Record";
    } else if(val == 2){
      console.log("userID: " + this.userID);
      console.log("File to delete: Transcript");

      this.fileCategory = "Transcript";
    }else{
      console.log("userID: " + this.userID);
      console.log("File to delete: CV");

      this.fileCategory = "CV";
    }
    this.apollo.mutate<any>({
      mutation: gql`
        mutation( $UserId: String! , $FileCategory: String!) {
          delete( userId: $UserId , fileCategory:$FileCategory )
        }
      `,
      variables: {
        UserId: this.userID,
        FileCategory: this.fileCategory,
      }
    })
    .subscribe(({ data}) => {
      if (data){ 

        console.log(data)}


      });

      alert(this.fileCategory + " deleted successfully.")
      // "No " + this.fileCategory + " uploaded."
      window.location.href ="storage/"+this.userID;
    }


    // Based on the fileCategory you can you know what file of userID to delete
    // Your code comes here....



  }
