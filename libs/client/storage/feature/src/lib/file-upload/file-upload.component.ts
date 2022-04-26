import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from "../services/file-upload.service";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
@Component({
  selector: 'graduates-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  // images for thumbnails
  greyImageSrcColor = 'assets/thumbnails/notGrey.png';
  greyImageSrcGrey = 'assets/thumbnails/grey.png';
  greyImageAlt = 'noFileSelected';

  // for user details
  userID = "";
  fileCategory = "";
  cat = "";

  // for statuses
  noFileSelected = true;
  safeToUpload = false;
  invalid = false;
  invalid_2 = true;

  imageStatColor = false;
  imageStatGrey = true;

  // Variable to store shortLink from api response
    success = "";
    loading = false; // Flag variable
    file!: File; // Variable to store file
 // Variable to store file
  
    // Inject service 
    constructor(
      private fileUploadService: FileUploadService, 
      private route: ActivatedRoute,
      private apollo: Apollo) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((params: any) => {

      this.userID = params.get('userID');
      this.fileCategory = params.get('fileCategory');

      if (params.get('fileCategory') === "Academic Record") {
        this.cat = "Academic Record";
      }else if (params.get('fileCategory') === "Transcript") {
        this.cat = "Transcript";
      }else{
        this.cat = "CV";
      }
  
        console.log("U: " + this.userID + " Cat: " + this.fileCategory);      
      })
    }
  
    // On file Select
    onChange(event:any) {

        console.log("A file has been selected");
        
        console.log(event.target.files[0].type);
        console.log(event.target.files[0]);
        
        if (event.target.files.length == 1 && event.target.files[0].type == "application/pdf") {
          this.noFileSelected = false;
          this.safeToUpload = true;
          this.invalid = false;
          this.invalid_2 = false;

          this.imageStatColor = true;
          this.imageStatGrey = false;

          console.log("File selected is " + event.target.files.length);
        }else if (event.target.files.length == 1 && event.target.files[0].type != "application/pdf") {
           this.safeToUpload = false;
           this.invalid = true;
           this.invalid_2 = true;

           this.imageStatColor = false;
          this.imageStatGrey = true;
        }
        

        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {

        // Loading design activation
        this.loading = !this.loading;

        console.log(this.file);

        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.success = event.link;
  
                    this.loading = false; // Flag variable 
                    this.safeToUpload = false;
                    this.invalid_2 = true;
                }
            }
        );

    }
  
  
    // just a duplicate of the above function 
    onUploadFile() {
      const file = this.file;
      let base64data;
      const fileReaderInstance = new FileReader();
      fileReaderInstance.readAsDataURL(file); 
      fileReaderInstance.onload = () => {
       base64data = fileReaderInstance.result;     
       console.log(base64data)           
    
        // Loading design activation
      this.loading = !this.loading;

      if (this.invalid == true) {
        // do nothign
      }else{
        this.success = "true";
      }
      

      this.loading = false; // Flag variable 
          this.safeToUpload = false;
          this.invalid_2 = true;
    
      console.log(this.file);
      this.apollo.mutate<any>({
        mutation: gql`
          mutation($Filename: String! , $UserId: String! , $FileCategory: String! , $FileExtension: String! , $Files: String!) {
            upload(filename: $Filename , userId: $UserId , fileCategory:$FileCategory  , fileExtension: $FileExtension , file: $Files)
          }
        `,
        variables: {
          Filename: this.file.name,
          UserId: this.userID,
          FileCategory: this.fileCategory,
          FileExtension: this.file.type,
          Files: base64data

        }
      })
      .subscribe(({ data}) => {
        if (data){ 

          console.log(data)}

          // this.loading = false; // Flag variable 
          // this.safeToUpload = false;
          // this.invalid_2 = true;

        });
        const res = {res:"Could not Upload"}
      }
      
     
    
   

      // Loading design activation
      // this.loading = !this.loading;
    
      // console.log(this.file);
      // this.apollo.mutate<any>({
      //   mutation: gql`
      //     mutation($Filename: String! , $UserId: String! , $FileCategory: String! , $FileExtension: String! , $Files:Upload !) {
      //       upload(filename: $Filename , userId: $UserId , fileCategory:$FileCategory  , fileExtension: $FileExtension , file: $Files)
      //     }
      //   `,
      //   variables: {
      //     Filename: this.file.name,
      //     UserId: this.userID,
      //     FileCategory: this.fileCategory,
      //     FileExtension: this.file.type,
      //     Files: this.file

      //   }
      // })
      // .subscribe(({ data}) => {
      //   if (data){ 

      //     console.log(data)}
       
      // });
      // const res = {res:"Could not Upload"}
    
    
    

      // this.fileUploadService.uploadFile(this.file.name, this.userID, this.fileCategory, this.file?.type, this.file).subscribe(
      //     (event: any) => {
      //         if (typeof (event) === 'object') {

      //             // Short link via api response
      //             this.success = event.link;

      //             this.loading = false; // Flag variable 
      //             this.safeToUpload = false;
      //             this.invalid_2 = true;
      //         }
      //     }
      // );

  }
  

    goBack(){
      window.location.href = "storage/" + this.userID;
    }

}
