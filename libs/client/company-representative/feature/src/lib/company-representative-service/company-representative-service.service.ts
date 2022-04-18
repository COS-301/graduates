import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class CompanyRepresentativeService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) { }

  getCompanyRepresentative(repID: string): Observable<any> {
    const query = 'query{getCompanyRepresentative(id:"' + repID + '"){repName,jobTitle,repExperience,aboutMe,phoneNumber,location,email,website,linkedIn,twitter,instagram,facebook,snapChat,gitHub}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }

  login(email: string, password: string): Observable<any> {
    const query = 'query{login(email: "' + email + '", password: "' + password + '"){id}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }

  deleteRepresentative(repID: string): Observable<any> {
    const query = 'mutation{deleteCompanyRepresentative(id:"c1234"){repName}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }

  upload(file: any, userID: string) {   
      let base64data;
        const fileReaderInstance = new FileReader();
        fileReaderInstance.readAsDataURL(file); 
        fileReaderInstance.onload = () => {
        base64data = fileReaderInstance.result;     
          console.log(file.name);
      
        console.log(file);
        this.apollo.mutate<any>({
          mutation: gql`
            mutation($Filename: String! , $UserId: String! , $FileCategory: String! , $FileExtension: String! , $Files: String!) {
              upload(filename: $Filename , userId: $UserId , fileCategory:$FileCategory  , fileExtension: $FileExtension , file: $Files)
            }
          `,
          variables: {
            Filename: file.name,
            UserId: userID,
            FileCategory: "Image",
            FileExtension: file.type,
            Files: base64data

          }
        })
        .subscribe(({ data}) => {
          if (data){ 
            console.log("Done");
          }
        });
        const res = {res:"Could not Upload"}
    }
  }

  download(userID: string, fileCategory: string) {
    const query = 'query{download(userId:"' + userID + '", fileCategory:"' + fileCategory + '")}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }

  delete(userID: string, fileCategory: string) {
    const query = 'mutation{delete(userId:"' + userID + '", fileCategory:"' + fileCategory + '")}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }

  updateRepresentative(id: string, name :string, experience :string, number :string, location :string, email :string, linkedin :string, twitter :string, instagram :string, facebook :string, snapchat :string, github :string){
    const query = 'mutation{updateCompanyRepresentative(id:"'+id+'",name: "'+name+'", experience:"'+experience+'", contactNumber: "'+number+'", location: "'+location+'", email:"'+email+'", linkedIn: "'+linkedin+'", twitter: "'+twitter+'", instagram:"'+instagram+'", facebook:"'+facebook+'", snapchat:"'+snapchat+'", github:"'+github+'") {id}}';
    console.log(query);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>('http://localhost:3333/graphql',JSON.stringify({ query: query }), options);
  }
}
