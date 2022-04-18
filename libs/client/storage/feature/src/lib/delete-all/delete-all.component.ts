import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
@Component({
  selector: 'graduates-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.scss']
})
export class DeleteAllComponent implements OnInit {

  fileCategory = "";
  userID = 0;

  constructor(private route: ActivatedRoute, private apollo: Apollo) { 
    // do something
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {

      this.userID = params.get('userID');     
    })
  }

  delBut(){

    for (let index = 1; index < 4; index++) {

      if (index == 1) {
        this.fileCategory = "Academic Record";
      }else if(index == 2){
        this.fileCategory = "Transcript";
      }else{
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
      
    }
    alert("All files in the database erazed successfully"); 
    window.location.href ="storage/"+this.userID;
  }

}
