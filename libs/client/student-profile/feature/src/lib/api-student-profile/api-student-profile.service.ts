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
    
    getStudentDetails(): Observable<any> {
      const query = 'query ($studentNum: String!) {student(studentNum: $studentNum) { studentNum, firstName, lastName, title, email, phoneNum, dateOfBirth, nameOfDegree, bio, tags, preferredLocation, employmentStatus, notableAchievements, links }}';
  
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
  
      return this.client.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query, variables: { studentNum: "u19001836" } }), options);

     }
}