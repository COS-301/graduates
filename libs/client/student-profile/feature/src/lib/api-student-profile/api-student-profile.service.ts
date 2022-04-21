import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { gql, useQuery } from '@apollo/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentProfileService {

  constructor(private client: HttpClient) {}
 getStudentDetails(input: string| null): Observable<any> {
      const query = 'query ($studentNum: String!) {student(studentNum: $studentNum) { studentNum, firstName, lastName, title, email, phoneNum, dateOfBirth, nameOfDegree, bio, tags, preferredLocation, employmentStatus, notableAchievements, links }}';
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      if(input=="u12345678") return this.client.post<any>('https://301graduates.live:3333/graphql', JSON.stringify({ query: query, variables: { studentNum: "u12345678" } }), options);
      return this.client.post<any>('https://301graduates.live:3333/graphql', JSON.stringify({ query: query, variables: { studentNum: "u19054512" } }), options);
     }
}
