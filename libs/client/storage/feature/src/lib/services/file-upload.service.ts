import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url
  baseApiUrl = "https://file.io"

  constructor(private http:HttpClient) {
    // do something
   }

   // Returns an observable
  upload(file:any):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  }

  uploadFile(FileName: string, UserId: string, FileCategory: string, FileExtension: string, Files: File): Observable<any> {
    const query = 'mutation ($Filename: String! , $UserId: String , $FileCategory: String! , $FileExtension: String! , $Files: Upload!) {File(filename: $Filename , userId: UserId , fileCategory:$FileCategory  , fileExtension: $FileExtension , file: $Files}';

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query, variables: { filename: FileName, userId: UserId,  fileCategory: FileCategory, fileExtension: FileExtension, file:Files} }), options);
  }

}
