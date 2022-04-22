/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { gql, useQuery } from '@apollo/client';
import { Observable } from 'rxjs';
//import { ApiUpintegrationApiFeatureModule } from '@./../../../api/upintegration/api/feature/src/lib/api-upintegration.module';
//import { QueryBus } from '@nestjs/cqrs';

@Component({
  selector: 'graduates-upintegration-body',
  templateUrl: './upintegration-body.component.html',
  styleUrls: ['./upintegration-body.component.scss'],
})
export class UpintegrationBodyComponent {
  constructor(private client: HttpClient) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submit(studentNumberTextbox: { value: any }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const studentNumber = studentNumberTextbox.value;

    const query =
      'query ($studentNum:String!){getStudentDetailsUP(studentNum:$studentNum) {}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    if (studentNumber == 'u12121212')
      return this.client.post<any>(
        'https://301graduates.live:3333/graphql',
        JSON.stringify({
          query: query,
          variables: { studentNum: 'u12121212' },
        }),
        options
      );
    return this.client.post<any>(
      'https://301graduates.live:3333/graphql',
      JSON.stringify({ query: query, variables: { studentNum: 'u20898989' } }),
      options
    );
  }
}
