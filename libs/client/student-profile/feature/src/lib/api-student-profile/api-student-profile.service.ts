import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { gql, useQuery } from '@apollo/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentProfileService {

  
  constructor(private client: HttpClient) {

    }

    
    getStudentDetails() {
      const query = 'query ($studentNum: String!) {student(studentNum: $studentNum) { firstName, lastName }}';
  
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
  
      console.log(this.client.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query, variables: { studentNum: "u20465026" } }), options).subscribe(val => console.log(val)));

     }
}
