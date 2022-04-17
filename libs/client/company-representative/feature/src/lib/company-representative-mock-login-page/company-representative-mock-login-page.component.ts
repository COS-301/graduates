import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'graduates-company-representative-mock-login-page',
  templateUrl: './company-representative-mock-login-page.component.html',
  styleUrls: ['./company-representative-mock-login-page.component.scss']
})
export class CompanyRepresentativeMockLoginPageComponent implements OnInit{
  formdata!: FormGroup;
  flag = false;
  constructor(private _router: Router, private apollo: Apollo, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.formdata = new FormGroup({
       email: new FormControl(""),
       password: new FormControl("")
    });
  }


  navigateToFirst() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }

  alertBox(){
    alert("incorrect Login Details!");
  }

  async submit(data: { email: string; password: string; }){
    const newEmail = data.email, newPassword = data.password;
    alert("email: " + data.email + "Passie: " + data.password);
    const query = 'query {login(email: "'+ newEmail +'", password: "'+ newPassword +'") {id}}';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.httpClient.post<any>('http://localhost:3333/graphql', JSON.stringify({query: query}), options)
    // this.apollo.mutate<any>({
    //   mutation: gql`
    //   query {
    //       login($email: String!, $password: String! ) {
    //         id
    //     }
    //   }`,
    //   variables: {
    //     email: newEmail,
    //     password: newPassword
    //   }
    // }).subscribe(({data}) => {
    //   if (data){
    //     const id = data.user.id;
    //     this.navigateToFirst();
    //   }
    //   else{
    //     this.alertBox();
    //   }
    // })
  }
}
